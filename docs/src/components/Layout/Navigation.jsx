import React from "react";
import Link from "gatsby-link";
import styled from "styled-components";
import UserLinks from "../UserLinks";

const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  background: ${props => props.theme.brand};

  .nav-link {
    font-size: 1.6rem;
    margin-right: 10px;
    font-weight: bold;
    color: white;
  }

  @media screen and (max-width: 600px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    .nav-link {
      padding-top: 5px;
    }

    section {
      margin-bottom: 10px;
      display: flex;
      flex-direction: row;
      justify-content: space-around;
      width: 100%;
    }
   
  }
`;

class Navigation extends React.Component {
  render() {
    return (
      <NavContainer>
        <section>
          <Link className="nav-link" to="/">
            {" "}HOME{" "}
          </Link>
          <Link className="nav-link" to="/install">
            {" "}DOCS{" "}
          </Link>
          <Link className="nav-link" to="/demo">
            {" "}DEMO{" "}
          </Link>
         
          <UserLinks />
         
        </section>
   
      </NavContainer>
    );
  }
}

export default Navigation;
