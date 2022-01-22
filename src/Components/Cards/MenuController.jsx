import React from 'react'
import styled from 'styled-components'
import MegaControll from './MenuMega/controller/megaController'
import MiniControll from './MenuMini/controller/miniController'


const MenuController = ({active}) => {
    return (
        <Container>
            {active ? <MegaControll/> : <MiniControll/>}
        </Container>
    )
}
export const Container = styled.div`
display: flex;
`

export default MenuController