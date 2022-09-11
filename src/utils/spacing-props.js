// eslint-disable-file no-console
import { spacings, sizes, breakpoints } from "../constants";

const parseSpacingName = (spacingString) => {
  const isNegative = spacingString.startsWith("-");

  // If the spacing string is negative, remove the - and continue as normal
  const alwaysPositiveSpacingString = isNegative ? spacingString.substring(1) : spacingString;

  const spacingStringCharacters = alwaysPositiveSpacingString.split("");
  const spacingStringSegments = alwaysPositiveSpacingString.split("-");
  const objectToReturn = {
    property: "",
    direction: "",
    amount: "",
    breakpoint: "",
  };

  // find property
  switch (spacingStringCharacters[0]) {
    case "m":
      objectToReturn.property = "margin";
      break;
    case "p":
      objectToReturn.property = "padding";
      break;
    default:
      console.warn('Spacing prop property doesnt match possible cases "m, p"');
      return null;
  }

  // find direction
  switch (spacingStringCharacters[1]) {
    case "-":
      objectToReturn.direction = "all";
      break;
    case "x":
      objectToReturn.direction = "x";
      break;
    case "y":
      objectToReturn.direction = "y";
      break;
    case "t":
      objectToReturn.direction = "top";
      break;
    case "r":
      objectToReturn.direction = "right";
      break;
    case "b":
      objectToReturn.direction = "bottom";
      break;
    case "l":
      objectToReturn.direction = "left";
      break;
    default:
      console.warn(`Spacing prop direction "${alwaysPositiveSpacingString}" doesnt match possible cases`);
      return null;
  }

  // find breakpoint
  if (spacingStringSegments.length > 2 && sizes[spacingStringSegments[1]]) {
    objectToReturn.breakpoint = sizes[spacingStringSegments[1]];
  } else {
    objectToReturn.breakpoint = null;
  }

  // find ammount
  const amountString = spacingStringSegments[2] || spacingStringSegments[1];
  const amountStringSegments = amountString.split("+");

  const segmentAmounts = amountStringSegments.map(convertToAmounts);
  if (segmentAmounts.includes("auto")) {
    objectToReturn.amount = "auto";
  } else {
    const amount = amountStringSegments.reduce(sumIntegerSpacings, 0) + "rem";
    objectToReturn.amount = isNegative ? `-${amount}` : amount;
  }

  return objectToReturn;
};

const convertToAmounts = (segment) => {
  if (spacings[segment] !== undefined) {
    return spacings[segment];
  }
  console.error(`Spacing name "${segment}" from prop not found in global spacings`);
  return 0;
};

const sumIntegerSpacings = (accumulator, currentValue) => {
  return accumulator + spacings[currentValue];
};

const makeStyleString = (parsedSpacing) => {
  if (!parsedSpacing) return "";

  let stylesString = "";

  const { direction, property, amount, breakpoint } = parsedSpacing;

  if (direction === "all") {
    stylesString = `${property}: ${amount} !important;`;
  } else if (direction === "y") {
    stylesString = `${property}-top: ${amount} !important;
                    ${property}-bottom: ${amount} !important;`;
  } else if (direction === "x") {
    stylesString = `${property}-left: ${amount} !important;
                    ${property}-right: ${amount} !important;`;
  } else {
    stylesString = `${property}-${direction}: ${amount} !important;`;
  }

  if (breakpoint) {
    return `@media(min-width: ${breakpoint}){${stylesString}}`;
  }

  return stylesString;
};

export default function (props) {
  const string = [
    generateStyles(props["spacing"]),
    generateStyles(props["lg-spacing"], breakpoints.desktop),
    generateStyles(props["md-spacing"], breakpoints.tablet),
    generateStyles(props["sm-spacing"], breakpoints.mobile),
  ]
    .filter(Boolean)
    .join(" ");

  return string;
}

function generateStyles(spacing, mediaQuery) {
  if (!spacing || typeof spacing !== "string") return null;

  const styles = spacing
    .trim()
    .split(" ")
    .filter(Boolean)
    .map((value) => {
      const parsedSpacing = parseSpacingName(value);
      return makeStyleString(parsedSpacing);
    }).join(" ");

  return mediaQuery ? `@media ${mediaQuery}{ ${styles} }` : styles;
}
