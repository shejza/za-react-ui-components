export const sizes = {
  xs: "0px",
  xsMax: "480px",
  sm: "481px",
  smMax: "768px",
  md: "769px",
  mdMax: "1024px",
  lg: "1025px",
  lgMax: "1439px",
  xl: "1440px",
};

export const breakpoints = {
  mobile: `(min-width: 0px) and (max-width: 1002px)`,
  tablet: `(min-width: 1003px) and (max-width: 1339px)`,
  desktop: `(min-width: 1340px)`
};

export const colors = {
  white: "#ffffff",
  gray100: "#32323C",
  green100: "#54C1A1",  
  //Primary
  primary700: "#5FB974",
  primary600: "#58C7A9",
  primary500: "#636CE5",
  primary400: "#636CE5",
  primary300: "#BABFFF",
  primary200: "#BABFFF",
  primary100: "#D9DCFF",
  primary50: "#F0F1FF",
  //Secondary
  secondary800: "#1C2942",
  secondary700: "#909090",
  secondary650: "#8DCF9F",
  secondary600: "#81C394",
  secondary550: "#9E9E9E",
  secondary500: "#33343D",
  secondary450: "#46475C",
  secondary400: "#464967",
  secondary300: "#818399",
  secondary200: "#C3C4D4",
  secondary100: "#E4E4ED",
  secondary70: "#EC7D7D",
  secondary50: "#EDEEF7",
  //Tertiary
  tertiary950: "#59C2BC",
  tertiary900: "#EEAB00",
  tertiary850: "#5865F2",
  tertiary800: "#00ACEE",
  tertiary750: "#F3F6F3",
  tertiary700: "#f7f2eb",
  tertiary600: "#3D6644",
  tertiary500: "#707070",
  tertiary400: "#A3A3A3",
  tertiary380: "#DEE2DE",
  tertiary370: "#D6D6D6",
  tertiary350: "#BDBDBD",
  tertiary300: "#D9D9D9",
  tertiary200: "#EDEDED",
  tertiary170: "#F8F8F8",
  tertiary150: "#F2ECE2",
  tertiary100: "#F5F5F5",
  tertiary50: "#FAFAFA",
  tertiary0: "#FFFFFF",
  //Accent
  accent750: "#DD2E2E",
  accent700: "#287A64",
  accent650: "#B2654E",
  accent600: "#FBEFEB",
  accent570: "#C9C9C9",
  accent500: "#E49883",
  accent550: "#C8971B",
  accent400: "#E5957E",
  accent450: "#C67B65",
  accent100: "#F5E3DF",
  accent2500: "#E9BB46",
  //Success
  success600: "#C1E5CB",
  success500: "#55AC63",
  success100: "#D5F0DA",
  success150: "#41A78C",
  //Fail
  destructive500: "#C52D2D",
  destructive100: "#F7D2D2",
  destructive300: "#E06363",
};

export const roundCorners = {
  1: "8px",
  2: "12px",
  3: "24px",
};

export const lineHeight = "1.5em";

export const fontSizes = {
  default: "inherit",
  inherit: "inherit",
  header: "1.5em",
  bodyLarge: "1.125rem",
  body: "1rem",
  bodySmall: "0.92rem",
  small: "0.85rem",
  "2.5": "2.5rem",
  h1: "2.875rem",
  h2: "2.3125rem",
  h3: "2rem",
  h4: "1.75rem",
  h5: "1.125rem",
  h6: "1rem",
};

export const fontWeights = {
  regular: "400",
  semiBold: "500",
  bold: "600",
  extraBold: "700",
};

export const fontFamily = {
  outfit: "Outfit",
  heebo: "Heebo",
  proximaNova: "Proxima Nova"
};

// Values to be used as REMs
export const spacings = {
  0: 0,
  1: 0.25,
  2: 0.5,
  3: 0.75,
  4: 1,
  5: 1.5,
  6: 2,
  7: 3,
  8: 3.75,
  9: 6,
  a: "auto"
};

export const controlsPadding = {
  sm: "1em 18px"
};

export const theme = {
  colors,
  fontSizes,
  fontWeights,
  breakpoints
};

export const typeSocials = ["snapshot_app", "discord_app", "twitter_app", "github_app", "discourse_app"];