import React from "react";
import './style.css'
import logo from '../../../src/assets/logo.png';

function Wrap() {
    return (
        <div class="wrap">
            <div class="logo">
                <img src={logo}/>
            </div>
            <div class="login">
                <h1>Faça seu Login</h1>
                <form action="" method="post">
                    <input type="text" id="cpf" name="cpf" placeholder="CPF" required/>
                    <input type="password" id="senha" name="senha" placeholder="Senha" required/>
                    <button type="submit">Entrar</button>
                </form>
            </div>
        </div>
    );
}

export default Wrap;