import React from "react";
import { Link } from 'react-router-dom'
import UserList from "./UserList";



function Home() {


    return (
        <div>
            <div>
                <div className="image_top">
                    <p>Imagem aqui</p>
                </div>
                <div>
                    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                        

                        <div className="collapse navbar-collapse justify-content-md-center" id="navbarsExample08">
                            <ul className="navbar-nav">
                                <li className="nav-item active">
                                    <a className="nav-link" href="#">Tarefas</a>
                                </li>
                                <li className="nav-item active">
                                    <a className="nav-link" href="#">Hoje</a>
                                </li>
                                <li className="nav-item active">
                                    <a className="nav-link" href="#">Sobre</a>
                                </li>
                                <li className="nav-item active">
                                    <a className="nav-link" href="#"></a>
                                </li>
                                
                            </ul>
                        </div>
                    </nav>

                </div>
            </div>

           

            <nav className="navbar fixed-bottom navbar-expand-sm navbar-dark bg-dark">
                <p>Direitos Reservados @2021</p>
            </nav>
        </div>

    );

    
}



export default Home;