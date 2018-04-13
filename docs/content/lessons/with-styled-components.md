---
title: "With styled-components"
---

`<ScrollTop / > ` styles can be modified with `styled-components` as well. Other props are then passed down through your styled component.

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