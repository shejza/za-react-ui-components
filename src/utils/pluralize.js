export default (text, number) => {
  if (number !== 1) {
    return text + "s";
  }
  return text;
};