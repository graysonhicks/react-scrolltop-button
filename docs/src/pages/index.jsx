import React from "react";
import Helmet from "react-helmet";
import styled from "styled-components";

import SEO from "../components/SEO";
import config from "../../data/SiteConfig";
import CtaButton from "../components/CtaButton";
import Navigation from "../components/Layout/Navigation";

class Index extends React.Component {
  render() {
    const postEdges = this.props.data.allMarkdownRemark.edges;
    return (
      <div className="index-container">
        <Helmet title={config.siteTitle} />
        <SEO postEdges={postEdges} />
        <main>
    
          <IndexHeadContainer>
            <Navigation />
            <Hero>
              <img src={config.siteLogo} width="150px" />
              <h1>
                {config.siteTitle}
              </h1>
              <h4>
                {config.siteDescription}
              </h4>
            </Hero>
          </IndexHeadContainer>
          <BodyContainer>
            <MainDescription>
              See it in a demo, or how to quickly add it to your project.
            </MainDescription>
            <CtaButton to={"/install"}>DOCS</CtaButton>
            <CtaButton to={"/demo"}>DEMO</CtaButton>
          </BodyContainer>
        </main>
      </div>
    );
  }
}

export default Index;

const IndexHeadContainer = styled.div`
  background: ${props => props.theme.brand};
  padding: ${props => props.theme.sitePadding};
  text-align: center;
`;

const Hero = styled.div`
  color: white;
  padding: 50px 0;
  & > h1 {
    font-weight: 600;
  
  }
`;

const BodyContainer = styled.div`
  padding: ${props => props.theme.sitePadding};
  max-width: ${props => props.theme.contentWidthLaptop};
  margin: 0 auto;
  text-align: center;
`;

const MainDescription = styled.p`text-align: center;`;

/* eslint no-undef: "off"*/
export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(limit: 2000) {
      edges {
        node {
          fields {
            slug
          }
          excerpt
          timeToRead
          frontmatter {
            title
          }
        }
      }
    }
  }
`;
