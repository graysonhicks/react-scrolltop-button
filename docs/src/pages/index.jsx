import React from 'react';
import Helmet from 'react-helmet';
import styled from 'styled-components';
import Img from 'gatsby-image';

import SEO from '../components/SEO';
import config from '../../data/SiteConfig';

import Navigation from '../components/Layout/Navigation';
import Body from '../components/Layout/Body';

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
              <Img
                resolutions={this.props.data.file.childImageSharp.resolutions}
              />
              <h1>{config.siteTitle}</h1>
              <h4>{config.siteDescription}</h4>
            </Hero>
          </IndexHeadContainer>
          <Body />
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
    file(relativePath: { eq: "logo.png" }) {
      childImageSharp {
        resolutions(width: 128, height: 128) {
          ...GatsbyImageSharpResolutions
        }
      }
    }
  }
`;
