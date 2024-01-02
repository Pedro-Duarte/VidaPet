import React, { useState } from 'react';
import styled from 'styled-components';
import { auth } from '../../firebase';
import { FaUser, FaLock, FaEye, FaEyeSlash } from 'react-icons/fa';
import { RiCloseCircleFill } from 'react-icons/ri';
import { Link, useNavigate } from 'react-router-dom';

const Registro = ({ closeLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [error, setError] = useState('');
  const [sucesso, setSucesso] = useState('');
  const navigate = useNavigate(); 

  const handleTogglePasswordVisibility = (field) => {
    if (field === 'password') {
      setShowPassword(!showPassword);
    } else if (field === 'confirmPassword') {
      setShowConfirmPassword(!showConfirmPassword);
    }
  };

  const isEmailValid = (email) => {     
    // Utilizando uma expressão regular simples para verificar o formato do e-mail
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleRegister = () => {
    // Verificar se o formato do e-mail é válido
    if (!isEmailValid(email)) {
      setError('Por favor, insira um endereço de e-mail válido.');
      return;
    }
     // Verificar se as senhas são iguais
     if (password !== confirmPassword) {
      setError('As senhas não coincidem.');
      return;
    }

    // Verificar se a senha tem pelo menos 8 caracteres
    if (password.length < 8) {
      setError('A senha deve ter pelo menos 8 caracteres.');
      return;
    }

    auth
      .createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        setSucesso('Usuário registrado com sucesso', user);
      })
      .catch((error) => {
        if (error.code === 'auth/email-already-in-use') {
          setError('O endereço de e-mail já está em uso por outra conta.');
        } else {
          setError(error.message);
        }
      });
  };
  const handleHomeClick = () => {
    navigate('/home')
  };

  return (
    <Cont>
      <div className='wrapper'>
      <Link to="/home" className="close-link">
          <RiCloseCircleFill size={35} className='close' onClick={handleHomeClick} />
        </Link>

        <form action=''>
          <h1>Crie sua conta</h1>
          <div className='input-box'>
            <input
              type='text'
              name='email'
              id='email'
              placeholder='Digite seu email aqui'
              required
              onChange={(e) => setEmail(e.target.value)}
            />
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
            <PasswordFaLock
              showPassword={showPassword}
              onMouseOver={() => handleTogglePasswordVisibility('password')}
              onMouseOut={() => handleTogglePasswordVisibility('password')}
            />
            {showPassword ? (
              <PasswordFaEyeSlash
                showPassword={showPassword}
                onClick={() => handleTogglePasswordVisibility('password')}
              />
            ) : (
              <PasswordFaEye
                showPassword={showPassword}
                onClick={() => handleTogglePasswordVisibility('password')}
              />
            )}
          </div>

          <div className='input-box'>
            <input
              type={showConfirmPassword ? 'text' : 'password'}
              placeholder='Confirme sua senha'
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
            <PasswordFaLock
              showPassword={showConfirmPassword}
              onMouseOver={() => handleTogglePasswordVisibility('confirmPassword')}
              onMouseOut={() => handleTogglePasswordVisibility('confirmPassword')}
            />
            {showConfirmPassword ? (
              <PasswordFaEyeSlash
              confirmPassword={confirmPassword}
                onClick={() => handleTogglePasswordVisibility('confirmPassword')}
              />
            ) : (
              <PasswordFaEye
              confirmPassword={confirmPassword}
                onClick={() => handleTogglePasswordVisibility('confirmPassword')}
              />
            )}
          </div>

          <button type='button' onClick={handleRegister} className='buttonSalvar'>
            Cadastre-se
          </button>         

<div className='register-link'>
  <p>
          {error && <ErrorBox>{error}</ErrorBox>}
          {sucesso && <SucessoBox>{sucesso}</SucessoBox>}
          </p></div>

          <div className='register-link'>
          
           <p>
              <a href='/login'>Já tem uma conta?</a>
            </p>
          </div>
        </form>
        <div></div>
      </div>
    </Cont>
  );
};

export default Registro;

const ErrorBox = styled.div`
  color: red;
  margin-top: 10px;
  font-size: 20px;
`;
const SucessoBox = styled.div`
  color: green;
  margin-top: 10px;
  font-size: 20px;
`;

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
};`

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
};`

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
};`

const Cont = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  background-color: #686868;
  z-index: 51;
  justify-content: center;
  align-items: center;
  left: 0;

  .close {
    color: white;
    margin-left: 20rem;
    &:hover {
      color: red;
    }
    &:active {
      transform: scale(0.9);
    }
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  .wrapper {    
    position: fixed;
    left: 50%;
    transform: translateX(-50%);
    width: 420px;
    background: transparent;
    color: #fff;
    border-radius: 10px;
    padding: 30px 40px;

    h1 {
      font-size: 36px;
      text-align: center;
    }
  }

  .input-box {
    position: relative;
    width: 100%;
    height: 50px;
    margin: 30px 0;

    input {
      width: 100%;
      height: 100%;
      background: transparent;
      outline: none;
      border: 2px solid rgba(255, 255, 255, 0.2);
      border-radius: 40px;
      font-size: 16px;
      color: #fff;
      padding: 20px 45px 20px 20px;
    }

    ::placeholder {
      color: #fff;
    }

    .icon {
      position: absolute;
      right: 20px;
      top: 50%;
      transform: translateY(-50%);
      font-size: 16px;
    }

    .icon1 {
      position: absolute;
      right: 50px;
      top: 50%;
      transform: translateY(-50%);
      font-size: 16px;
    }
  }

  .remember-forgot {
    display: flex;
    justify-content: space-between;
    font-size: 14.5px;
    margin: -15px 0 15px;

    label input {
      accent-color: #fff;
      margin-right: 4px;
    }
    a {
      color: #fff;
      text-decoration: none;
    }
    a:hover {
      text-decoration: underline;
    }
  }

  .buttonSalvar {
    width: 100%;
    height: 45px;
    background: #fff;
    border: none;
    outline: none;
    border-radius: 40px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    cursor: pointer;
    font-size: 16px;
    color: #333;
    font-weight: 700;

    &:active {
      transform: scale(0.9); /* Diminui o tamanho do botão quando pressionado */
    }
  }

  .register-link {
    font-size: 14.5px;
    text-align: center;
    margin: 20px 0 15px;

    p a {
      color: #fff;
      text-decoration: none;
      font-weight: 600;
    }
    p a:hover {
      text-decoration: underline;
    }
  }

  .logo {
    margin: 10px;
    font-size: 50px;
  }

  @media (max-width: 900px) {
    left: 50%;
    transform: translateX(-50%);

    .wrapper {
      width: 420px;
    }

    .close {
      color: white;
      margin-left: 19rem;
    }
  }

  @media (max-width: 750px) {
    left: 50%;
    transform: translateX(-50%);

    .wrapper {
      width: 350px;
    }

    .close {
      color: white;
      margin-left: 17rem;
    }
  }

  @media (max-width: 500px) {
    left: 50%;
    transform: translateX(-50%);

    .wrapper {
      width: 350px;
    }

    .close {
      color: white;
      margin-left: 17rem;
    }
  }

  @media (max-width: 400px) {
    left: 50%;
    transform: translateX(-50%);

    .wrapper {
      width: 350px;
    }

    .close {
      color: white;
      margin-left: 17rem;
    }
  }
`;
