import React, { useState } from 'react';
import styled from 'styled-components';
import { auth, provider } from "../../firebase";
import { FaUser, FaLock, FaFacebook, FaEye, FaEyeSlash  } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { RiCloseCircleFill } from "react-icons/ri";
import { setUserLoginDetails } from "../Login/Components/UserInfo";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from 'react-router-dom';

const Login = ({ closeLogin}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useDispatch();  
  const navigate = useNavigate(); 

  const handleTogglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
 

  const handleGoogleLogin = () => {
    auth.signInWithPopup(provider)
      .then((result) => {
        // Lógica após o login com o Google
        closeLogin();   
      })

      .catch((error) => {
        alert(error.message);
      });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
  
    try {
      const response = await auth.signInWithEmailAndPassword(email, password);
      const user = response.user;
  
      // Verifica se displayName e photoURL estão disponíveis no usuário
      const name = user.displayName || '';  // Caso não exista, define como uma string vazia
      const photo = user.photoURL || '';
  
      // Disparar a ação para atualizar o estado do usuário no Redux
      dispatch(setUserLoginDetails({ name, email: user.email, photo }));

        closeLogin();     
  
      console.log('Usuário logado com sucesso:');
    } catch (error) {
      console.error('Erro ao fazer login:', error.message);
    }
  };

  

  return (
    <Cont>
      <div className='wrapper'>
      <RiCloseCircleFill size={35} className='close' onClick={closeLogin} />
      <h1>Entrar no Vida Pet</h1>

        <form onSubmit={handleLogin}>          
          <div className='input-box'>
            <input 
            type='text' 
            placeholder='Email' 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required />
            <FaUser className='icon' />
          </div>

          <div className='input-box'>
      <input
        type={showPassword ? 'text' : 'password'}
        placeholder='Senha'
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
       <PasswordFaLock showPassword={showPassword} onMouseOver={handleTogglePasswordVisibility} onMouseOut={handleTogglePasswordVisibility} />
     {showPassword ? (
        <PasswordFaEyeSlash showPassword={showPassword} onClick={handleTogglePasswordVisibility}  />
      ) : (
        <PasswordFaEye showPassword={showPassword} onClick={handleTogglePasswordVisibility} />
      )}    
      
          </div>

          <div className="remember-forgot">
            <label><input type="checkbox" />Lembrar minha senha </label>
            <a href="#">Esqueci minha senha</a>
          </div>

          <button type='submit' className='buttonEntrar'>Entrar</button>
          </form>
          <div className="register-link">
            <p>Não tenho conta <a href='/registro'>Registar</a></p>
            
          </div>        
        <div>
        <p className="register-link">___________  OU  ___________</p>
        <p>Inscreva-se com  </p>
        <FcGoogle className='logo'onClick={handleGoogleLogin}  />
        <FaFacebook className='logo' />
        </div>
      </div>
      
    </Cont>
  );
};

export default Login;

const PasswordFaLock = styled(FaLock)`
  position: absolute;
  right: 50px;
  top: 50%;
  transform: translateY(-50%);
  font-size: 16px;
  cursor: pointer;

  &:hover:after {
    content: ${(props) => (props.showPassword ? "'Esconder Senha'" : "'Mostrar Senha'")};
    position: absolute;
    top: -30px;
    left: 50%;
    transform: translateX(-50%);
    background: #000;
    color: #fff;
    padding: 8px;
    border-radius: 4px;
    font-size: 12px;
    white-space: nowrap;
  }
`;
const PasswordFaEyeSlash = styled(FaEyeSlash)`
  position: absolute;
  right: 20px;
  top: 50%;
  transform: translateY(-50%);
  font-size: 16px;
  cursor: pointer;

  &:hover:after {
    content: ${(props) => (props.showPassword ? "'Esconder Senha'" : "'Mostrar Senha'")};
    position: absolute;
    top: -30px;
    left: 50%;
    transform: translateX(-50%);
    background: #000;
    color: #fff;
    padding: 8px;
    border-radius: 4px;
    font-size: 12px;
    white-space: nowrap;
  }
`;

const PasswordFaEye = styled(FaEye)`
  position: absolute;
  right: 20px;
  top: 50%;
  transform: translateY(-50%);
  font-size: 16px;
  cursor: pointer;

  &:hover:after {
    content: ${(props) => (props.showPassword ? "'Esconder Senha'" : "'Mostrar Senha'")};
    position: absolute;
    top: -30px;
    left: 50%;
    transform: translateX(-50%);
    background: #000;
    color: #fff;
    padding: 8px;
    border-radius: 4px;
    font-size: 12px;
    white-space: nowrap;
  }
`;

const Cont = styled.div`

    padding: 10px;
    position: fixed;
     top: 2rem;
     left: 50%;
    transform: translateX(-50%);
     background-color: rgba(0, 0, 0, 0.8); /* Adicione um fundo semi-transparente para destacar a câmera */
     z-index: 151; /* Certifique-se de que a câmera esteja na parte superior de todos os elementos */
     justify-content: center;
     align-items: center;     
    border-radius: 30px;

    .close{
      color:white;
  margin-left: 20rem;
  &:hover {
      color: red;
      /* Outros estilos para quando o mouse estiver sobre o elemento */
    }
  &:active {
      transform: scale(0.9); /* Diminui o tamanho do botão quando pressionado */
    }
  }

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

.wrapper{
    width: 420px;
    background: transparent;
    color: #fff;
    border-radius: 10px;
    padding: 30px 40px;
    

 h1{
        font-size:30px;
        text-align: center;
    }
 

}
.input-box{
    position: relative;
    width:100%;
    height:50px;
    margin: 30px 0;

    input{
        width:100%;
        height:100%;
        background: transparent;
        outline:none;
        border: 2px solid rgba(255,255,255,.2);
        border-radius: 40px;
        font-size:16px;
        color: #fff;         
        padding: 20px 45px 20px 20px;  
     }
     ::placeholder{        
        color: #fff;
    }

  .icon{    
    position: absolute;
    right: 20px;
    top: 50%;
    transform: translateY(-50%);
    font-size:16px;
  }
  .icon1{    
    position: absolute;
    right: 50px;
    top: 50%;
    transform: translateY(-50%);
    font-size:16px;
  }}

  .remember-forgot{
    display: flex;
    justify-content: space-between;
    font-size: 14.5px;
    margin: -15px 0 15px;

label input{
    accent-color:#fff;
    margin-right:4px;
}
a{
    color:#fff;
    text-decoration: none;
}
a:hover{
    text-decoration: underline;
}}

.buttonEntrar {
    width:100%;
    height:45px;
    background: #fff;
    border:none;
    outline: none;
    border-radius: 40px;
    box-shadow: 0 0 10px rgba(0, 0, 0, .1);
    cursor: pointer;
    font-size:16px;
    color: #333;
    font-weight: 700;

    &:active {
      transform: scale(0.9); /* Diminui o tamanho do botão quando pressionado */
    }
    
}

.register-link{
  font-size:14.5px;
  text-align: center;
  margin: 20px 0 15px;

p a{
  color: #fff;
  text-decoration: none;
  font-weight: 600;
}
p a:hover{
  text-decoration: underline;
  
} 

}

.logo{
  margin: 10px;
  font-size: 50px;
  &:hover {
    color: #fff;
    /* Outros estilos para quando o mouse estiver sobre o elemento */
  }
&:active {
    transform: scale(0.8); /* Diminui o tamanho do botão quando pressionado */
  }
}

@media(max-width: 900px) {
  left: 50%;
    transform: translateX(-50%);
   .wrapper{
      width: 420px;}

  .close {
      color:white;
  margin-left: 19rem;
  }


  @media(max-width: 750px) {
    left: 50%;
    transform: translateX(-50%);

    .wrapper{
      width: 350px;}

  .close {
      color:white;
  margin-left: 17rem;
  }


@media(max-width: 500px) {
  left: 50%;
    transform: translateX(-50%);

    .wrapper{
      width: 350px;}

  .close {
      color:white;
  margin-left: 17rem;
  }


@media(max-width: 400px) {
  left: 50%;
  transform: translateX(-50%);

  .wrapper{
    width: 350px;}

.close {
    color:white;
margin-left: 17rem;
}


}

`