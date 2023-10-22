import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
<<<<<<< HEAD
import foto from "../imagens/banner.jpg"



=======
>>>>>>> 3675b053a9406fe7a053409751d33099c6c9221f

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
<<<<<<< HEAD
          VIDA PET - Seu Dog Aqui 
          <img src={foto} alt="" />
=======
          VIDA PET HOJE EM PROMOÇÃO
>>>>>>> 3675b053a9406fe7a053409751d33099c6c9221f

        </a>
      </Wrap>

      <Wrap>
        <a>
<<<<<<< HEAD
          <img src={foto} alt="" />
        </a>
      </Wrap>

     </Carousel>
=======
          <img src="../../public/imagens/slider-scale.jpg" alt="" />
        </a>
      </Wrap>

      <Wrap>
        <a>
          <img src="../../public/imagens/slider-scale.jpg" alt="" />
        </a>
      </Wrap>

    </Carousel>
>>>>>>> 3675b053a9406fe7a053409751d33099c6c9221f
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
<<<<<<< HEAD
    color: black;
=======
    color: white;
>>>>>>> 3675b053a9406fe7a053409751d33099c6c9221f
    border-radius: 4px;
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
      rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    cursor: pointer;
<<<<<<< HEAD
    display: flex;
    position: relative;
    padding: 4px;
    text-align: right;
    font-size: 40px;

    img {
      width: 40%;
=======
    display: block;
    position: relative;
    padding: 4px;

    img {
      width: 100%;
>>>>>>> 3675b053a9406fe7a053409751d33099c6c9221f
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
