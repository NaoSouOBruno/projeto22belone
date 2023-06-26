import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "../../components/Button";



const ContatoOut = () => {

  const navigate = useNavigate();


  return (

    <div>

      <div className="logo">
        <img src={require('../assets/logo.png')} alt='' className="logoImg"/>
        <div className="botoes">
          <Button Text="Cadastrar" onClick={() => [navigate("/signup")]}></Button>
          <Button Text="Entrar" onClick={() => [navigate("/signin")]}></Button>
        </div>
      </div>

      <div className="menu">
        <div className="navegacao">
                <Link to="/quemsomosout">
                Quem somos
                <br></br>
                </Link>

                <Link to="/doacoesout">
                Adoções
                <br></br>
                </Link>

                <Link to="/contatoout">
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

export default ContatoOut