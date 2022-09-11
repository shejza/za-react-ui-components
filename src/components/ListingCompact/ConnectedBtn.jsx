import React from "react";
import styled from "styled-components";
import IconSvg from "../IconSvg/IconSvg";
import Box from "../Box/Box";
import Button from "../Button/Button";
import { breakpoints } from "../../constants";

const connectedButtons = [
  {
    type: "discord_app",
    name: "Discord",
    background: "#5865F2",
    icon: "discord2",
    color: "white",
  },
  {
    type: "twitter_app",
    name: "Twitter",
    background: "#00ACEE",
    icon: "twitter",
    color: "white",
  },
  {
    type: "discourse_app",
    name: "Discourse",
    background: "linear-gradient(90.24deg, #A1C7E3 8.72%, #A1E3C3 95.98%)",
    icon: "discourse",
    color: "secondary800",
  },
];
const ConnectedBtn = ({ onConnect, typeConnected }) => {
  const connectedButton = connectedButtons.find((cb) => cb.type === typeConnected);
  return (
    <>
      <StyledBoxChecked>
        <Check onClick={onConnect} color={connectedButton.color} data-type={connectedButton.type} background={connectedButton.background}>
          <IconSvg width="12px" icon={connectedButton.icon} color={connectedButton.color} />
          Connect {connectedButton.name}
          <IconSvg icon="chain" width="12px" color={connectedButton.color} />
        </Check>
      </StyledBoxChecked>
    </>
  );
};

const Check = styled(Button)`
  padding: 4px 8px;
  border-radius: 50px;
  display: flex;
  align-items: center;
  gap: 6px;
  height: 29px;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 21px;
  width: 177px;
  height: 44px;
  justify-self: end;
  margin-left: auto;
  background: ${({ background }) => background && background};
  @media ${breakpoints.mobile} {
    width: 100%;
    border-radius: 0px 0px 8px 8px;
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
    height: 72px;
    svg {
      width: 16px;
    }
  }
`;

const StyledBoxChecked = styled(Box)`
  white-space: nowrap;
  margin-left: auto;
  margin-right: 28px;
  @media ${breakpoints.mobile} {
    width: 100%;
  }
`;

export default ConnectedBtn;
