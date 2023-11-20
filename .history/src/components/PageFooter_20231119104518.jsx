<<<<<<< HEAD
import { styled } from "styled-components"
=======
import { styled } from "styled-components";
>>>>>>> 793f5a2800438c0c45e16dce15a374848ec8d8e4

export function PageFooter() {

    return (

        <Container>
            <section>
                <p>
                    &copy; 2023 Todos direitos reservados. Design by <a href="https://vidapet.tech/WebApp">Lili Apps Startup</a>
                </p>
            </section>

        </Container>

    )
}

const Container = styled.footer`
  width: 100%;
  background: #e7d619;
  overflow-x: hidden;
  padding: 3px 50px;
  display: flex;
  align-items: end;
  justify-content: space-between;
  margin: 0px;
  position: relative;
  
  > section {
    display: flex;
    gap: 2rem;    
    align-items: center;
    text-align: center;

    &:last-child {
      gap: 1rem;
    }

    p {
        color: #ffffff;
  margin: 0px;
  padding: 25px 0 20px 0;
  text-align: center;

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
  `

export default PageFooter;

