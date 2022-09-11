import { css } from "styled-components";
import { breakpoints } from "../constants";

const DEFAULT_UNIT = "%";
const VALID_UNITS = {
  em: "em",
  ex: "ex",
  ch: "ch",
  rem: "rem",
  vw: "vw",
  vh: "vh",
  vmin: "vmin",
  vmax: "vmax",
  cm: "cm",
  "%": "%",
  mm: "mm",
  in: "in",
  px: "px",
  pt: "pt",
  pc: "pc",
};

const SPECIAL_VALUES = ["fit-content", "min-content", "max-content", "auto"];

const VALUE_REGEX = /[^-\d\.]/g;
const UNIT_REGEX = /[-\d\.]/g;

const capitalize = (string) => string.charAt(0).toUpperCase() + string.slice(1);
const getValue = (value) => value.toString().replace(VALUE_REGEX, "");
const getUnit = (value) => VALID_UNITS[value.toString().replace(UNIT_REGEX, "")] || DEFAULT_UNIT;
const getValueWithUnit = (value) => {
  return SPECIAL_VALUES.includes(value) ? value : getValue(value) + getUnit(value);
};

export default function useWidthProps(dimension) {
  const capitalizedDimension = capitalize(dimension);
  const minDimension = `min${capitalizedDimension}`;
  const maxDimension = `max${capitalizedDimension}`;
  const mobileProp = `sm${capitalizedDimension}`;
  const tabletProp = `md${capitalizedDimension}`;
  const desktopProp = `lg${capitalizedDimension}`;
  const validProps = [dimension, minDimension, mobileProp, tabletProp, maxDimension, desktopProp];

  return (props) => {
    if (!validProps.some((attribute) => props[attribute])) return null;

    return css`
      && {
        box-sizing: border-box;
        ${(props) => props[minDimension] && css`
            ${"min-" + dimension}: ${getValueWithUnit(props[minDimension])};
          `}

        ${(props) => props[maxDimension] && css`
            ${"max-" + dimension}: ${getValueWithUnit(props[maxDimension])};
          `}

        ${(props) => props[dimension] && css`
            ${dimension}: ${getValueWithUnit(props[dimension])};
          `}

          ${(props) => props[mobileProp] && css`
            @media ${breakpoints.mobile} {
              ${dimension}: ${getValueWithUnit(props[mobileProp])};
            }
          `}

        ${(props) => props[tabletProp] && css`
            @media ${breakpoints.tablet} {
              ${dimension}: ${getValueWithUnit(props[tabletProp])};
            }
          `}

        ${(props) => props[desktopProp] && css`
            @media ${breakpoints.desktop} {
              ${dimension}: ${getValueWithUnit(props[desktopProp])};
            }
          `}
      }
    `;
  };
}
