import styled from "styled-components";


export const Container = styled.div`
padding: 28px 0 0 28px;
/* width: 80vw; */
`

export const Wrapper = styled.div`
display: flex;
justify-content: space-between;
width: 80vw;
@media screen and (max-width: 1856px) {
    width: 75vw;
} 
@media screen and (max-width: 1562px) {
    width: 73vw;
}
@media screen and (max-width: 1270px) {
    width: 67vw;
} 
@media screen and (max-width: 918px) {
  display: flex;
  flex-direction: column;
  width: 50vw;
} 

`
Wrapper.Right = styled.div`
display: flex;
/* width: 100vw; */
@media screen and (max-width: 1856px) {
    justify-content: right;
    width: 75vw;
} 
@media screen and (max-width: 1562px) {
    width: 35vw;
}
@media screen and (max-width: 1270px) {
    width: 35vw;
} 
@media screen and (max-width: 918px) {
    width: 50vw;
} 
`
Wrapper.Input = styled.input`
border: 1px solid lightgray;
width: 58vw;
border-radius: 10px;
height: 50px;
margin-right: 5px;
 
@media screen and (max-width: 1856px) {
    justify-content: right;
    width: 75vw;
} 
@media screen and (max-width: 1562px) {
    width: 35vw;
}
@media screen and (max-width: 1270px) {
    width: 35vw;
} 

@media screen and (max-width: 918px) {
    width: 50vw;
} 
`

Wrapper.DropDown = styled.div`
display: flex;
align-items: center;
padding: 0 10px;
font: normal normal normal 15px Poppins;
border: 1px solid lightgray;
border-radius: 10px;
width: 270px;
height: 50px;
margin-right: 5px;
`

export const IconWrapper = styled.div`
display: flex;
justify-content: space-evenly;
border: 1px solid lightgray;
height: 50px;
padding: 5px;
border-radius: 10px;
width: 100px;
margin-right: 5px;
`
Wrapper.Icon = styled.img`
width: 26px;
cursor: pointer;
/* border-right: ${({menuicon})=>(menuicon ? '1px solid lightgray':'0')} ; */
margin-right: ${({menuicon})=>(menuicon ? '5px':'0')} ;
`
Container.Title = styled.div`

margin-left: 8px;
    font: normal normal normal 16px Poppins;
    color: rgb(53, 56, 64);
    height: 50px;
    display: flex;
    align-items: flex-end;
`