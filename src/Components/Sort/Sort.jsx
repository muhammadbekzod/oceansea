import React, { useState } from 'react'

import { Container, IconContainer, IconWrapper, Wrapper } from './SortStlye'
import MenuH from '../../media/icons/menu.svg'
import MenuV from '../../media/icons/menuMini.svg'
import ButtonDropDownCmp from '../button/buttonDropDownCmp'


const Sort = ({onClick}) => {
const [on, setOn] = useState(true)
    
    return (
        <Container>
            <Wrapper>
                <Wrapper.Input/>
                <Wrapper.Right>
           
        
                <ButtonDropDownCmp />
            
              
                <ButtonDropDownCmp>
                    
                </ButtonDropDownCmp>
                <IconContainer>
                <IconWrapper menuicon
                className="menuIcon"
                  active ={on}
                  onClick={()=>{
                      onClick(true);
                      setOn(true);
                  }}>
                <Wrapper.Icon 
                menuicon 
                src={MenuH}
                  active={on}
                />
                 </IconWrapper>
                 <IconWrapper 
                className="menuIcon"
                  active ={!on}
                  onClick={()=>{
                      onClick(false);
                      setOn(false);
                  }}>
                <Wrapper.Icon src={MenuV}
                active={!on}/>
               </IconWrapper>
               </IconContainer>
                </Wrapper.Right>
            </Wrapper>
            <Container.Title>7 Items

            </Container.Title>
            {/* <MegaControll/> */}
        </Container>
    )
}

export default Sort
