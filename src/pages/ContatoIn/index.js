import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import useAuth from "../../hooks/useAuth";

import "./styles.css";

const ContatoIn = () => {

  const { signout } = useAuth();
  const navigate = useNavigate();


  return (

    <div>

      <div className="logo">
        <img src={require('../assets/logo.png')} alt='' className="logoImg"/>
        <div className="botoes">
        <Button Text="Sair" onClick={() => [signout(), navigate("/")]}>
        Sair
      </Button>
        </div>
      </div>

      <div className="menu">
        <div className="navegacao">
                <Link to="/quemsomosin">
                Quem somos
                <br></br>
                </Link>

                <Link to="/doacoesin">
                Adoções
                <br></br>
                </Link>

                <Link to="/contatoin">
                Contato
                <br></br>
                </Link>
        </div>
      </div>

      <div className="conteudo">

        <div className="div1">
          <img src={require('../assets/contato.png')} alt='' className="img1"/>
        </div>

      </div>

    </div>
  )
}

export default ContatoIn