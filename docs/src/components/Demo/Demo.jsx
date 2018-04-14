import React, { Component } from 'react'
import styled from 'styled-components'
import sanctum from 'sanctum-ipsum'

import Toggle from 'react-toggle'
import ScrollTop from 'react-scrolltop-button'

import './toggle.css'

class Demo extends Component {
  constructor(props) {
    super(props)
    this.state = { custom: false, lorem: sanctum(30, 4) }

    this.handleCustom = this.handleCustom.bind(this)
  }
  handleCustom() {
    this.setState(prevState => ({
      custom: !prevState.custom,
    }))
  }
  render() {
    return (
      <DemoContainer>
        <h1>Demo</h1>
        <DemoOptions>
          <Toggle
            id="custom-toggle"
            icons={false}
            defaultChecked={this.state.custom}
            onChange={this.handleCustom}
          />
          <ToggleLabel htmlFor="custom-toggle">Custom Button</ToggleLabel>
        </DemoOptions>
        <h4>
          Scroll down to see the button. Also, change the window size to see the
          breakpoint cause the mobile version to render.
        </h4>
        <div dangerouslySetInnerHTML={{ __html: this.state.lorem }} />

        {this.state.custom ? (
          <CustomScrollTop text="all the way up" icon={<MyIcon />} />
        ) : (
          <ScrollTop />
        )}
      </DemoContainer>
    )
  }
}

export default Demo

const DemoOptions = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
`

const CustomScrollTop = styled(ScrollTop)`
  padding: 10px 20px;
  font-family: 'Arial';
  font-size: 2rem;
  color: #fff;
  text-decoration: none;
  background-color: #82bf56;
  border: none;
  border-bottom: 5px solid #669644;
  text-shadow: 0px -2px #669644;
  font-weight: normal;

  &:active {
    transform: translate(0px, 5px);
    border-bottom: 1px solid;
  }

  &:hover {
    background-color: #82bf56;
  }

  @media screen and (max-width: 991px) {
    background-color: #e74c3c;
    border-bottom: 5px solid #bd3e31;
    text-shadow: 0px -2px #bd3e31;

    &:hover {
      background-color: #e74c3c;
    }
  }
`

const MyIcon = () => <span role="img">✈️</span>

const DemoContainer = styled.div`
  padding: ${props => props.theme.sitePadding};
  max-width: ${props => props.theme.contentWidthLaptop};
  margin: 0 auto;
`

const ToggleLabel = styled.label`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2.5px;
  margin-left: 15px;
  font-size: 1.6rem;
`
