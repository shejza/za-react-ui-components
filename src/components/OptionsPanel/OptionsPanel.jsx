import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import useClickOutsideCallback from "../hooks/useClickOutsideCallback";
import IconSvg from "../IconSvg/IconSvg";

const OptionsPanel = ({ 
  width,
  open,
  children,
  right,
  left,
  top,
  bottom,
  minPanelWidth,
  padding = "1rem",
  icon = "more-vertical",
  onToggle,
}) => {
  const ref = useRef();
  const [isOpen, setOpen] = useState(open);
  const toggle = (e) => {
    if(onToggle) {
      onToggle(e);
    } else {
      setOpen(!isOpen);
    }
  };
  const close = () => setOpen(false);

  useClickOutsideCallback(ref, close);

  useEffect(() => {
    setOpen(open);
  }, [open]);

  return (
    <Container ref={ref}>
      <IconSvg width={width} icon={icon} onClick={toggle} pointer />
      {isOpen && (
        <Panel
          $right={right}
          $left={left}
          $top={top}
          $bottom={bottom}
          $padding={padding}
          $minPanelWidth={minPanelWidth}>
          {children}
        </Panel>
      )}
    </Container>
  );
};

const Container = styled.div`
  position: relative;
`;

const Panel = styled.div`
  background: ${({ theme }) => theme.colors.tertiary0};
  border: 1px solid ${({ theme }) => theme.colors.secondary100};
  box-sizing: border-box;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.12);
  border-radius: 8px;
  position: absolute;
  overflow: hidden;
  z-index: 10;
  width: max-content;
  ${({ $padding }) => $padding && `padding: ${$padding};`}
  ${({ $right }) => $right && `right: ${$right};`}
  ${({ $left }) => $left && `left: ${$left};`}
  ${({ $top }) => $top && `top: ${$top};`}
  ${({ $bottom }) => $bottom && `bottom: ${$bottom};`}
  ${({ $minPanelWidth }) => $minPanelWidth && `min-width: ${$minPanelWidth};`}
`;

export default OptionsPanel;
