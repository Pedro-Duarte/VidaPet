
import React, {useEffect, useState} from 'react';
import { styled } from "styled-components";
import { RiMenu3Fill } from 'react-icons/ri';
import logo from '../imagens/logo-vidaPet.png';
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { auth, provider } from "../firebase";
import {
  selectUserName,
  selectUserPhoto,
  setUserLoginDetails,
  setSignOutState,
} from "../pages/Dashboard/Components/UserInfo";
import Login from "../pages/Login/Login";
 
const PageHeaders = ({ setMenuIsVisible }) => {
  
  const [isLoginVisible, setIsLoginVisible] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userName = useSelector(selectUserName);
  const userPhoto = useSelector(selectUserPhoto);

  useEffect(() => {
    const checkAuthState = async () => {
      auth.onAuthStateChanged(async (user) => {
        if (user) {
          setUser(user);
          // Verificar se o usuário não está autenticado antes de redirecionar
          if (!userName) {
            // Aguarde um curto período para garantir que o estado seja atualizado
          //  await new Promise((resolve) => setTimeout(resolve, 500));
           // navigate("");
          }
        }
      });
    };
  
    checkAuthState();
  }, [userName]);

  const handleClick = () => {
    // Navegar para outra página
    navigate('/login');
  };

  const handleAuth = () => {
    if (!userName) {
      auth
        .signInWithPopup(provider)
        .then((result) => {
          setUser(result.user);
        })
        .catch((error) => {
          alert(error.message);
        });
    } else if (userName) {
      auth
        .signOut()
        .then(() => {
          dispatch(setSignOutState());
          navigate("/");
        })
        .catch((err) => alert(err.message));
    }
  };

  const setUser = (user) => {
    dispatch(
      setUserLoginDetails({
        name: user.displayName,
        email: user.email,
        photo: user.photoURL,
      })
    );
  };

  const openLogin = () => {
    setIsLoginVisible(true);
  };
  const closeLogin = () => {
    setIsLoginVisible(false);
  };



  return (
    <Container>
      <Logo>
        <a href="/home">
          <img src={logo} alt="Vida Pet" />
        </a>
      </Logo>
      
      <NavMenu>
        <a href="/home">
          <span>Página Inicial</span>
        </a>
        <a href="/resgate">
          <span>Resgate</span>
        </a>
        <a href="/sobrenos">
          <span>Sobre Nós</span>
        </a>
      </NavMenu>
      
      {!userName ? (
        <button onClick={openLogin} className='button'>Login</button>
      ) : (
        <>
         <SignOut>
            <UserImg src={userPhoto} alt={userName} />
            <DropDown>
              <span onClick={handleAuth}>Sign out</span>
            </DropDown>
        </SignOut>
      </>
       )}
       <section>
        <RiMenu3Fill size={35} onClick={() => setMenuIsVisible(true)} className="mobile" />
       </section>
       {isLoginVisible && (
        <Login
          closeLogin={closeLogin}
        />
      )}
    </Container>  
      );      
}


const Logo = styled.a`
  padding: 0;
  width: 160px;
  margin-top: 2px;
  max-height: 60px;
  font-size: 0;
  display: inline-block;

  img {
    display: block;
    width: 100%;
  }
`;

const NavMenu = styled.div`
  align-items: center;
  display: flex;
  flex-flow: row nowrap;
  height: 100%;
  justify-content: flex-end;
  margin: 0px;
  padding: 0px;
  position: relative;
  margin-right: auto;
  margin-left: 25px;

  a {
    display: flex;
    align-items: center;
    padding: 0 12px;

    img {
      height: 20px;
      min-width: 20px;
      width: 20px;
      z-index: auto;
    }

    span {
      color: rgb(249, 249, 249);
      font-size: 16px;
      font-weight: 700;
      letter-spacing: 1.42px;
      line-height: 1.08;
      padding: 2px 0px;
      white-space: nowrap;
      position: relative;

      &:before {
        background-color: rgb(249, 249, 249);
        border-radius: 0px 0px 4px 4px;
        bottom: -6px;
        content: "";
        height: 2px;
        left: 0px;
        opacity: 0;
        position: absolute;
        right: 0px;
        transform-origin: left center;
        transform: scaleX(0);
        transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
        visibility: hidden;
        width: auto;
      }
    }

    &:hover {
      span:before {
        transform: scaleX(1);
        visibility: visible;
        opacity: 1 !important;
      }
    }
  }

  @media (max-width: 768px) {
    display: none;
  }
`;


const Container = styled.header`
width: 100%;
background: rgb(215, 211, 80);
color: white;
padding: 14.5px 64px;
display: flex;
align-items: center;
justify-content: space-between;

.button {
  width:70px;
  height:30px;
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

> section {
  display: flex;
  gap: 2rem;

  &:last-child {
    gap: 1rem;
  }

  > img {
    width: 230px;

    @media(max-width: 500px) {
      width: 120px;
    }
  }

  > nav {
    display: flex;
    gap: 1rem;

    a {
      font-size: 20px;
      position: relative;

      &:before {
        content: '';
        border-radius: 50px;
        bottom: 0px;
        position: absolute;
        width: 0%;
        height: 2px;
        background: #3CA63A;
        transition: .3s;
      }

      &:hover {
        &:before {
          width: 100%;
        }
      }
    }
  }
  .mobile {
    display: none;
  }

  @media(max-width: 768px) {
    .mobile {
      display: initial;
    }
    > nav {
      display: none;
    }
  }
}

@media(max-width: 700px) {
  padding: 14.5px 16px;
}
`;

const UserImg = styled.img`
  height: 100%;
`;

const DropDown = styled.div`
  position: absolute;
  top: 48px;
  right: 0px;
  background: rgb(19, 19, 19);
  border: 1px solid rgba(151, 151, 151, 0.34);
  border-radius: 4px;
  box-shadow: rgb(0 0 0 / 50%) 0px 0px 18px 0px;
  padding: 10px;
  font-size: 14px;
  letter-spacing: 3px;
  width: 100px;
  opacity: 0;
`;

const SignOut = styled.div`
  position: relative;
  height: 48px;
  width: 48px;
  display: flex;
  cursor: pointer;
  align-items: center;
  justify-content: center;

  ${UserImg} {
    border-radius: 50%;
    width: 100%;
    height: 100%;
  }

  &:hover {
    ${DropDown} {
      opacity: 1;
      transition-duration: 1s;
    }
  }
`;

export default PageHeaders;
