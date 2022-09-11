import { createGlobalStyle } from "styled-components";
import OutfitSemiBold from "./fonts/Outfit-SemiBold.ttf";
import HeeboBold from "./fonts/Heebo-Bold.ttf";  
import ProximaNovaBold from "./fonts/ProximaNova/ProximaNova-Bold.otf"; 
import ProximaNovaSemiBold from "./fonts/ProximaNova/ProximaNova-Semibold.otf"; 
import ProximaNovaRegular from "./fonts/ProximaNova/ProximaNova-Regular.otf";

export default createGlobalStyle`
  @font-face {
    font-family: Proxima Nova;
    src: url(${ProximaNovaBold}) format('truetype');
    font-weight: 700;
  }

  @font-face {
    font-family: Proxima Nova;
    src: url(${ProximaNovaSemiBold}) format('truetype');
    font-weight: 600;
  }

  @font-face {
    font-family: Proxima Nova;
    src: url(${ProximaNovaRegular}) format('truetype');
    font-weight: 400;
  }

  @font-face {
    font-family: Outfit;
    src: url(${OutfitSemiBold}) format('truetype');
    font-weight: 600;
  } 

  @font-face {
    font-family: Heebo;
    src: url(${HeeboBold}) format('truetype');
    font-weight: bold;
  } 


  body {
    font-family: Proxima Nova;
  }
`;
