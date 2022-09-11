import React from "react";
import styledComponents from "styled-components";
import Box from "../Box/Box";
import { breakpoints } from "../../constants";
export * from "./spacing.stories";

export const StyledBox = styledComponents(Box)`
  color: white;
  width: 200px;
  height: 200px;

  &&:after{
    content: "this should not be visible";
  }

  @media ${breakpoints.mobile}{
    background-color: blue;
    &&:after{
      content: "this is mobile";
    }
  }

  @media ${breakpoints.desktop}{
    background-color: green;
    &&:after{
      content: "this is desktop";
    }
  }

  @media ${breakpoints.tablet}{
    background-color: red;
    &&:after{
      content: "this is tablet";
    }
  }


`;


export default {
  title: "Responsive / Box example",
  component: StyledBox,
};
