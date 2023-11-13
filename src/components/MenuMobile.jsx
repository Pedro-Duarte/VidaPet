import { css, styled } from "styled-components";
import { IoClose } from "react-icons/io5";
import { useEffect } from 'react';

export function MenuMobile({ menuIsVisible, setMenuIsVisible }) {
  useEffect(() => {
    document.body.style.overflowY = menuIsVisible ? 'hidden' : 'auto';
  }, [menuIsVisible]);

  return (

    <Container isVisible={menuIsVisible}>
      <IoClose size={45} onClick={() => setMenuIsVisible(false)} />
      <nav>
        <a href="/home">
          <span>Página Inicial</span>
        </a>
        <a href="/resgate">
          <span>Resgate</span>
        </a>
        <a href="/SobreNos">
          <span>Sobre Nós</span>
        </a>
      </nav>

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


background: rgb(203,227,23);
background: linear-gradient(48deg, rgba(203,227,23,0.777450946198792) 0%, rgba(245,165,81,0.6457982851343662) 75%); 

opacity: 0;
pointer-events: none;
transform: translateY(50px);

transition: .5s;

> svg {
  position: absolute;
  top: 1rem;
  right: 1rem;
  transform: rotate(45deg);
  transition: .7s;
   color: white;
}

nav {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 2rem;
  transform: scale(0.7);
  transition: .7s;
}
  a{
    font-size: 35px;
  }

${({ isVisible }) => isVisible && css`
  opacity: 1;
  pointer-events: auto;
  transform: translateY(0px);

  > svg {
    transform: rotate(0deg);
    color: white;
  }

  nav {
    transform: scale(1);
  }
`}
`;




export default MenuMobile;