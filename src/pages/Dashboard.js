// import Base from "./pages/Base";
import Base from "./Base";
import { faList } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const Dashboard = () =>{
    return(
        <body>
            <div class="wrapper">
                <Base/>
                <div class="content">
                    <div class="head">
                        <h3>Dashboard</h3>
                        <div class="date">
                            <h4>Mercredi 10 juin 2025</h4>
                        </div>
                        <div class="icon">
                            <i class="fa fa-bars" id="menu-btn"></i>
                        </div>
                    </div>
                    <div class="container">
                        <div class="card">
                            <div class="card-result">
                                <div class="icon">
                                    <div>< FontAwesomeIcon icon={faList}/></div>
                                </div>
                                <div class="contenu">
                                    <p>Total des Clients</p>
                                    <h4>50</h4>
                                </div>
                            </div>
                            <div class="card-result-1">
                                <div class="icon">
                                    <div>< FontAwesomeIcon icon={faList}/></div>
                                </div>
                                <div class="contenu">
                                    <p>Total des Clients</p>
                                    <h4>50</h4>
                                </div>
                            </div>
                            <div class="card-result-2">
                                <div class="icon">
                                    <div>< FontAwesomeIcon icon={faList}/></div>
                                </div>
                                <div class="contenu">
                                    <p>Total des Clients</p>
                                    <h4>50</h4>
                                </div>
                            </div>
                            <div class="card-result-3">
                                <div class="icon">
                                    <div>< FontAwesomeIcon icon={faList}/></div>
                                </div>
                                <div class="contenu">
                                    <p>Total des Clients</p>
                                    <h4>50</h4>
                                </div>
                            </div>
                        </div>
                        <div class="chart">
                            <canvas></canvas>
                        </div>
                        <div class="table">
                            <table>
                                <thead>
                                    <th>Nom</th>
                                    <th>Prenom</th>
                                    <th>Date</th>
                                    <th>Status</th>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Andriniaina</td>
                                        <td>Luca</td>
                                        <td>27/10/2004</td>
                                        <td>En ligne</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </body>
    )
}
export default Dashboard;