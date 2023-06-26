import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "../../components/Button";

import "./styles.css";
const QuemSomosOut = () => {
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
        <ul>
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
        </ul>
      </div>

      <div className="conteudo">

        <div className="d1">
          <h2 class='titulo'>
          <br></br>
          S.O.S QUATRO PATAS
          </h2>
          <p class='texto'>
            A casa de acolhimento S.O.S Quatro Patas busca oferecer abrigo a animais em situação de abandono,
            além de oferecer tratamentos especiais a esses bichos por meio de consultas e exames veterinários de qualidade.
          </p>

          <p class='texto'>
          A organização não governamental, localizada na rua José Abatti, n° 120, no município de Treviso, Santa Catarina,
            busca ajudar os animais necessitados da região por meio de trabalho voluntário.
          </p>
        </div>

        <div className="d2">

          <h2 className='titulo'>
            <br></br>
            CONHEÇA NOSSA EQUIPE
          </h2>
        <img src={require('../assets/equipe.png')} alt='' className="imgEquipe"/>

        </div>

      </div>
      
    </div>
  )
}

export default QuemSomosOut