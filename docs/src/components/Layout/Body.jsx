import React from 'react';
import styled from 'styled-components';

import CtaButton from '../CtaButton';

class Body extends React.Component {
  render() {
    return (
      <BodyContainer>
        <MainDescription>
          Instead of re-writing the same scroll-to-top logic over and over in
          each component or project, lean on this simple, stylable button to do
          it for you. Don't sweat the small stuff.
        </MainDescription>
        <CtaButton to={'/install'}>DOCS</CtaButton>
        <CtaButton to={'/demo'}>DEMO</CtaButton>
        <MainDescription>
          See it in a demo, or how to quickly add it to your project.
        </MainDescription>
      </BodyContainer>
    );
  }
}

export default Body;

const Container = styled.div`
  padding: ${props => props.theme.sitePadding};
`;

const BodyContainer = styled.div`
  padding: ${props => props.theme.sitePadding};
  max-width: ${props => props.theme.contentWidthLaptop};
  margin: 0 auto;
  text-align: center;
`;

const MainDescription = styled.p`
  text-align: center;
`;
