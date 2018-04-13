---
title: "API"
---

#### text  

`string` *(default: "back to top")*

Desired text to show on desktop version of the button. No text shows on mobile.

#### distance

`number` *(default: 50)*

The distance in pixels from the top of the document that button should show.

#### breakpoint

`number` *(default: 991)*

Screen width in pixels when mobile/desktop buttons switch.

#### style

`object`

Standard CSS style object to override or add to default styles.

#### className

`string` *(default: "react-scrolltop-button" / "react-scrolltop-button-mobile")*

Custom class name to be added to component. Is in addition to default `react-scrolltop-button` and `react-scrolltop-button-mobile` classes. Base classes are not removed.

#### speed

`number` *(default: 250)*

Duration in milliseconds for scrolling to top .

#### target

`number` *(default: 0)*

Distance in pixels from top of page to scroll up to.

#### icon

`element`

A custom React component that is shown on the mobile button.