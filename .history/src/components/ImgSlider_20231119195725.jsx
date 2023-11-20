import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import foto from "../imagens/dog.jpg";
import foto1 from "../imagens/dog.jpg";
import foto2 from "../imagens/dog.jpg";
import foto3 from "../imagens/dog.jpg";




const ImgSlider = (props) => {
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };
  return (
    <Carousel {...settings}>
      <Wrap>
        <a>
        <h6>Capture Fotos de Animais</h6>
        <h10>Ajude animais perdidos ou abandonados apenas capturando uma foto e salvando em nossa base de dados </h10>
          <img src={foto} alt="" />

        </a>
      </Wrap>

      <Wrap>
        <a>
        Resgate de Pets
Atraves de nosso banco de dados donos de pets perdidos podem achar o seu pet com a ultima Localização vista.
          <img src={foto1} alt="" />
        </a>
      </Wrap>


      <Wrap>
        <a>
          Adoção
Tambem por nosso banco de dados resgatadores e aqueles de que desejam adotar um Pet podem ter acesso aos Pets.
          <img src={foto2} alt="" />
        </a>
      </Wrap>


      <Wrap>
        <a>
          Gatos e Outros Pets
Estamos trabalhando incessantemente para expandir nosso sistema para Gatos e outros Pets.
          <img src={foto3} alt="" />
        </a>
      </Wrap>

     </Carousel>
  );
};

const Carousel = styled(Slider)`
  margin-top: 10px;

  & > button {
    opacity: 0;
    height: 100%;
    width: 5vw;

    &:hover {
      opacity: 1;
      transition: opacity 0.2s ease 0s;
    }
  }

  ul li button {
    &:before {
      font-size: 10px;
      color: rgb(150, 158, 171);
    }
  }

  li.slick-active button:before {
    color: white;
  }

  .slick-list {
    overflow: initial;
  }

  .slick-prev {
    left: -20px;
  }

  .slick-next {
    right: -20px;
  }
`;

const Wrap = styled.div`
  border-radius: 4px;
  cursor: pointer;
  position: relative;

  a {
    color: black;
    border-radius: 4px;
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
      rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    cursor: pointer;
    display: flex;
    position: relative;
    padding: 4px;
    text-align: right;
    font-size: 40px;

    img {
      width: 40%;
      height: 100%;
    }

    &:hover {
      padding: 0;
      border: 4px solid rgba(249, 249, 249, 0.8);
      transition-duration: 300ms;
    }
  }
`;

export default ImgSlider;
