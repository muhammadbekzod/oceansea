import React from 'react';
import styled from 'styled-components';

const DropDowncard = ({data =[]}) => (

<ButtonDropDownWrap>
    <ul>
        {data.map((item, i)=>(
            <DropDownItems key={i}>
                <p>{item}</p>
            </DropDownItems>
        ))}
    </ul>
</ButtonDropDownWrap>

);
export const ButtonDropDownWrap= styled.div`
cursor: pointer;
position: absolute;
background-color: white;
display: flex;
align-items: center;
/* padding: 0 10px; */
font: normal normal normal 15px Poppins;
border: 1px solid lightgray;
border-radius: 10px;
width: 14.5vw;
margin-right: 5px;
box-shadow: rgb(4 17 29 / 25%) 0px 0px 8px 0px;

`
export const DropDownItems = styled.div`
height: 60px;
width: 14.4vw;
/* border-bottom: 1px solid lightgray; */
display: flex;
align-items: center;
:hover{
    box-shadow: rgb(4 17 29 / 20%) 0px 0px 8px 0px;
}
p{
    margin-left: 5px;
}
`


export default DropDowncard;
