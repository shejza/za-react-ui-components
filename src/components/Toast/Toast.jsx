import React, { useEffect } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import Box from "../Box/Box";
import IconSvg from "../IconSvg/IconSvg";
import { positionProp } from "./common";
import Link  from "../Link/Link";
import { breakpoints } from "../../constants";

const COLORS_BY_TYPE = {
  success: "#33343D",
  danger: "#33343D",
  info: "#33343D",
  warning: "#33343D",
  celebratory: "#33343D",
};

const ICONS_BY_TYPE = {
  success: "success-check",
  danger: "remove-danger",
  celebratory: "success-check",
};

const Toast = ({ id, position, content, onClick, type, dismissTime, btnText, btnDetailsLink, btnBgColor, colorBtn }) => {
  const icon = ICONS_BY_TYPE[type];
  const _onClick = () => onClick(id);


  useEffect(() => {
    const interval = setInterval(() => {
      if (dismissTime) {
        onClick(id);
      }
    }, dismissTime);

    return () => {
      clearInterval(interval);
    };
  }, [dismissTime, id, onClick]);

  return (
    <Container flex position={position} $type={type} justifyContent="space-between">
      {icon && <IconSvg width="21px" icon= {icon} />}
      <Message>{content}</Message>
      {btnText && <StyledLink btnBgColor={btnBgColor} color={colorBtn} href={'/' + btnDetailsLink}>{btnText}</StyledLink>}
      {type ==='celebratory' && <Sparkles icon="sparkles-toast"/>}
      <Button  onClick={_onClick}>
        <IconSvg width="12px" icon="x"  color="tertiary0"/>
      </Button>
    </Container>
  );
};

const Sparkles = styled(IconSvg)`
  width: 260px;
  position: absolute;
  right: -3px;
  height: 76px;
  top: 0;
`;

const StyledLink = styled(Link)`
  background: ${({ btnBgColor }) => btnBgColor};
  border-radius: 40px;
  color:  ${({ color }) => color};
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 14px;
  z-index: 9;
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  font-size: 14px;
  line-height: 22px;
`;

const Message = styled.div`
  flex: 1;
  margin: 0;
  text-align: left;
  font-size: 18px;
  line-height: 21px;
  color: ${({ theme }) => theme.colors["tertiary0"]};

  @media ${breakpoints.mobile} {
    font-size: 14px;
  }
`;

const Container = styled(Box)`
  background-color: ${(props) => COLORS_BY_TYPE[props.$type] || props.$type};
  position: relative;
  pointer-events: auto;
  margin: 0 0 6px;
  margin-bottom: 15px;
  box-shadow: 0px 25px 15px rgba(0, 0, 0, 0.03);
  border-radius: 40px;
  padding: 24px 32px;
  display: flex;
  align-items: center;
  gap: 12px;

  ${positionProp}

  @media ${breakpoints.mobile} {
    padding: 1rem;
    left: 0;
    right: 0;
    transform: translate(0, 0);
  }

  &:hover {
    box-shadow: 0 0 12px #fff;
    cursor: pointer;
  }
`;

const Button = styled.button`
  z-index: 1;
  outline: none;
  border: none;
  line-height: 1;
  font-size: 16px;
  cursor: pointer;
  background:#33343D;
  border: 1px solid #464967;
  box-sizing: border-box;
  border-radius: 50px;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

Toast.propTypes = {
  backgroundColor: PropTypes.string,
  content: PropTypes.string,
  onClick: PropTypes.func,
  position: PropTypes.string,
};

Toast.defaultProps = {
  btnBgColor: "#5FB974",
  colorBtn: "#fff"
};

export default Toast;
