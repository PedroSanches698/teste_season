import React from "react";
import '../css/registration.css'
import {Link} from 'react-router-dom'


function Registration() {
    return (
        <div className="background_registration">
            <h1>Pronto para começar?</h1>
            <form method="POST">
                <div className="form-group">
                    <label for="exampleFormControlInput1">Nome</label>
                    <input type="text" class="form-control" id="inputName" placeholder="Seu nome" />
                    <label for="exampleFormControlInput1">Email</label>
                    <input type="email" class="form-control" id="inputEmail" placeholder="name@example.com" />
                    <label for="exampleFormControlInput1">Senha</label>
                    <input type="password" class="form-control" id="inputPassword" placeholder="thee89384" />
                    
                    <p>Clique abaixo para finalizar</p>
                    <Link to="/registrationConfirmed"><button type="submit" class="btn btn-primary">Cadastrar</button></Link>
                </div>

            </form>
        </div>
    );
}

export default Registration;