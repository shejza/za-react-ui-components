import React, { useRef, useState } from "react";
import styled from "styled-components";
import Icon from "../Icon/Icon";
import Text from "../Text/Text";
import ImagePlaceholder from "../../assets/placeholders/photo.png";
import useClickOutsideCallback from "../hooks/useClickOutsideCallback";
import Box from "../Box/Box";
import Button from "../Button/Button";

const Menu = ({ children, active, onToggle, icon, ...props }) => {
  const ref = useRef();
  const [isActive, setActive] = useState(active);
  const toggle = () => {
    setActive(!isActive);
    onToggle && onToggle(!isActive);
  };
  const close = () => setActive(false);

  return (
    <MenuWrapper>
      {!icon &&
      <Button cursor={"pointer"} onClick={toggle} fontWeight="bold">Open Menu</Button>
}
     {icon && <StyledIcon  onClick={toggle} icon={icon}/>}
      <Container opacityContainer={isActive ? "1" : "0"}
        transformContainer={isActive ? "none" : " scale(0.75, 0.5625)"}
        transitionContainer={isActive ? "opacity 287ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, transform 191ms cubic-bezier(0.4, 0, 0.2, 1) 0ms" : "opacity 251ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, transform 167ms cubic-bezier(0.4, 0, 0.2, 1) 84ms"}
        visibilityContainer={isActive ? "visible" : "hidden"}
      >
        <ul>
          <li>Item 1</li>
          <li>Item 2</li>
          <li>Item 3</li>
        </ul>
      </Container>

    </MenuWrapper>
  );
};

const MenuWrapper = styled.div`
  position: relative;
`;

const Container = styled.div`
  background-color: rgb(255, 255, 255);
  color: rgba(76, 78, 100, 0.87);
  transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  border-radius: 10px;
  box-shadow: rgb(76 78 100 / 20%) 0px 5px 5px -3px, rgb(76 78 100 / 14%) 0px 8px 10px 1px, rgb(76 78 100 / 12%) 0px 3px 14px 2px;
  background-image: none;
  position: absolute;
  overflow: hidden auto;
  min-width: 16px;
  min-height: 90px;
  max-width: calc(100% - 32px);
  max-height: 200px;
  outline: 0px;
  border-radius: 5px;
  transform-origin: 0px 0px;
  box-shadow: rgb(76 78 100 / 20%) 0px 5px 5px -3px, rgb(76 78 100 / 14%) 0px 8px 10px 1px, rgb(76 78 100 / 12%) 0px 3px 14px 2px;
  ${({ opacityContainer }) => opacityContainer && `opacity:  ${opacityContainer}`};
${({ transformContainer }) => transformContainer && `transform:  ${transformContainer}`};
${({ transitionContainer }) => transitionContainer && `transition:  ${transitionContainer}`};
 ${({ visibilityContainer }) => visibilityContainer && `visibility:  ${visibilityContainer}`};

 ul {
  list-style: none;
    margin: 0px;
    padding: 8px 0px;
    position: relative;
    outline: 0px;

    li {
      -webkit-tap-highlight-color: transparent;
      background-color: transparent;
      outline: 0px;
      border: 0px;
      margin: 0px;
      border-radius: 0px;
      cursor: pointer;
      user-select: none;
      vertical-align: middle;
      appearance: none;
      font-family: Inter, sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
      font-weight: 400;
      font-size: 1rem;
      line-height: 1.5;
      letter-spacing: 0.15px;
      color: rgba(76, 78, 100, 0.87);
      display: flex;
      -webkit-box-pack: start;
      justify-content: flex-start;
      -webkit-box-align: center;
      align-items: center;
      position: relative;
      text-decoration: none;
      min-height: 48px;
      padding: 6px 16px;
      box-sizing: border-box;
      white-space: nowrap;
    }
 }
`;

const StyledIcon = styled(Icon)`
  cursor: pointer;
  border-radius: 50%;
  color: rgba(76, 78, 100, 0.54);
  transition: background-color 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  &:hover{
    background-color: rgba(76, 78, 100, 0.05);
  }
`;



Menu.defaultProps = {};


export default Menu;
