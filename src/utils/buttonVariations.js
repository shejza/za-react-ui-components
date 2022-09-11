// eslint-disable-file no-console
import { css } from "styled-components";

const Backgrounds = ({ colors }) => ({
  text: { default: "unset" },
  outline: { default: "transparent" },
  solid: { ...colors, default: "#3740b8", secondary: "#E8EAFD" },
});

const BorderColor = ({ colors }) => ({
  text: {},
  solid: {},
  outline: { ...colors, default: "#000000" },
});

const FontColor = ({ colors }) => ({
  text: {
    ...colors, default: "#000000",
  },
  solid: {
    default: "#FFFFFF",
    secondary: "#5159C9",
  },
  outline: { ...colors, default: "#1F2029" },
});

export default function useButtonVariations({
  theme,
  kind,
  variant,
}) {
  const colors = FontColor(theme)[kind];
  const backgrounds = Backgrounds(theme)[kind];
  const borders = BorderColor(theme)[kind];
  // const isOutline = kind === 'outline';

  const fontColor = colors[variant] || colors.default;
  const backgroundColor = backgrounds[variant] || backgrounds.default;
  const borderColor = borders[variant] || borders.default;
  // const borderColor = _borderColor ? lighten(0.307, _borderColor) : undefined;

  return css`
    color: ${fontColor};
    background-color: ${backgroundColor};
    ${() => borderColor && `border: 1px ${borderColor} solid;`}
  `;
}
