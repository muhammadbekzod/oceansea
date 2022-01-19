import React from 'react'
import styled from 'styled-components'
import Filter from '../Filter/Filter'
import Navbar from '../Navbar/Navbar'
import Sort from '../Sort/Sort'
import HomeHeader from './HomeHeader/HomeHeader'

const HomePage = () => {
    return (
        <>
           <Navbar />
           <HomeHeader />
           <Container>
            <Wrapper>
            <Filter />
            <Wrapper.Br />
            <Sort />
            </Wrapper>
           </Container>
        
        </>
    )
}

export const Container = styled.div`
display: flex;
`

export const Wrapper = styled.div`
display: flex;
`

Wrapper.Br = styled.div`
border-right: 1px solid lightgray;
`

export default HomePage
