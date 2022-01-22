import React from 'react'

import { Container, IconWrapper, Wrapper } from './SortStlye'
import MenuH from '../../media/icons/menu.svg'
import MenuV from '../../media/icons/menuMini.svg'
import MegaControll from '../Cards/MenuMega/controller/megaController'
import ButtonDropDownCmp from '../button/buttonDropDownCmp'


const Sort = ({onClick}) => {

    
    return (
        <Container>
            <Wrapper>
                <Wrapper.Input/>
                <Wrapper.Right>
           
        
                <ButtonDropDownCmp />
            
              
                <ButtonDropDownCmp>
                    
                </ButtonDropDownCmp>
                <IconWrapper>
                <Wrapper.Icon menuicon src={MenuH}/>
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
