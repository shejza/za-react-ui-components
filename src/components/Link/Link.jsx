import React from "react";
import styled from "styled-components";
import useFontProps from "../../utils/font-props";
import useSpacingProps from "../../utils/spacing-props";
import {  color, fontWeight } from "../properties";

const LinkWrapper = (Klass) => styled(Klass)`
  ${useFontProps}
  ${useSpacingProps}
  text-decoration: none;
`;

const Link = styled.a`
  ${useFontProps}
  ${useSpacingProps}
  ${color}
  ${fontWeight}
  text-decoration: none;
`;

export { LinkWrapper };

export default Link;

