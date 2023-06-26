import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import useAuth from "../../hooks/useAuth";



import "./styles.css";

const HomeIn = () => {
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
          <img src={require('../assets/banner1.png')} alt='' className="img1"/>
        </div>

        </div>

        <br></br>
        <br></br>


        <div className="conteudo2">

        <div className="div2">
          <img src={require('../assets/banner2.png')} alt='' className="img2"/>
        </div>

        </div>

        <div className="conteudo3">

        <div className="div3">
          <img src={require('../assets/banner3.png')} alt='' className="img3"/>
        </div>

        </div>

        

    </div>
  );
};

export default HomeIn;
