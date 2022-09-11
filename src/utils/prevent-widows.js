const preventWidows = (string) => {
  const minWords = 4;
  const words = string.split(" ");

  // If the string has less then minWords return it unchanged
  if (words.length < minWords) {
    return string;
  }

  // Replace the space between two last words with \u00A0 (&nbsp;)
  const newString = words.map((word, i) => (
    i === words.length - 2 ? word + "\u00A0" : word + " "
  )).join("");
  return newString;
};

export default preventWidows;
