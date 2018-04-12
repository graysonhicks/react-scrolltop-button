# react-scrolltop

React component for scrolling to top of the page.

## Demo

http://graysonhicks.github.io/react-scrolltop-button/

## Install

`npm install react-scrolltop-button`

## Usage

### Props

#### text

`string`

Desired text to show on desktop version of the button. No text shows on mobile.

#### distance

`number`

The distance in pixels from the top of the document that button should show.

#### breakpoint

`number`

Screen width in pixels when mobile/desktop buttons switch.

#### style

`object`

Standard CSS style object to override or add to default styles.

#### className

`string`

Custom class name to be added to component. Is in addition to default `react-scrolltop-button` and `react-scrolltop-button-mobile` classes. Base classes are not removed.

#### speed

`number`

Duration in milliseconds for scrolling to top .

#### target

`number`

Distance in pixels from top of page to scroll up to.

#### icon

`element`

A custom React component that is shown on the mobile button.

### Defaults

* text - "back to top"
* distance - 50
* breakpoint - 991
* className - "react-scrolltop-button" / "react-scrolltop-button-mobile"
* speed - 250
* target - 0

### Use all defaults

`<ScrollTop />`

### Override/Add to all defaults

````<ScrollTop
    text="take me to your header"
    distance={100}
    breakpoint={768}
    style={{backgroundColor: 'red'}}
    className="scroll-your-role"
    speed={1000}
    target={75}
    icon={<MyIcon/>}
/>```
````
