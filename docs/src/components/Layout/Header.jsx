import React from "react";
import styled from "styled-components";
import Navigation from "./Navigation";

class MainHeader extends React.Component {
  render() {
    return (
      <SiteContainer>
        <Navigation />
      </SiteContainer>
    );
  }
}

const SiteContainer = styled.div`
  background: ${props => props.theme.brand};
  padding: ${props => props.theme.sitePadding};
  text-align: center;
`

export default MainHeader;
