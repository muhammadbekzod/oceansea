
import React from 'react'
import styled from 'styled-components'
import { card } from '../../../../Mock/mockData'
import MenuMega from '../MenuMini'


const MiniControll = () => {
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
display: flex;
grid-template-areas: "a a a a a a a";
margin: 30px;
gap: 20px;
@media screen and (max-width: 1780px) {
    display: grid;
    grid-template-areas: "a a a a a a";
    align-items: center;

    gap: 20px;
}  
@media screen and (max-width: 1625px) {
    display: grid;
    grid-template-areas: "a a a a a";
    align-items: center;

    /* gap: 10px; */
} 
@media screen and (max-width: 1350px) {
    display: grid;
    grid-template-areas: "a a a a";
    align-items: center;
    /* justify-content: center; */
    /* gap: 20px; */
} 
@media screen and (max-width: 1160px) {
    display: grid;
    grid-template-areas: "a a a";
    align-items: center;
    /* justify-content: center; */
    /* gap: 20px; */
} 
@media screen and (max-width: 970px) {
    display: grid;
    grid-template-areas: "a a";
    align-items: center;
    /* justify-content: center;
    gap: 20px; */
} 
@media screen and (max-width: 760px) {
    display: flex;
   flex-direction: column;
    align-items: center;
    /* justify-content: center;
    gap: 20px; */
} 
`

export default MiniControll