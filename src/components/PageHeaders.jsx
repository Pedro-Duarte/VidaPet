
import React, { useState } from 'react';
import { styled } from "styled-components";
import { AiOutlineLogin } from "react-icons/ai";
import { RiMenu3Fill } from 'react-icons/ri';
import logo from '../imagens/logo-vidaPet.png';

const PageHeaders = () => {

  const [mobileMenu, setMobileMenu] = React.useState(false);

  return (
    <Container>
      <Logo>
        <img src={logo} alt="Vida Pet" />
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
      <section>
        <a><AiOutlineLogin size={40}/></a>
        <button className='mobileButton' onClick={() => setMobileMenu(!mobileMenu)}>
        </button>
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

const NavMenu = styled.div`
  align-items: center;
  display: flex;
  flex-flow: row nowrap;
  height: 100%;
  justify-content: center;
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
  background: #d7d350;
  overflow-x: hidden;
  padding: 1rem 64px 1rem 64px;
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
   
    .mobileButton {
      background: #d7d350;
      border-radius: 0.2rem;
      height: 40px;
      width: 40px;
      padding: 0px;
      display: flex;
      align-items: center;
      justify-content: center;
      border: 1px solid transparent;
      transition: 0.1s;
      cursor: pointer;
    }

    .mobileButton::after {
      content: '';
      display: block;
      width: 2rem;
      height: 2px;
      border-radius: 2px;
      background: #fff;
      box-shadow: 0 12px #fff, 0 -12px #fff;
    }

    .mobileButton:focus, 
    .mobileButton:hover {
      outline: none;
      background-color: #d7d350;
      box-shadow: 0 0 0 3px #fff;
      border-color: #fff;
    }

    @media(min-width: 768px) {
      .mobileButton {
        display: none;
      }
    }
  }

  @media(max-width: 768px) {
    padding: 14.5px 16px;
  }
`;

export default PageHeaders;