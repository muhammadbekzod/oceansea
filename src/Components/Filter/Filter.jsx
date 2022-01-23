import React from 'react'
import { Button, ButtonCon, ButtonWrapper, Container, Wrapper } from './FilterStyle'
import down from '../../media/icons/down.svg'
import filter from '../../media/icons/filter.svg'
import left from '../../media/icons/left.svg'
const Filter = () => {
    return (
        <Container>
            <Wrapper>
                <Wrapper.Title> 
                <ButtonCon>
                    <Wrapper.FilterTitle>
                         <Wrapper.FilterIcon src={filter}/>Filter</Wrapper.FilterTitle>
                         <Wrapper.FilterIcon src={left}/>
                         </ButtonCon>
                </Wrapper.Title>
               
                <Wrapper.Title>
                <ButtonCon>
                    Status
              
                <Wrapper.DownIcon src={down}/>
                </ButtonCon>
                <ButtonWrapper>
                <Button>Buy Now</Button>
                <Button>On Auction</Button>
                <Button>New</Button>
                <Button>Has Offers</Button>
                </ButtonWrapper>
                
                 </Wrapper.Title>
                <Wrapper.Title>
                <ButtonCon>
                Price 
                <Wrapper.DownIcon src={down}/> 
                </ButtonCon>
                </Wrapper.Title>
                <Wrapper.Title>
                <ButtonCon>
                Chains
                 <Wrapper.DownIcon src={down}/> 
                 </ButtonCon>
                 </Wrapper.Title>
                <Wrapper.Title>
                <ButtonCon>
                On Sale In 
                <Wrapper.DownIcon src={down}/>
                </ButtonCon>
                </Wrapper.Title>

            </Wrapper>
        </Container>
    )
}

export default Filter;
