import styled from "styled-components";
import bg from '../../../media/img/openseabg.jpeg'
export const Container = styled.div`
`
export const Wrapper = styled.div`
display: flex;
flex-direction: column;
/* justify-content: center;
align-items: center; */

`

Wrapper.Background = styled.div`
width: 100vw;
height: 26vh;
background-position: center;
background-image: url(${bg});
background-size: cover; 


`
Wrapper.Left = styled.div`
display: flex;
align-items: center;
justify-content: space-between ;
width: 53.5vw;
height: 100px;
`
Wrapper.Logo = styled.div`
display: flex;
justify-content: right;
`

export const Logo = styled.img`
display: flex;

border: 2px solid white;
border-radius: 50%;
margin-top: -95px;
width: 126px;
`

Wrapper.Container = styled.div`
display: flex;
border: 1px solid lightgray;
border-radius: 10px;
margin: 5px 45px 0  0;
width: 270px;
height: 47px;
justify-content: space-between;
align-items: center;
`
Wrapper.IconCon = styled.div`
cursor: pointer;
display: flex;
width: 50px;
height: 47px;
/* border: 1px solid red; */
justify-content: center;
align-items: center;
:hover{
    box-shadow: 1px 1px 20px 1px lightgray;
}
border-top-left-radius: ${({left})=>(left ? '10px': '0')};
border-bottom-left-radius: ${({left})=>(left ? '10px': '0')};
border-top-right-radius: ${({extra})=>(extra ? '10px': '0')};
border-bottom-right-radius: ${({extra})=>(extra ? '10px': '0')};
height: ${({big})=>(big ? '88px': '')};
width: ${({big})=>(big ? '144px': '')};
`
Wrapper.ConIcon = styled.img`
width: 18px;
`

Wrapper.ConIconBr = styled.div`

height: 47px;
border-right: 1px solid lightgray;
:hover{
    box-shadow: 1px 1px 20px 1px black;
}
height: ${({big})=>(big ? '88px': '')};
`

Wrapper.ConIcons = styled.img`
height: 18px;
margin:0 7px;

`


Container.Title = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
margin-top: -20px;
`

export const Title = styled.div`
font-size: 40px;
letter-spacing: 0px;
color: rgb(4, 17, 29);
font: normal normal bold 40px Poppins;
text-align: center;
line-height: 1.2;

`

export const Subtitle = styled.div`
margin: 10px 0;
display: flex;
font: normal normal normal 15px Poppins;
color: rgb(53, 56, 64);
p{
    margin-left: 5px;
    cursor: pointer;
    color: rgb(32, 129, 226);
    text-decoration: none;
    font-weight: inherit;
}
`

Subtitle.Icon = styled.img`
`
Title.Con = styled.div`
display: flex;
margin-top: 10px;
/* justify-content: space-between; */
align-items: center;
border: 1px solid lightgray;
height: 88px;
border-radius: 10px;
/* width: 580px; */

`

Title.ConItems = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
    font-weight: 600;
    font: normal normal bold 24px Poppins;
    color: rgb(4, 17, 29);

p{
    text-align: center;
    color: rgb(138, 147, 155);

    font: normal normal normal 14px Poppins;
}
`

Container.TextWrapper = styled.div`
display: flex;
justify-content: center;
align-items: center;
margin-top: 20px;
/* width: 60vw;
border: 1px solid red; */

`
Container.Text = styled.div`
width: 800px;
   font: normal normal normal 16px Poppins;
   color: rgb(112, 122, 131);
    text-align: center;
    word-break: break-word;

p{
    cursor: pointer;
    color: rgb(32, 129, 226);
    /* text-decoration: none;
    font-weight: inherit; */
}
h1{
    margin-top: 20px;
    width: 800px;
   font: normal normal normal 16px Poppins;
   color: rgb(112, 122, 131);
    text-align: center;
    word-break: break-word;
}
`

export const ButtonWrapper = styled.div`
display: flex;
justify-content: center;
align-items: center;
border-bottom: 1px solid lightgray;
`

export const Button = styled.img`
width: 24px;
`

export const ButtonCon = styled.div`
cursor: pointer;
display: flex;
font: normal normal normal 16px Poppins;
align-items: center;
color: gray;
width: 150px;
height: 70px;
justify-content: space-evenly;
`