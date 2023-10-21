
import { styled } from "styled-components";
import { AiOutlineLogin } from "react-icons/ai";
import { RiMenu3Fill } from 'react-icons/ri';
import logoImg from '../../public/imagens/logo-vidaPet.png';

export function PageHeaders({ setMenuIsVisible }) {
  return (
    <Container>
      <section>
        <Logo>
        <a href="index.html">
        <img src={logoImg} alt="Logo" /></a> </Logo>
        <nav>
          <a href="index.html">Página Inicial</a>
          <a href="resgate.html">Resgate</a>
          <a href="sobre.html">Sobre nós</a>
          <a href="#">Contato</a>
        </nav>
      </section>

      <section>
        <a><AiOutlineLogin size={30} /> Login </a>
        <RiMenu3Fill size={30} onClick={() => setMenuIsVisible(true)} className="mobile" />
      </section>
    </Container>
  )
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

const Container = styled.header`
  width: 100%;
  background: #d7d350;
  overflow-x: hidden;
  padding: 14.5px 64px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0px;
  position: relative;

   

  > section {
    display: flex;
    gap: 2rem;

    &:last-child {
      gap: 1rem;
    }

    > nav {
      display: flex;
      gap: 1rem;
    

      a {
        display: flex;
    align-items: center;
    padding: 0 12px;

        &:before {
          content: '';
          border-radius: 10px;
          bottom: 0px;
          position: absolute;
          width: 0%;
          height: 2px;
          background: white;
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

    @media(max-width: 900px) {
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

export default PageHeaders;