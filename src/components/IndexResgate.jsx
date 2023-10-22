import { styled } from "styled-components"

export function IndexResgate() {

    return (

        <Container>
            <section>
                <div>
                    <h1>
                        Pets Perdidos: Traga-os de Volta para Casa
                    </h1>
                    <p>
                        Perder um animal de estimação é angustiante, mas não precisa ser permanente. Nossa plataforma conecta a comunidade de amantes de pets, permitindo que você divulgue e localize animais perdidos na sua região. Juntos, podemos ajudar nossos amigos peludos a voltar para casa em segurança.
                    </p>
<<<<<<< HEAD
                    <a href="/resgate">Saiba Mais</a>
=======
                    <a href="resgate.html">Saiba Mais</a>
>>>>>>> 3675b053a9406fe7a053409751d33099c6c9221f
                </div>
            </section>

        </Container>

    )
}

const Container = styled.section`
display: flex;
flex-direction: column;
-moz-box-pack: center;
justify-content: center;
-moz-box-align: center;
align-items: center;
background-color: rgb(30, 25, 44);
position: relative;
min-width: 100%;
width: 100%;

@media only screen and (min-width: 768px) {
    
      background-color: rgba(0, 0, 0, 0);
      background-attachment: scroll, scroll;
      background-image: linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 46%, rgba(0,0,0,0.9906162294019171) 59%, rgba(255,255,255,0) 100%), url("https://s2-vidadebicho.glbimg.com/ERE7xaNfficR7A59T91v1s7CS2w=/0x0:620x455/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_fb623579cd474803aedbbbbae014af68/internal_photos/bs/2022/j/a/BAHLuARx2IhCBjnO1H1w/2022-05-04-como-aumentar-a-longevidade-do-pet-dog-3344414-1280.jpeg");
      background-origin: padding-box, padding-box;
      background-clip: border-box, border-box;
      background-position: right;
    background-repeat: no-repeat;
    background-size: contain;
      padding: 1rem;
    
  }
  

>section{
display: flex;
    flex-direction: column;
    -moz-box-pack: center;
    justify-content: center;
    -moz-box-align: center;
    align-items: center;
    margin-bottom: 0px;
    padding: 1rem;
    z-index: 2;
    font-family: "Open Sans", sans-serif;
    box-sizing: border-box;

@media only screen and (min-width: 768px) {
      flex-direction: row;
      -moz-box-pack: start;
      justify-content: flex-start;
      align-items: flex-start;
      width: 100%;
      max-width: 1200px;
      }
    
      div {
        display: flex;
        flex-direction: column;
        -moz-box-pack: center;
        justify-content: center;
        -moz-box-align: center;
        align-items: center;
        text-align: center;
        margin: 1.75rem 1rem 0px;   
        font-family: "Open Sans", sans-serif;
        box-sizing: border-box;

        @media only screen and (min-width: 768px) {
          align-items: flex-start;
          text-align: start;
          max-width: 600px;
          margin: 1rem 1rem 0px;
              }                }

           h1{
                margin: 0.6em 0px;
                color: rgb(255, 255, 255);

                @media only screen and (min-width: 768px) {
                    
                      font-size: 30px;
                    }                        
            }

           p{
              line-height: 24px;
              margin: 0.6em 0px;
              color: rgb(255, 255, 255);
            }

           a{
            margin: 2rem 0px;
  border-radius: 8px;
  padding: 0.6rem 1.5rem;
  font-size: 1rem;
  font-weight: bold;
  border: 1px solid linear-gradient(48deg, rgba(246,255,56,1) 0%, rgba(234,152,66,0.9878151089537377) 75%);
  background: linear-gradient(48deg, rgba(246,255,56,1) 0%, rgba(234,152,66,0.9878151089537377) 75%);
  color: rgb(255, 255, 255);
  text-decoration: none;
  text-align: center;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 5px 10px, rgba(0, 0, 0, 0.1) 0px 5px 6px;
  
           }
    }
    
  
`

export default IndexResgate;

