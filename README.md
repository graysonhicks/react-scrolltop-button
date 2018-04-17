# react-scrolltop-button ☝️

React component for scrolling to top of the page.

## Demo

http://graysonhicks.github.io/react-scrolltop-button/demo/

## Install

```javascript
npm install react-scrolltop-button
```

## Usage

```javascript
import ScrollTop from "react-scrolltop-button";
```

### Use all defaults

`<ScrollTop />`

### Override/Add to defaults

```javascript
<ScrollTop
  text="take me to your header"
  distance={100}
  breakpoint={768}
  style={{ backgroundColor: "red" }}
  className="scroll-your-role"
  speed={1000}
  target={75}
  icon={<MyIcon />}
/>
```

### With `styled-components`

`ScrollTop` styles can be modified with `styled-components` as well. Other props are then passed down through your styled component.

```javascript
const StyledScrollTop = styled(ScrollTop)`
  background-color: red;
`;

<StyledScrollTop
  text="i'm styled with styled-components and some other props are overwritten too"
  distance={100}
  breakpoint={768}
/>;
```

> Note that overriding the `style` prop for the `<MyIcon/>` is done one of the same two ways as above.

### Props

#### text

`string` _(default: "back to top")_

Desired text to show on desktop version of the button. No text shows on mobile.

#### distance

`number` _(default: 50)_

The distance in pixels from the top of the document that button should show.

#### breakpoint

`number` _(default: 991)_

Screen width in pixels when mobile/desktop buttons switch.

#### style

`object`

Standard CSS style object to override or add to default styles.

#### className

`string` _(default: "react-scrolltop-button" / "react-scrolltop-button-mobile")_

Custom class name to be added to component. Is in addition to default `react-scrolltop-button` and `react-scrolltop-button-mobile` classes. Base classes are not removed.

#### speed

`number` _(default: 250)_

Duration in milliseconds for scrolling to top .

#### target

`number` _(default: 0)_

Distance in pixels from top of page to scroll up to.

#### icon

`element`

A custom React component that is shown on the mobile button.

## Contributing

Fully open to contributions, come over to the repo and touch base!
