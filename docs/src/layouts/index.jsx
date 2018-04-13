import React from "react";
import Helmet from "react-helmet";
import styled, { ThemeProvider } from "styled-components";
import config from "../../data/SiteConfig";
import "./css/index.css";
import theme from "./theme";

export default class MainLayout extends React.Component {
  getLocalTitle() {
    function capitalize(string) {
      return string.charAt(0).toUpperCase() + string.slice(1);
    }
    const pathPrefix = config.pathPrefix ? config.pathPrefix : "/";
    const currentPath = this.props.location.pathname
      .replace(pathPrefix, "")
      .replace("/", "");
    let title = "";
    if (currentPath === "") {
      title = "Home";
    } else if (currentPath === "demo/") {
      title = "Demo";
    }
    return title;
  }

  render() {
    const { children } = this.props;
    return (
      <div>
        <Helmet>
          <title>{`${config.siteTitle} |  ${this.getLocalTitle()}`}</title>
          <meta name="description" content={config.siteDescription} />
        </Helmet>
        <ThemeProvider theme={theme}>
          {children()}
        </ThemeProvider>
      </div>
    );
  }
}
