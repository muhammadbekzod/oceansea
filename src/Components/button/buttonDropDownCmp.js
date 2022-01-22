import React from 'react';
import styled from 'styled-components';
import Button from './button';
import DropDowncard from './dropDowncard';



const sampleData = new Array(2).fill("item name");



const ButtonDropDownCmp = () => {
const [open, setOpen] = React.useState(false)
const drop = React.useRef(null);
function handleClick(e){
    if(!e.target.closest("#drop-down-wrapper")&& open){
        setOpen(false)
    }
}

React.useEffect(()=>{
    document.addEventListener("click", handleClick);
    return ()=>{
        document.removeEventListener("click", handleClick);
    };
});
  return (
  
  <div className="dropwdown"
  ref={drop}
  >
      <Button onClick={()=> setOpen(open => !open)}/>
      {open && <DropDowncard data={sampleData} />}
  </div>
);
};


export const ButtonWrapper= styled.div`
cursor: pointer;
display: flex;
align-items: center;
padding: 0 10px;
font: normal normal normal 15px Poppins;
border: 1px solid lightgray;
border-radius: 10px;
width: 14.5vw;
height: 50px;
margin-right: 5px;

`

export default ButtonDropDownCmp;
