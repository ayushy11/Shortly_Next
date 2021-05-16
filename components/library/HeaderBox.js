import styled from "styled-components";
import {
  color,
  typography,
  layout,
  space,
  border,
  shadow,
  display,
  flexbox,
  grid,
  background,
  position,
  compose,
} from "styled-system";

const HeaderBox = styled("header")(
  compose(
    color,
    typography,
    layout,
    space,
    border,
    shadow,
    display,
    flexbox,
    grid,
    background,
    position
  )
);

export default HeaderBox;
