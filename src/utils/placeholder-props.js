export default function placeholderProps({ theme, pColor = "secondary300", pSize = "14px" }) {
  const color = theme.colors[pColor] || pColor;
  return `
    &::placeholder {
      color: ${color};
      font-size: ${pSize};
    }
  `;
}
