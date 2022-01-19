import React from 'react'
import { Container, Logo, Wrapper } from './NavbarStyle'
import logo from '../../media/icons/logo.png'
import profil from '../../media/icons/profil.svg'
import wallet from '../../media/icons/wallet.svg'

const Navbar = () => {
    return (
        <Container>
            <Wrapper>
                <Wrapper.Left>
                    <Logo src={logo}/>
                </Wrapper.Left>
                <Wrapper.Middle>

                </Wrapper.Middle>
                <Wrapper.Right>
                    <Wrapper.Title>Explore</Wrapper.Title>
                    <Wrapper.Title>Stats</Wrapper.Title>
                    <Wrapper.Title>Resources</Wrapper.Title>
                    <Wrapper.Title>Create</Wrapper.Title>
                    <Wrapper.Logo src={profil}/>
                    <Wrapper.Logo src={wallet}/>
                </Wrapper.Right>
            </Wrapper>
        </Container>
    )
}

export default Navbar
