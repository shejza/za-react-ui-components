export default function inputStates({ theme, valid, invalid, showValidation, disabled }) {
  let BorderColor = theme.colors.primary500;
  BorderColor = valid ? theme.colors.success500 : BorderColor;
  BorderColor = invalid ? theme.colors.destructive500 : BorderColor;
  const hover = disabled ? null : `border: 1px solid ${BorderColor}`;

  let stateColor = valid ? theme.colors.success500 : null;
  stateColor = invalid ? theme.colors.destructive500 : stateColor;

  return `
    outline: none;

    &:hover {
      ${hover}
    }

    &:focus {
      {border: 2px solid ${BorderColor};}
    }

    ${stateColor && showValidation && `border: 1px solid ${stateColor};`}

    &&{
      ${({ invalid, showValidation }) => invalid && showValidation && `
        background: rgba(231, 91, 91, 0.06);
        ${({ theme }) => `border: 2px solid ${theme.colors.destructive500};`}
      `}

    }


  `;
}
