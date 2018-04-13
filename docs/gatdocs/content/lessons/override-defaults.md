---
title: "Overriding Defaults"
---

Default prop values can be overriden by passing down as props.

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

> Note that overriding the `style` prop for the `<MyIcon/>` is done one of the same two ways as above.