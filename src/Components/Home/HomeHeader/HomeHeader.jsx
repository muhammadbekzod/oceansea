import React, { useState } from 'react'
import { Button, ButtonCon, ButtonWrapper, Container, Logo, Subtitle, Title, Wrapper } from './HeaderStyle'
import logo from '../../../media/icons/sLogo.png'
import window from '../../../media/icons/window.svg'
import discord from '../../../media/icons/discord.svg'
import medium from '../../../media/icons/medium.svg'
import telegram from '../../../media/icons/telegram.svg'
import insta from '../../../media/icons/instagram.svg'
import other from '../../../media/icons/other.svg'
import items from '../../../media/icons/menu.svg'
import activity from '../../../media/icons/activity.svg'


const HomeHeader = ({onClick}) => {
    const [on, setOn] = useState(true)

    return (
        <Container>
            <Wrapper>
                <Wrapper.Background />
                <Wrapper.Logo>
              <Wrapper.Left>
                <Logo src={logo}/>
            
                <Wrapper.Container>
                    <Wrapper.IconCon left>
                    <Wrapper.ConIcon src={window}/>
                  
                    </Wrapper.IconCon>
                    <Wrapper.ConIconBr />
                    <Wrapper.IconCon>
                    <Wrapper.ConIcon src={discord}/>
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
            The Mega City LAND sale starts on January 13th at 1PM UTC. Read more <p> https://medium.com/sandbox-game/the-mega-city-land-sale-522b09802757 </p> Welcome to Mega City, the latest expansion of The Sandbox map. This cultural hub will be filled with multiple Hong Kong partners from the film, music, entertainment, acting, finance, real estate, and gaming sectors. <br />
<h1>
Partners who acquired LAND to build Mega City in The Sandbox’s metaverse include Hong Kong tycoon Adrian Cheng, alternative investing leader Sun Hung Kai {'&'} Co, professional services firm PwC Hong Kong, blockchain-related investment and asset management company TIMES CAPITAL, director/producer/actor Stephen Fung, international star Shu Qi, renowned musician Dough-Boy, game IP Little Fighter, and local illustrator Dreamergo.
</h1>          
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
