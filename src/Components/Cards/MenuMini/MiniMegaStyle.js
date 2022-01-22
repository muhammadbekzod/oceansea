import styled from "styled-components";

export const Container = styled.div`
display: flex;
margin-top: 10px;
`
export const Wrapper = styled.div`
cursor: pointer;
width: 191px;
/* height: 407px; */
border: 1px solid lightgray;
border-radius: 10px;
box-sizing: border-box;
display: flex;
flex-direction: column;
:hover{
    box-shadow: rgb(4 17 29 / 25%) 0px 0px 8px 0px;
    transform: translateY(-1%);
}
`

Wrapper.Photo = styled.img`
box-sizing: border-box;
border-top-right-radius: 10px;
border-top-left-radius: 10px;
height: 189px;
`

Wrapper.Info = styled.div`
display: flex;
flex-direction: column;
padding: 2px;
box-shadow: 0px 1px 8px lightgray;
`

Wrapper.InfoTitle = styled.div`
display: flex;
color: rgb(53, 56, 64);
font: normal normal bold 11px Poppins;
justify-content: space-between;
padding: 0 5px;
`

Wrapper.InfoName = styled.div`
display: flex;
color: gray;
font: normal normal normal 10px Poppins;
justify-content: space-between;
padding: 10px 5px 0 5px;
`

Wrapper.InfoType = styled.div`
display: flex;
color: rgb(53, 56, 64);
font: normal normal bold 10px Poppins;
justify-content: space-between;
padding: 0 5px;
`


Wrapper.Footer = styled.div`
padding: 12px;
height: 32px;
display: flex;
justify-content: space-between;
align-items: center;


`
Wrapper.Icon = styled.img`
width: 13px;    
cursor: pointer ;
`

Wrapper.IconWrap = styled.div`
display: flex;

p{
    margin-left: 5px;
    color: gray;
    font: normal normal normal 10px Poppins;
}
`