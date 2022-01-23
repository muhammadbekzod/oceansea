import React, { useState } from 'react';
import styled from 'styled-components';
import MenuController from '../../../../../Cards/MenuController';
import Filter from '../../../../../Filter/Filter';
import Sort from '../../../../../Sort/Sort';

const ControlI = () => {
    const[active, setActive] = useState(true)
  return(
  <Container>
           <Wrapper>
            <Filter />
            <Wrapper.Br />
            <CardWrap>
            <Sort onClick={(state) => setActive(state)}/>
            <MenuController active={active}/>
            </CardWrap>
            </Wrapper>


  </Container>
  )
};

export const Container = styled.div`
display: flex;


`


export const Wrapper = styled.div`
display: flex;
`

Wrapper.Br = styled.div`
border-right: 1px solid lightgray;
`

export const CardWrap = styled.div`
display: flex;
flex-direction: column ;
`
export default ControlI;
