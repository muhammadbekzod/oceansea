import React from 'react';
import styled from 'styled-components';
import ControlI from './activity/controller/controlI';
import ControlA from './items/controller/controlA';

const Controller = ({active}) => {
  return (
  <Container>
    {active ? <ControlI /> : <ControlA/>}
  </Container>
  )
};

export const Container = styled.div`
display: flex;
`

export default Controller;
