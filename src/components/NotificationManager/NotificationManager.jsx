import React, { useRef, useState } from "react";
import styled from "styled-components";
import Box from "../Box/Box";
import useClickOutsideCallback from "../hooks/useClickOutsideCallback";
import IconSvg from "../IconSvg/IconSvg";
import NotificationList from "./NotificationList";
import NotificationEmpty from "./NotificationEmpty";
import { useMedias } from "../hooks/useMedia";
import NotificationManagerMobile from "./NotificationManagerMobile";

const NotificationManager = ({ notifications, dismiss, onClick, sparklesImg }) => {
  const ref = useRef();
  const { isMobile } = useMedias();
  const [isActive, setActive] = useState(false);
  const unseenCount = notifications.filter(({ seen }) => !seen).length;
  const noNotifications = notifications.length === 0;
  const bgColor = unseenCount > 0 ? "destructive100" : "rgba(59, 82, 119, 0.1)";

  const toggle = () => {
    setActive((active) => !active);
  };

  const _dismiss = (event) => {
    dismiss(event);
    toggle();
  };

  const _onClick = (event) => {
    onClick(event);
    toggle();
  };

  const props = {
    notifications,
    dismiss: _dismiss,
    onClick: _onClick,
  };

  useClickOutsideCallback(ref, () => setActive(false));

  return (
    <StyledBox ref={ref} bgColor={bgColor}>
      {unseenCount > 0 && <UnseenCount>{unseenCount}</UnseenCount>}
      <IconSvg color="secondary500" width="20px" icon="bell" onClick={toggle} />
      {isActive && (
        <>
          {isMobile && <NotificationManagerMobile isActive={isActive} setActive={setActive} sparklesImg={sparklesImg} {...props} />}

          {!isMobile && noNotifications ? <NotificationEmpty /> : <NotificationList unseenCount={unseenCount} sparklesImg={sparklesImg} {...props} />}
        </>
      )}
    </StyledBox>
  );
};

const UnseenCount = styled.div`
  color: white;
  background-color: ${({ theme }) => theme.colors.destructive300};
  display: flex;
  align-items: baseline;
  justify-content: center;
  width: 23px;
  height: 23px;
  position: absolute;
  left: 20px;
  top: -11px;
  border-radius: 1rem;
  font-style: normal;
  font-weight: 600;
  font-size: 15px;
  line-height: 24px;
`;

const StyledBox = styled(Box)`
  position: relative;
  display: flex;
  justify-content: center;
  width: 32px;
  height: 32px;
  cursor: pointer;

  border-radius: 50px;
`;

NotificationManager.defaultProps = {
  notifications: [],
};

export default NotificationManager;
