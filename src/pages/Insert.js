// import { Link} from "react-router-dom";
import Base from "./Base";
const Insert = () =>{
    return(
        <>
         <div class="wrapper">
            <Base/>
            <div class="content-create">
                <div class="titre">
                    <h3>Ajout Forfait</h3>
                    <div class="icon">
                        <i class="fa fa-bars" id="menu-btn"></i>
                    </div>
                </div>
                <div class="container">
                    <div class="table">
                        <form action="" method="post">
                            <div class="input">
                                <label for="Nom">Nom</label>
                                <input type="text" name="" id=""/>
                            </div>
                            <div class="input">
                                <label for="Nom">Nom</label>
                                <input type="text" name="" id=""/>
                            </div>
                            <div class="input">
                                <label for="Nom">Nom</label>
                                <input type="text" name="" id=""/>
                            </div>
                            <div class="input">
                                <label for="Nom">Nom</label>
                                <select name="" id="">
                                    <option value="">--- Type ---</option>
                                </select>
                            </div>
                            <div class="input">
                                <button type="submit">Enregistrer</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}
export default Insert;