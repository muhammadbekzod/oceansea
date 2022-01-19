
import React from 'react'
import styled from 'styled-components'
import { card } from '../../../../Mock/mockData'
import MenuMega from '../MenuMega'


const MegaControll = () => {
    return (
        <>
        <Container>
           {card.info.map((value)=>(
               <MenuMega value={value} />
           ))}
         
        </Container>
        </>
    )
}

export const Container = styled.div`
display: grid;
grid-template-areas: "a a a a a";
gap: 20px;
@media screen and (max-width: 1856px) {
    display: grid;
    grid-template-areas: "a a a a";
    align-items: center;
    justify-content: center;
    gap: 20px;
}  
@media screen and (max-width: 1562px) {
    display: grid;
    grid-template-areas: "a a a";
    align-items: center;
    justify-content: center;
    gap: 0.2vw;
} 
@media screen and (max-width: 1270px) {
    display: grid;
    gap: 0.2vw;
    grid-template-areas: "a a";
    align-items: center;
    justify-content: center;
  
} 
@media screen and (max-width: 918px) {
    display: grid;
    grid-template-areas: "a";
    align-items: center;
    justify-content: center;
    gap: 0.2vw;
  
    
} 

`

export default MegaControll