import React from 'react';
import styled from 'styled-components';
import window from '../../media/icons/window.svg'
import discord from '../../media/icons/discord.svg'
import medium from '../../media/icons/medium.svg'
import telegram from '../../media/icons/telegram.svg'
import insta from '../../media/icons/instagram.svg'
import other from '../../media/icons/other.svg'
const SocialLink = () => {
  return (

<Container>
    <Wrapper>
    <Wrapper.Container>
    <Wrapper.IconCon left >
    <Wrapper.ConIcon 
    src={window}
    />
  
    </Wrapper.IconCon>
    <Wrapper.ConIconBr />
    <Wrapper.IconCon>
    <Wrapper.ConIcon 
    src={discord} />
    </Wrapper.IconCon>
    <Wrapper.ConIconBr />
    <Wrapper.IconCon>
    <Wrapper.ConIcon src={medium}/>
    
    </Wrapper.IconCon>
    <Wrapper.ConIconBr />
    <Wrapper.IconCon>
    <Wrapper.ConIcon src={telegram}/>
    </Wrapper.IconCon>
    <Wrapper.ConIconBr />
    <Wrapper.IconCon>
    <Wrapper.ConIcon src={insta}/>
    </Wrapper.IconCon>
    <Wrapper.ConIconBr />
    <Wrapper.IconCon extra >
    <Wrapper.ConIcons src={other}/>
    </Wrapper.IconCon>
</Wrapper.Container> 
</Wrapper> 
</Container>
  );
};

export const Container = styled.div`
`

export const Wrapper = styled.div`
`

Wrapper.Container = styled.div`
display: flex;
border: 1px solid lightgray;
border-radius: 10px;
margin: 5px 45px 0  0;
width: 270px;
height: 47px;
justify-content: space-between;
align-items: center;
`
Wrapper.IconCon = styled.div`
cursor: pointer;
display: flex;
width: 50px;
height: 47px;
/* border: 1px solid red; */
justify-content: center;
align-items: center;
:hover{
    box-shadow: 1px 1px 20px 1px lightgray;
}
border-top-left-radius: ${({left})=>(left ? '10px': '0')};
border-bottom-left-radius: ${({left})=>(left ? '10px': '0')};
border-top-right-radius: ${({extra})=>(extra ? '10px': '0')};
border-bottom-right-radius: ${({extra})=>(extra ? '10px': '0')};
height: ${({big})=>(big ? '88px': '')};
width: ${({big})=>(big ? '144px': '')};
`
Wrapper.ConIcon = styled.img`
width: 18px;
`

Wrapper.ConIconBr = styled.div`

height: 47px;
border-right: 1px solid lightgray;
:hover{
    box-shadow: 1px 1px 20px 1px black;
}
height: ${({big})=>(big ? '88px': '')};
`

Wrapper.ConIcons = styled.img`
height: 18px;
margin:0 7px;

`

export default SocialLink;
