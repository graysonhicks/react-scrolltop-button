import React from 'react';
import styled from 'styled-components';

import CtaButton from '../CtaButton';

const Container = styled.div`
  padding: ${props => props.theme.sitePadding};
`;

class Body extends React.Component {
  render() {
    return (
      <BodyContainer>
        <MainDescription>
          See it in a demo, or how to quickly add it to your project.
        </MainDescription>
        <CtaButton to={'/install'}>DOCS</CtaButton>
        <CtaButton to={'/demo'}>DEMO</CtaButton>
      </BodyContainer>
    );
  }
}

export default Body;

const BodyContainer = styled.div`
  padding: ${props => props.theme.sitePadding};
  max-width: ${props => props.theme.contentWidthLaptop};
  margin: 0 auto;
  text-align: center;
`;

const MainDescription = styled.p`
  text-align: center;
`;
