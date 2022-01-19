import styled from "styled-components";

export const Container = styled.div`
display: flex;
margin-top: 50px;
box-sizing: border-box;
`
export const Wrapper = styled.div`
width: 15vw;
/* height: 46vh; */
border: 1px solid lightgray;
border-radius: 10px;
box-sizing: border-box;
display: flex;
flex-direction: column;
@media screen and (max-width: 1856px) {
    width: 18vw;

} 
@media screen and (max-width: 1562px) {
    width: 24vw;
} 
@media screen and (max-width: 1270px) {
    width: 34vw;
} 
@media screen and (max-width: 918px) {
    width: 47vw;
} 
`

Wrapper.Photo = styled.img`
box-sizing: border-box;
border-top-right-radius: 10px;
border-top-left-radius: 10px;
height: 280px;
`

Wrapper.Info = styled.div`
display: flex;
flex-direction: column;
padding: 5px;
box-shadow: 0px 1px 8px lightgray;
`

Wrapper.InfoTitle = styled.div`
display: flex;
color: rgb(53, 56, 64);
font: normal normal bold 14px Poppins;
justify-content: space-between;
padding: 0 5px;
`

Wrapper.InfoName = styled.div`
display: flex;
color: gray;
font: normal normal normal 15px Poppins;
justify-content: space-between;
padding: 10px 5px 0 5px;
`

Wrapper.InfoType = styled.div`
display: flex;
color: rgb(53, 56, 64);
font: normal normal bold 14px Poppins;
justify-content: space-between;
padding: 0 5px;
`


Wrapper.Footer = styled.div`
padding: 12px;
height: 42px;
display: flex;
justify-content: space-between;
align-items: center;


`
Wrapper.Icon = styled.img`
width: 16px;    
cursor: pointer ;
`

Wrapper.IconWrap = styled.div`
display: flex;

p{
    margin-left: 5px;
    color: gray;
    font: normal normal normal 12px Poppins;
}
`