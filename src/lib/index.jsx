import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import TiArrowUp from "react-icons/lib/ti/arrow-up";

const ArrowUp = () => <TiArrowUp style={{ fontSize: "2.25em" }} />;

const ScrollToTopButton = styled.button`
  position: fixed;
  right: 5%;
  bottom: 10%;
  padding: 15px;
  border-radius: 10px;
  border: 2px solid black;
  font-weight: bold;
  background-color: white;
  cursor: pointer;
  transition: all 0.5s;

  &:focus {
    outline: none;
  }

  &:hover {
    background-color: black;
    color: white;
  }

  ...props.style;
`;

const MobileScrollToTopButton = styled(ScrollToTopButton)`
  position: fixed;
  right: 5%;
  bottom: 5%;
  padding: 10px;
  z-index: 10;
  border-radius: 50%;
  ...props.style;
`;

class ScrollTop extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isMobile: false,
      showScrollToTop: null,
    };

    this.checkWindowSize = this.checkWindowSize.bind(this);
    this.handleScroll = this.handleScroll.bind(this);
    this.scrollUp = this.scrollUp.bind(this);
    this.getScrollTop = this.getScrollTop.bind(this);
    this.setScrollTop = this.setScrollTop.bind(this);
  }

  componentDidMount() {
    this.checkWindowSize();
    this.checkForScrollToTop();
    window.addEventListener("resize", this.checkWindowSize);
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.checkWindowSize);
    window.addEventListener("scroll", this.handleScroll);
  }

  checkWindowSize() {
    this.setState({ isMobile: window.innerWidth < this.props.breakpoint });
  }

  checkForScrollToTop() {
    if (
      document.body.scrollTop > this.props.distance ||
      document.documentElement.scrollTop > this.props.distance
    ) {
      this.setState({
        showScrollToTop: true,
      });
    } else {
      this.setState({
        showScrollToTop: false,
      });
    }
  }

  handleScroll() {
    this.checkForScrollToTop();
  }

  scrollUp() {
    const { performance, requestAnimationFrame } = window;

    const { speed, target } = this.props;
    if (
      speed <= 0 ||
      typeof performance === "undefined" ||
      typeof requestAnimationFrame === "undefined"
    ) {
      return this.setScrollTop(target);
    }
    const start = performance.now();
    const initScrollTop = this.getScrollTop();
    const pxsToScrollBy = initScrollTop - target;

    const that = this;
    requestAnimationFrame(step);

    function step(timestamp) {
      const delta = timestamp - start;
      const progress = Math.min(delta / speed, 1);
      that.setScrollTop(initScrollTop - Math.round(progress * pxsToScrollBy));
      if (progress < 1) {
        requestAnimationFrame(step);
      }
    }
  }

  getScrollTop() {
    return (
      document.body.scrollTop ||
      (document.documentElement && document.documentElement.scrollTop) ||
      0
    );
  }

  setScrollTop(value) {
    document.body.scrollTop = value;
    if (document.documentElement) {
      document.documentElement.scrollTop = value;
    }
  }

  render() {
    let className = "react-scrolltop-button";
    if (this.props.className) {
      className = `${className} ${this.props.className}`;
    }

    if (this.state.isMobile) {
      className = `${className} react-scrolltop-button-mobile`;
    }

    // Clone this.props and then delete Component specific props so we can
    // spread the rest into the button.
    let { ...rest } = this.props;
    delete rest.text;
    delete rest.style;
    delete rest.className;
    delete rest.breakpoint;
    delete rest.distance;

    return this.state.showScrollToTop && this.state.isMobile ? (
      <MobileScrollToTopButton
        style={this.props.style}
        {...rest}
        className={className}
        onClick={this.scrollUp}
      >
        {this.props.icon ? this.props.icon : <ArrowUp />}
      </MobileScrollToTopButton>
    ) : (
      this.state.showScrollToTop && (
        <ScrollToTopButton
          style={this.props.style}
          {...rest}
          className={className}
          onClick={this.scrollUp}
        >
          {this.props.text}
        </ScrollToTopButton>
      )
    );
  }
}

ScrollTop.propTypes = {
  text: PropTypes.string,
  className: PropTypes.string,
  style: PropTypes.object,
  distance: PropTypes.number,
  breakpoint: PropTypes.number,
  icon: PropTypes.element,
  speed: PropTypes.number,
  target: PropTypes.number,
};

ScrollTop.defaultProps = {
  text: "back to top",
  distance: 50,
  breakpoint: 991,
  speed: 250,
  target: 0,
};

export default ScrollTop;
