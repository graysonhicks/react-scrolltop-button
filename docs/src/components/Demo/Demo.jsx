import React, { Component } from "react";
import styled from "styled-components";

import ScrollTop from "react-scrolltop-button";
import sanctum from "sanctum-ipsum";

const CustomScrollTop = styled(ScrollTop)`
	padding: 10px 20px;
	font-family: 'Arial';
	font-size: 2rem;
	color: #FFF;
  text-decoration: none;
  background-color: #82BF56;
  border: none;
	border-bottom: 5px solid #669644;
  text-shadow: 0px -2px #669644;
  font-weight: normal;
  
  &:active {
    transform: translate(0px,5px);
    border-bottom: 1px solid;
  }

  &:hover {
    background-color: #82BF56;
  }

  @media screen and (max-width: 991px) {
    background-color: #E74C3C;
	  border-bottom: 5px solid #BD3E31;
    text-shadow: 0px -2px #BD3E31;

    &:hover {
      background-color: #E74C3C;
    }
  }
`;

const MyIcon = () => <span role="img">✈️</span>;

class Demo extends Component {
  constructor(props) {
    super(props);
    this.state = { custom: false };
  }
  render() {
    return (
      <DemoContainer>
        <h1>Demo</h1>
        <h4>
          Scroll down to see the button. Also, change the window size to see the
          breakpoint cause the mobile version to render.
        </h4>
        <div dangerouslySetInnerHTML={{ __html: sanctum(30, 4) }} />
        <CustomScrollTop text="all the way up" icon={<MyIcon />} />
      </DemoContainer>
    );
  }
}

export default Demo;

const DemoContainer = styled.div`
  padding: ${props => props.theme.sitePadding};
  max-width: ${props => props.theme.contentWidthLaptop};
  margin: 0 auto;
`;
