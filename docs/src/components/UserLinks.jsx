import React, { Component } from "react";
import { FaGithub } from "react-icons/lib/fa";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  max-width: 100%;
`;

const UserIcon = styled.a`
  margin-left: 25px;
  color: white;
  &:hover {
    color: ${props => props.theme.codeEditGreen};
    border-bottom: none;
  }
`;

const iconStyle = {
  width: "30px",
  height: "30px"
};

class UserLinks extends Component {
  render() {
    return (
      <Container className="user-links">
        <UserIcon href="https://github.com/graysonhicks/react-scrolltop-button">
          <FaGithub style={iconStyle} />
        </UserIcon>
      </Container>
    );
  }
}

export default UserLinks;
