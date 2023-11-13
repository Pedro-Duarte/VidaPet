import { css, styled } from "styled-components"
import { IoClose } from "react-icons/io5"
<<<<<<< HEAD

export function MenuMobile({ onClose  }) {
  
  return (
    <Container>
    <div className="overlay">
      <div className="content">
      <IoClose size={40} onClick={onClose} />
      <nav>
            <a href="/home">
               <span>Página Inicial</span>
            </a>
            <a href="/resgate">
               <span>Resgate</span>
            </a>
            <a>
              <span>Sobre Nós</span>
            </a>
      </nav>
        
      </div>
    </div>
=======
import { useEffect } from "react";

export function MenuMobile({ menuIsVisible, setMenuIsVisible }) {
  useEffect(() => {
    document.body.style.overflowY = menuIsVisible ? 'hidden' : 'auto';
  }, [menuIsVisible]);

  return (
    <Container isVisible={menuIsVisible}>
      <IoClose size={40} onClick={() => setMenuIsVisible(false)} />
      <nav>
        <a href="index.html">Página Inicial</a>
        <a href="resgate.html">Resgate</a>
        <a href="sobre.html">Sobre nós</a>
        <a href="#">Contato</a>
      </nav>
>>>>>>> 3675b053a9406fe7a053409751d33099c6c9221f
    </Container>

  )

};

const Container = styled.section`
  position: absolute;
  backdrop-filter: blur(3px);
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 5;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgb(246,255,56);
  background: linear-gradient(48deg, rgba(246,255,56,0.9177870977492559) 0%, rgba(234,152,66,0.7105041845839899) 75%);
  

opacity:0;
pointer-events: nome;
transition: .5s;
transform: translateY(50px);

  > svg {
    position: absolute;
    top: 1rem;
    right: 1rem;
    transform: rotate(45deg);
    transition: .7s;
  }

<<<<<<< HEAD
  > nav{
=======
  nav{
>>>>>>> 3675b053a9406fe7a053409751d33099c6c9221f
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 2rem;
    transform: scale(0.7);
    transition: .7s;
  }

  a {
    color: black;
    text-transform: uppercase;
    font-size: x-large;

  }

${({ isVisible }) => isVisible && css`
opacity:1; 
pointer-events: auto;
transform: translateY(0px);

> svg {
  transform: rotate(0deg);}

nav{transform: scale(1);}


`}

`;




export default MenuMobile;