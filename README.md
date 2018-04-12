# react-scrolltop

React component for scrolling to top of the page.

## Demo

http://graysonhicks.github.io/react-scrolltop/

## Install

`npm install react-scrolltop`

## Usage

### Defaults

#### text `String`

Desired text to show on desktop version of the button. No text shows on mobile.

#### distance `Number`

The distance in pixels from the top of the document that button should show.

#### breakpoint `Number`

Screen width when mobile/desktop buttons switch.

#### style `Object`

Standard CSS style object to override or add to default styles.

#### className `String`

Custom class name to be added to component. Is in addition to default `react-scrolltop` and `react-scrolltop-mobile` classes.

#### speed `Number`

Duration for scrolling to top (in milliseconds).

#### target `Number`

Distance from top of page to scroll up to.

### Use defaults

`<ScrollTop />`

### Override all defaults

`<ScrollTop email="mathews.kyle@gmail.com" size={100} rating="pg" default="monsterid" className="CustomAvatar-image" />`
