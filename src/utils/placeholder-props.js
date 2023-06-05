export default function placeholderProps({ theme, pColor = "01Primary400", pSize = "16px" }) {
  const color = theme.colors[pColor] || pColor;
  return `
    &::placeholder {
      color: ${color};
      font-size: ${pSize};
    }
  `;
}
