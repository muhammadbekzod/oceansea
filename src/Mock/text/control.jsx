import React from 'react';
import styled from 'styled-components';
import text from '../text';
import Text from './text';

const ControllText = () => {
  return(
    <Container>
    {
      text.map((q)=>{
          return <Text key={q.id} {...q}/>
      })
    }
</Container>

  )
};
export const Container = styled.div`


`
export default ControllText;
