import styled from "styled-components";

export const Container = styled.div`
width: 340px;
height: 100vh;
@media screen and (max-width: 1562px) {
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
flex-direction: column;
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


export const ButtonWrapper = styled.div`
display: grid;
grid-template-areas: "a a";
background-color: rgb(251, 253, 255);
align-items: center;
gap: 10px;
width: 340px;
margin-top: 20px;
padding-top: 20px;
justify-content: center;
align-items: center;
border-top: 1px solid lightgray;
/* background-color: rgb(21, 178, 229); */
`

export const Button = styled.div`
border: 1px solid lightgray;
display: flex;
color: rgba(4, 17, 29, 0.75);
border-radius: 10px;
align-items: center;
padding-left: 10px;
font-weight: 600;
font-family: 'Poppins', sans-serif;
font-size: 15px;
width: 140px;
height: 40px;
background-color: white;
:hover{
    box-shadow: rgb(4 17 29 / 25%) 0px 0px 8px 0px;
}
`


export const ButtonCon = styled.div`
display: flex;
justify-content: space-between;
width: 300px;
`