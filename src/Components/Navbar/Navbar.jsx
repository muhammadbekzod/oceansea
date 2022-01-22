import React from 'react'
import { Container, DropDownCon, Logo, Wrapper } from './NavbarStyle'
import logo from '../../media/icons/logo.png'
import profil from '../../media/icons/profil.svg'
import wallet from '../../media/icons/wallet.svg'
import './styles.css'

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


                <div className="dropdown">
                    <Wrapper.Title>Explore</Wrapper.Title>

                    <div className="dropdown-content">
                  <DropDownCon> <p> All NFTs </p></DropDownCon>
                  <DropDownCon> <p> Art </p></DropDownCon>
                  <DropDownCon> <p> Collectibles </p></DropDownCon>
                  <DropDownCon> <p> Domain Names </p></DropDownCon>
                  <DropDownCon> <p> Music </p></DropDownCon>
                  <DropDownCon> <p> Photography </p></DropDownCon>
                  <DropDownCon> <p> Sports </p></DropDownCon>
                  <DropDownCon> <p> Trading Cards </p></DropDownCon>
                  <DropDownCon> <p> Utility </p></DropDownCon>
                  <DropDownCon> <p> Virtual World </p></DropDownCon>
                  </div>
                </div>

                    <div className="dropdown">
                    <Wrapper.Title>Stats</Wrapper.Title>
                    <div className="dropdown-content">
                  <DropDownCon> <p> Rankings </p></DropDownCon>
                  <DropDownCon> <p> Activity </p></DropDownCon>
                  </div>
                  </div>


                    <div className="dropdown">
                    <Wrapper.Title>Resources</Wrapper.Title>
                  <div className="dropdown-content">
                  <DropDownCon> <p> Help Center </p></DropDownCon>
                  <DropDownCon> <p> Platform Status </p></DropDownCon>
                  <DropDownCon> <p> Partners </p></DropDownCon>
                  <DropDownCon> <p> Gas-Free Marketplace </p></DropDownCon>
                  <DropDownCon> <p> Blog </p></DropDownCon>
                  <DropDownCon> <p> Docs </p></DropDownCon>
                  <DropDownCon> <p> Newsletter </p></DropDownCon>
                  <DropDownCon> <p> Hello World! </p></DropDownCon>
                  </div>
                </div>
                <Wrapper.Title>Create</Wrapper.Title>
                    <Wrapper.Logo src={profil}/>
                    <Wrapper.Logo src={wallet}/>
                </Wrapper.Right>
            </Wrapper>
        </Container>
    )
}

export default Navbar
