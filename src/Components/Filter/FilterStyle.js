import styled from "styled-components";

export const Container = styled.div`
width: 340px;
height: 100vh;
@media screen and (max-width: 1562px) {
    width: 300px;
} 
`

export const Wrapper = styled.div`
font: normal normal bold 17px Poppins;
display: flex;
flex-direction: column;
`

Wrapper.Title = styled.div`
cursor: pointer;
display: flex;
padding: 20px;
justify-content: space-between;
align-items: center;
border-bottom:  1px solid lightgray;
`
Wrapper.FilterTitle = styled.div`
display: flex;
justify-content: space-between;
width: 80px;
`
Wrapper.DownIcon = styled.img`
width: 14px;
display: flex;
justify-content: right;
align-items: center;
`

Wrapper.FilterIcon  = styled.img`
width: 20px;
`