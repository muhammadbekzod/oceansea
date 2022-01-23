import React, { useState } from 'react'
import { Button, ButtonCon, ButtonWrapper, Container, Logo, Subtitle, Title, Wrapper } from './HeaderStyle'
import logo from '../../../media/icons/sLogo.png'
// import window from '../../../media/icons/window.svg'
// import discord from '../../../media/icons/discord.svg'
// import medium from '../../../media/icons/medium.svg'
// import telegram from '../../../media/icons/telegram.svg'
// import insta from '../../../media/icons/instagram.svg'
// import other from '../../../media/icons/other.svg'
import items from '../../../media/icons/menu.svg'
import activity from '../../../media/icons/activity.svg'
import SocialLink from '../../../Mock/sns/SocialLink'
import ControllText from '../../../Mock/text/control'


const HomeHeader = ({onClick}) => {
    const [on, setOn] = useState(true)

    return (
        <Container>
            <Wrapper>
                <Wrapper.Background />
                <Wrapper.Logo>
              <Wrapper.Left>
                <Logo src={logo}/>
            <SocialLink />
            </Wrapper.Left>
            </Wrapper.Logo>
            </Wrapper>
            <Container.Title>
                <Title>
                The Sandbox Mega City <br /> LAND Sale
                </Title>
                <Subtitle>
                Created by <p> TheSandboxGame</p>
                <Subtitle.Icon />
                </Subtitle>
                <Title.Con>
                <Wrapper.IconCon big left>
                 <Title.ConItems>7 <br /> <p> items </p></Title.ConItems>
                 
                 </Wrapper.IconCon>
                 <Wrapper.ConIconBr big/>
                 <Wrapper.IconCon big>
                 <Title.ConItems>7 <br /> <p> owners </p></Title.ConItems>
                 </Wrapper.IconCon>
                 <Wrapper.ConIconBr big/>
                 <Wrapper.IconCon big>
                 <Title.ConItems>--- <br /> <p> floor price </p></Title.ConItems>
                 </Wrapper.IconCon>
                 <Wrapper.ConIconBr big/>
                 <Wrapper.IconCon big extra>
                 <Title.ConItems>1.8K <br /> <p>volume traded </p> </Title.ConItems>
                </Wrapper.IconCon>
                 </Title.Con>
            </Container.Title>
            <Container.TextWrapper>
            <Container.Text>
          <ControllText />
            </Container.Text>



            </Container.TextWrapper>
            <ButtonWrapper>
                <ButtonCon
                className="itemIcon"
                active ={on}
                onClick={()=>{
                onClick(true);
                setOn(true);
                 }}
                >
                <Button
                src={items}
                active={on} 
                />
                Items
                </ButtonCon>
                <ButtonCon
                className="activityIcon"
                active ={!on}
                onClick={()=>{
                onClick(false);
                setOn(false);
                }}
                >
                <Button 
                src={activity}
                active={!on} 
                
                />
                Activity
                </ButtonCon>
            </ButtonWrapper>
        </Container>
    )
}

export default HomeHeader
