
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
display: grid;
grid-template-areas: "a a a a a a a";
gap: 20px;
`

export default MiniControll