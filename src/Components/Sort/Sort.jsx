import React from 'react'
import { Container, IconWrapper, Wrapper } from './SortStlye'
import MenuH from '../../media/icons/menu.svg'
import MenuV from '../../media/icons/menuMini.svg'
import MegaControll from '../Cards/MenuMega/controller/megaController'
const Sort = () => {
    return (
        <Container>
            <Wrapper>
                <Wrapper.Input/>
                <Wrapper.Right>
                <Wrapper.DropDown>
                    Single Item
                </Wrapper.DropDown>
                <Wrapper.DropDown>
                    Oldest
                </Wrapper.DropDown>
                <IconWrapper>
                <Wrapper.Icon src={MenuH}/>
                <Wrapper.Icon src={MenuV}/>
                </IconWrapper>
                </Wrapper.Right>
            </Wrapper>
            <Container.Title>7 Items

            </Container.Title>
            <MegaControll/>
        </Container>
    )
}

export default Sort
