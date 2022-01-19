import React from 'react'
import { Container, Wrapper } from './FilterStyle'
import down from '../../media/icons/down.svg'
import filter from '../../media/icons/filter.svg'
import left from '../../media/icons/left.svg'
const Filter = () => {
    return (
        <Container>
            <Wrapper>
                <Wrapper.Title> <Wrapper.FilterTitle> <Wrapper.FilterIcon src={filter}/>Filter</Wrapper.FilterTitle><Wrapper.FilterIcon src={left}/></Wrapper.Title>
                <Wrapper.Title>Status <Wrapper.DownIcon src={down}/> </Wrapper.Title>
                <Wrapper.Title>Price <Wrapper.DownIcon src={down}/> </Wrapper.Title>
                <Wrapper.Title>Chains <Wrapper.DownIcon src={down}/> </Wrapper.Title>
                <Wrapper.Title>On Sale In <Wrapper.DownIcon src={down}/></Wrapper.Title>

            </Wrapper>
        </Container>
    )
}

export default Filter;
