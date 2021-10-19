import React from "react";
import '../css/login.css'
import {Link} from 'react-router-dom'

function Login() {
    return (
        <div className = "background"> 
            <h1>Bem Vindo ao To Do List</h1>
            <form>
                <div className="form-group">
                    
                    <label for="exampleFormControlInput1">Login</label>
                    <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
                    <label for="exampleFormControlInput1">Senha</label>
                    <input type="password" class="form-control" id="exampleFormControlInput1" placeholder="thee89384"/>
                    <p>Ainda não é cadastrado? <Link to="/registration">Clique aqui</Link></p>
                    <p>Esqueci minha senha</p>
                    <button type="button" class="btn btn-primary">Entrar</button>
                </div>
                
            </form>
        </div>
    );
}

export default Login;