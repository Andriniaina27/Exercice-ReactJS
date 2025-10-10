import { Link} from "react-router-dom";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Base from "./Base"
const Read = () =>{
    return(
        <>
        <div class="wrapper">
            <Base/>
            <div class="content-table">
                <div class="head">
                    <input type="text" name="" id="search" placeholder="Recherche...."/>
                    <div class="icon">
                        <i id="menu-btn">< FontAwesomeIcon icon={faBars}/></i>
                    </div>
                </div>
                <div class="titre">
                    <h3>Tableau</h3>
                    <Link to="/Insert" class="btn">< FontAwesomeIcon icon={faPlusCircle}/></Link>
                </div>
                <div class="container">
                    <div class="table">
                        <table>
                            <thead>
                                <th>Nom</th>
                                <th>Prenom</th>
                                <th>Age</th>
                                <th>Groupe</th>
                                <th>Action</th>
                                
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Andriniaina</td>
                                    <td>Luca</td>
                                    <td>20 ans</td>
                                    <td>Touriste</td>
                                    <td width = "200" class="action">
                                        <button class="editBtn" type="submit">Supprimer</button>
                                        <button class="editBtn"> Modifier</button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}
export default Read;