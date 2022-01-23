import React, { useState } from 'react';
import styled from 'styled-components';
import up from '../../media/icons/up.svg'
import down from '../../media/icons/down.svg'
const Text = ({description}) => {
    const [toggle, setToggle] = useState(false);
    const btnToggler = () => {
        setToggle(!toggle);
    }

  return (
  <Container>
           The Mega City LAND sale starts on January 13th at 1PM UTC. Read more <p> https://medium.com/sandbox-game/the-mega-city-land-sale-522b09802757 </p> Welcome to Mega City, the latest expansion of The Sandbox map. This cultural hub will be filled with multiple Hong Kong partners from the film, music, entertainment, acting, finance, real estate, and gaming sectors. <br />

            
    
                 <Container onClick={btnToggler}>
                 {toggle && <h1>{description}</h1>}
                 <ImgWrapper>
                    {toggle ? <Img src={up} alt="" /> : <Img src={down} alt="" />}
                 </ImgWrapper>
                </Container>
                   


  </Container>
    );
};

export const Container = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;

`

export const ImgWrapper = styled.div`
display: flex;
margin-top: 10px;
cursor: pointer;
align-items: center;
justify-content: center;
border-radius: 20px;
width: 300px;
height: 20px;
:hover{
   background-color: rgba(220, 220, 220, 0.886);
}
`

export const Img = styled.img`
width: 18px;
display: flex;
justify-content: center;
align-items: center;
`

export default Text;
