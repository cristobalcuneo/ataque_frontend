import React, { useState, useContext } from 'react';
import './Login.css';
import Navbar from '../common/Navbar';
import Footer from '../common/Footer';
import $ from 'jquery';
import axios from 'axios';
import { AuthContext } from '../auth/AuthContext';
import API_URL from "./../common/config"

function Login() {
  const {token, setToken} = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");
  const [error, setError] = useState(false);

  // POST con datos de Login
  const handleSubmit = async(event) => {
    event.preventDefault();

    axios.post(`${API_URL}/auth/login`, {
      mail: email,
      password: password
    }).then((response) => {
      console.log(response.data);
      const access_token = response.data.access_token;
      setToken(access_token);
      setMsg("Login exitoso!");
      setError(false);
    })
    .catch((error) => {
      console.log(error)
      setError(true);
    });

  };

  // query interactions
  $(document).ready(function(){

    $('.login-fields .field input').on('input', function() {
        const id = $(this).attr("id")
        if ($(this).val().trim() !== '') {
          $(this).addClass('filled');
          $("." + id).addClass('label-filled')
        } else {
          $(this).removeClass('filled');
          $("." + id).removeClass('label-filled')
          
        }
      });
  });

  return (
    <div className="login">
      <Navbar />
      <div className='h-login-container'>
        <div className='login-form'>
        {msg.length > 0 && <div className="successMsg"> {msg} </div>}
        {error && <div className="error">Hubo un error con el Login, por favor trata nuevamente.</div>}
            <h1>Iniciar Sesión</h1>
            
              <form action="/register" method="post" id="register-form" onSubmit={handleSubmit}> 
                <div className='login-fields'>
                    <div className="field">
                      <label htmlFor="email" className='email'>Email</label>
                      <input type="text" id="email" name="email" value={email} onChange={e => setEmail(e.target.value)}/>
                      <div className="underline"></div>
                    </div>
                    <div className="field">
                      <label htmlFor="password" className='password'>Contraseña</label>
                      <input type="password" id="password" name="password" value={password} onChange={p => setPassword(p.target.value)}/>
                      <div className="underline"></div>
                    </div>
                </div>                    
                <button type="submit">Iniciar Sesión</button>
              </form>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Login;
