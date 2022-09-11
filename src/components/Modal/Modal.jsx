import React from "react";
import styled from "styled-components";
import propTypes from "prop-types";
import { RemoveScroll } from "react-remove-scroll";
import IconSvg from "../IconSvg/IconSvg";
import Button from "../Button/Button";
import useSpacingProps from "../../utils/spacing-props";
import { roundCorners, spacings, fontWeights, theme, breakpoints } from "../../constants";
import { leaf, fullScreen, buttonCircle } from "../properties";
import Box from "../Box/Box";
import Text from "../Text/Text";

const HeaderContent = ({ text, onClick }) => (
  <StyledHeader flex direction="row" alignItems="center" pointer onClick={onClick}>
    <IconSvg icon="arrow-left" width="18px" color="secondary500" spacing="mr-2"></IconSvg>
    <Text size="15px" semiBold>
      {text}
    </Text>
  </StyledHeader>
);

const preventClickPropagation = (e) => {
  e.stopPropagation();
};

const Modal = styled(
  ({
    children,
    className,
    open,
    onClose,
    footerContent,
    borderRadius,
    contentSpacing,
    contentRef,
    overflowY,
    bgColor,
    backgroundCloses,
    maxWidth,
    leaf,
    marginTop,
    fullScreen,
    buttonCircle,
    paddingBody,
    headerLogo,
    onLogoClick,
    contentHeight,
    backText,
    hideX,
    borderRadiusX,
    ...props
  }) => {
    return (
      <RemoveScroll enabled={open}>
        <div className={className} onClick={backgroundCloses ? onClose : null}>
          <Body
            leaf={leaf}
            maxWidth={maxWidth}
            bgColor={bgColor}
            open={open}
            borderRadius={borderRadius}
            onClick={preventClickPropagation}
            marginTop={marginTop}
            fullScreen={fullScreen}
          >
            <Content
              ref={contentRef}
              paddingBody={paddingBody}
              spacing={contentSpacing}
              overflowY={overflowY}
              height={contentHeight}
              {...props}
            >
              <HeaderLogo>
                {backText && <HeaderContent text={backText} onClick={onClose} />}
                {headerLogo && (
                  <IconSvg pointer icon="thrivecoin-logo" color="white" width="224px" onClick={onLogoClick} />
                )}
                {!hideX && onClose && (
                  <CloseButton
                    onClick={onClose}
                    buttonCircle={buttonCircle}
                    kind="text"
                    variant="secondary500"
                    spacing="m-0 p-2"
                  >
                    <IconSvg width="18px" icon="x" />
                  </CloseButton>
                )}
              </HeaderLogo>

              {children}
            </Content>
            {footerContent && <ModalFooter>{footerContent}</ModalFooter>}
          </Body>
        </div>
      </RemoveScroll>
    );
  }
)`
  background-color: rgba(26, 26, 26, 0.6);
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0px;
  z-index: 1000;
  display: flex;
  align-items: ${({ alignItems }) => alignItems || "center"};
  justify-content: center;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.3s;
  ${({ positionY }) => `transform: translateY(${MODAL_POSITIONS[positionY] || positionY}) !important`};

  @media ${breakpoints.mobile} {
    align-items: flex-end;
  }

  ${({ open }) =>
    open &&
    `
    opacity: 1;
    pointer-events: all;
  `}
`;

const MODAL_POSITIONS = {
  initial: "0",
  header: "-270px",
};

const HeaderLogo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Body = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  overflow-x: hidden;
  overflow-y: auto;
  overscroll-behavior: none;
  background-color: ${({ bgColor }) => bgColor};
  background-size: auto;
  background-position: left top;
  background-repeat: no-repeat;
  max-width: ${({ maxWidth }) => maxWidth};
  max-height: 98%;
  width: 90%;
  border-radius: ${({ borderRadius }) => borderRadius || roundCorners[3]};
  transition: all 0.4s;
  box-sizing: border-box;
  transform: translateY(-20px);
  margin-top: ${({ marginTop }) => marginTop};

  @media ${breakpoints.mobile} {
    width: 100%;
    transform: translateY(0);
  }

  ${useSpacingProps}
  ${leaf}
  ${fullScreen}
`;

const CloseButton = styled(Button)`
  cursor: pointer;
  z-index: 10;
  position: absolute;
  top: 28px;
  right: 28px;
  margin-left: auto !important;
  border: 1px solid ${({ theme }) => theme.colors.secondary50};

  @media ${breakpoints.mobile} {
    top: 1rem;
    right: 1rem;

    ${IconSvg}{
      width: 16px;
    }
  }

  ${buttonCircle}
  border-radius:  ${({ borderRadiusX }) => borderRadiusX};
`;

const Content = styled(
  React.forwardRef(({ children, height, ...props }, ref) => (
    <div ref={ref} {...props}>
      {children}
    </div>
  ))
)`
  position: relative;
  display: flex;
  flex-direction: column;
  overflow-x: hidden;
  overflow-y: auto;
  overscroll-behavior: none;
  background-size: auto;
  background-position: left top;
  background-repeat: no-repeat;
  padding: ${({ paddingBody }) => paddingBody};

  ${useSpacingProps};
  flex-shrink: 1;
  overflow-y: ${({ overflowY }) => overflowY};
  overflow-x: hidden;
  height: ${({ height }) => height || "auto"};
`;

const ModalFooter = styled.div`
  position: sticky;
  bottom: 0;
  width: 100%;
  background-color: #ffffff;
`;

const StyledHeader = styled(Box)`
  padding: 0 2rem 1.5rem;
  width: 100%;
  border-bottom: 1px solid ${theme.colors.tertiary200};

  @media ${breakpoints.mobile} {
    padding: 0 1rem 1rem;
  }
`;

Modal.propTypes = {
  open: propTypes.bool,
  onClose: propTypes.func,
  title: propTypes.string,
  children: propTypes.node,
  spacing: propTypes.string,
  contentSpacing: propTypes.string,
  maxWidth: propTypes.string,
  onClickBack: propTypes.func,
};

Modal.defaultProps = {
  overflowY: "auto",
  bgColor: "#FFFFFF",
  backgroundCloses: false,
  maxWidth: "760px",
  positionY: "initial",
  paddingBody: "2.5rem",
  headerLogo: false,
  borderRadiusX: "8px",
};

const ModalFooterButton = styled(({ className, onClick, children }) => (
  <button className={className} onClick={onClick} type="button">
    {children}
  </button>
))`
  font-size: inherit;
  width: 100%;
  height: 100%;
  border: 0;
  font-weight: ${fontWeights.semiBold};
  border-top: 1px solid #cacac7;
  color: #2f80ed;
  background-color: #ffffff;
  padding: ${spacings[5]}em ${spacings[3]}em;
  cursor: pointer;
  transition: all 200ms ease-in-out;
  &:hover {
    filter: brightness(95%);
  }
`;

ModalFooterButton.propTypes = {
  onClick: propTypes.func,
  children: propTypes.node,
};

Modal.Body = Body;

export { ModalFooterButton };

/** @component */
export default Modal;
