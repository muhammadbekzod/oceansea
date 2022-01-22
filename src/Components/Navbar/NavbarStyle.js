import styled from "styled-components";

export const Container = styled.div`
display: flex;
width: 100vw;
height: 72px;
box-shadow: rgb(4 17 29 / 25%) 0px 0px 8px 0px;
position: sticky;
top: 0;
background-color: white;
`

export const Wrapper = styled.div`
display: flex;
justify-content: space-between;
margin: 0 1vw 0 1vw;
align-items: center;
width: 100vw;
`


Wrapper.Left = styled.div`
`

export const Logo = styled.img`

width: 180px;
`

Wrapper.Middle = styled.input`
width: 40vw;
height: 45px;
border: 1px solid lightgray;
border-radius: 8px;
margin-right: 40px;
`

Wrapper.Right = styled.div`
display: flex;
width: 27vw;
justify-content: space-between;
align-items: center;


`

Wrapper.Title = styled.div`
cursor: pointer;
font-size: 16px;
font-weight: 600;
color: rgba(4, 17, 29, 0.75);
font-family: 'Poppins', sans-serif;

`
Wrapper.Logo = styled.img`
width: 32px;
`
export const DropDownCon = styled.div`
cursor: pointer;
width: 220px;
height: 60px;
border-bottom: 1px solid lightgray;
display: flex;
align-items: center;
font-size: 16px;
font-family: 'Poppins', sans-serif;
font-weight: 600;
:hover{
    box-shadow: rgb(4 17 29 / 25%) 0px 0px 8px 0px;
}
p{
    margin-left: 20px;
}
`
