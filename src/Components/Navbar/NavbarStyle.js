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
font-size: 18px;
font-family: 'Poppins', sans-serif;

`
Wrapper.Logo = styled.img`
width: 32px;
`