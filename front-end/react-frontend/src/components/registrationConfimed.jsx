import React from "react";
import { Link } from 'react-router-dom'
import '../css/RegistrationConfirmed.css'

function RegistrationConfirmed() {
    return (
        <div className="background_registration">
            <h1>Tudo Pronto!!!</h1>
            <form method="POST">

                <p className="upper">Seu cadastro foi concluido com sucesso</p>
                <p>Clique abaixo para ser redirecionado ao Login</p>
                <p><Link to="/">voltar</Link></p>
               
            </form>
        </div>
    );
}

export default RegistrationConfirmed;