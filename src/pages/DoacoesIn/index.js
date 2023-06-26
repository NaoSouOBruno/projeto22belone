import axios from 'axios';
import React from 'react'
import { useState, useEffect } from 'react'
import { Link, useNavigate } from "react-router-dom";
import Button from "../../components/Button";

import useAuth from "../../hooks/useAuth";

import "./style.css";



const DoacoesIn = () => {

  const { signout } = useAuth();

  const navigate = useNavigate();

  const [posts, setPosts] = useState([])

  const getPosts = async() => {

    try {

      const response = await axios.get("http://127.0.0.1:8000/animais/");

      const data = response.data;

      setPosts(data);

    } catch (error) {

      console.log(error)

    }

    console.log('testando')
  }

  useEffect(() => {

    getPosts();

    
  }, [])

  return (

    <div>

    <div className="logo">
      <img src={require('../assets/logo.png')} alt='' className="logoImg"/>
      <Button Text="Sair" onClick={() => [signout(), navigate("/")]}>
        Sair
      </Button>
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

    <div className='cont'>

      <div className='dd1'>
      <img src={require('../assets/i1.png')} alt='' className="i1"/>
      
      <div className='t1'>
      <h2>Amora</h2>

      <p>Animal: Cachorro</p>
      <p>Sexo: Fêmea</p>
      <p>Raça: Vira-lata</p>
      <p>Idade: 1 ano</p>
      </div>
      </div>
    

      <div className='dd2'>
      <img src={require('../assets/i2.png')} alt='' className="i2"/>
      
      <div className='t2'>
      <h2>Agatha</h2>

      <p>Animal: Gato</p>
      <p>Sexo: Fêmea</p>
      <p>Raça: Vira-lata</p>
      <p>Idade: 4 meses</p>
      </div>
      </div>




      <div className='dd3'>
      <img src={require('../assets/i3.png')} alt='' className="i3"/>

      <div className='t3'>
      <h2>Nick</h2>

      <p>Animal: Cachorro</p>
      <p>Sexo: Macho</p>
      <p>Raça: Vira-lata</p>
      <p>Idade: 4 meses</p>
      </div>


      </div>

      </div>



    
      











      {posts.length === 0 ? (<p></p>) : (

        posts.map((post) => (
        
          <div className='post' key={post.id}>
            <h2>{post.imagem}</h2>
            <p>{post.nome}</p>
            <p>{post.desc}</p>
          </div>

        ))
      )}

    </div>

  )
}

export default DoacoesIn