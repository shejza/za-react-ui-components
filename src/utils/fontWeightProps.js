// eslint-disable-file no-console
import { css } from "styled-components";

export default function fontWeigthProps({ theme, regular, semiBold, bold, extraBold }) {
  return css`
    ${regular && `font-weight: ${theme.fontWeights.regular};`}

    ${semiBold && `font-weight: ${theme.fontWeights.semiBold};`}

    ${bold && `font-weight: ${theme.fontWeights.bold};`}

    ${extraBold && `font-weight: ${theme.fontWeights.extraBold};`}

  `;
}
