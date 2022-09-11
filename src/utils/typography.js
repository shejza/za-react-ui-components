/* eslint-disable max-len */
// eslint-disable-file no-console
import { css } from "styled-components";

export const FONT_CONFIG = {
  //Heading
  "heading/x-large": `font-family: Outfit; font-size: 34px; font-weight: 600; line-height: 42px; letter-spacing: 0em;`,
  "heading/large": `font-family: Outfit; font-size: 28px; font-weight: 600; line-height: 36px; letter-spacing: 0em;`,
  "heading/medium": `font-family: Outfit; font-size: 24px; font-weight: 600; line-height: 30px; letter-spacing: 0em;`,
  "heading/small": `font-family: Outfit; font-size: 20px; font-weight: 600; line-height: 24px; letter-spacing: 0em;`,
  //Body
  "body/x-large": `font-family: Proxima Nova; font-size: 24px; line-height: 34px; letter-spacing: 0em;`,
  "body/large": `font-family: Proxima Nova; font-size: 18px; line-height: 26px; letter-spacing: 0em;`,
  "body/medium": `font-family: Proxima Nova; font-size: 16px; line-height: 24px; letter-spacing: 0em;`,
  "body/small": `font-family: Proxima Nova; font-size: 14px; line-height: 21px; letter-spacing: 0em;`,
  //Others
  "other/buttons": `font-family: Proxima Nova; font-size: 14px; font-weight: 600; line-height: 22px; letter-spacing: 0em;`,
  "other/chips": `font-family: Proxima Nova; font-size: 14px; font-weight: 400; line-height: 16px; letter-spacing: 0em;`,
  "other/links": `font-family: Proxima Nova; font-size: 14px; font-weight: 600; line-height: 16px; letter-spacing: 0em;`,
};

export default function useTypography({ typography }) {
  return typography ? FONT_CONFIG[typography.toLowerCase()] : null;
}
