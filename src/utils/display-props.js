export default function useDisplayProps({ inline, inlineBlock, flex }) {
  let display = "";

  if (inline) display = "inline";
  if (inlineBlock) display = "inline-block";
  if (flex) display = "flex";

  if (display) return `display: ${display};`;
}
