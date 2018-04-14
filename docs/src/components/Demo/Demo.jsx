import React, { Component } from 'react'
import styled from 'styled-components'
import sanctum from 'sanctum-ipsum'

import Toggle from 'react-toggle'
import Slider from 'react-rangeslider'

import ScrollTop from 'react-scrolltop-button'

import './toggle.css'
import 'react-rangeslider/lib/index.css'

class Demo extends Component {
  constructor(props) {
    super(props)
    this.state = {
      custom: false,
      speed: 250,
      breakpoint: 991,
      distance: 50,
      target: 0,
      lorem: sanctum(30, 4),
    }

    this.handleCustom = this.handleCustom.bind(this)
    this.handleSpeed = this.handleSpeed.bind(this)
    this.handleBreakPoint = this.handleBreakPoint.bind(this)
    this.handleDistance = this.handleDistance.bind(this)
    this.handleTarget = this.handleTarget.bind(this)
  }

  handleCustom() {
    this.setState(prevState => ({
      custom: !prevState.custom,
    }))
  }
  handleSpeed(value) {
    if (!this.state.custom) return
    this.setState({
      speed: value,
    })
  }
  handleBreakPoint(value) {
    if (!this.state.custom) return
    this.setState(
      {
        breakpoint: value,
      },
      () => {
        window.dispatchEvent(new Event('resize'))
      }
    )
  }
  handleDistance(value) {
    if (!this.state.custom) return
    this.setState({
      distance: value,
    })
  }
  handleTarget(value) {
    if (!this.state.custom) return
    this.setState({
      target: value,
    })
  }
  render() {
    return (
      <DemoContainer>
        <h1>Demo</h1>
        <DemoOptions>
          <OptionLabel htmlFor="custom-toggle" custom={1}>
            Custom Button
          </OptionLabel>
          <Toggle
            id="custom-toggle"
            icons={false}
            defaultChecked={this.state.custom}
            onChange={this.handleCustom}
          />
        </DemoOptions>
        <DemoOptions>
          <OptionLabel htmlFor="speed" custom={this.state.custom}>
            Speed ({this.state.speed} ms)
          </OptionLabel>

          <StyledSlider
            id="speed"
            min={1}
            max={1500}
            tooltip={false}
            value={this.state.speed}
            onChange={this.handleSpeed}
            custom={this.state.custom}
          />
        </DemoOptions>

        <DemoOptions>
          <OptionLabel htmlFor="breakpoint" custom={this.state.custom}>
            Breakpoint ({this.state.breakpoint} px)
          </OptionLabel>

          <StyledSlider
            id="breakpoint"
            min={320}
            max={2100}
            tooltip={false}
            value={this.state.breakpoint}
            onChange={this.handleBreakPoint}
            custom={this.state.custom}
          />
        </DemoOptions>

        <DemoOptions>
          <OptionLabel htmlFor="distance" custom={this.state.custom}>
            Distance ({this.state.distance} px)
          </OptionLabel>

          <StyledSlider
            id="distance"
            min={0}
            max={500}
            tooltip={false}
            value={this.state.distance}
            onChange={this.handleDistance}
            custom={this.state.custom}
          />
        </DemoOptions>

        <DemoOptions>
          <OptionLabel htmlFor="target" custom={this.state.custom}>
            Target ({this.state.target} px)
          </OptionLabel>

          <StyledSlider
            id="target"
            min={0}
            max={500}
            tooltip={false}
            value={this.state.target}
            onChange={this.handleTarget}
            custom={this.state.custom}
          />
        </DemoOptions>

        <h4>
          Scroll down to see the button. Also, change the window size to see the
          breakpoint cause the mobile version to render.
        </h4>
        <h4>
          Use the options above to test out some of the props for a custom
          button.
        </h4>
        <div dangerouslySetInnerHTML={{ __html: this.state.lorem }} />

        {this.state.custom ? (
          <CustomScrollTop
            text="all the way up"
            icon={<MyIcon />}
            speed={this.state.speed}
            breakpoint={this.state.breakpoint}
            distance={this.state.distance}
            target={this.state.target}
          />
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

const OptionLabel = styled.label`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 2.5px;
  margin-right: 15px;
  font-size: 1.6rem;
  width: 20%;
  opacity: ${props => (props.custom ? 1 : 0.25)};
`

const StyledSlider = styled(Slider)`
  width: 80%;
  left: 3px;
  opacity: ${props => (props.custom ? 1 : 0.25)};

  .rangeslider__fill {
    background-color: #82bf56;
  }
`
