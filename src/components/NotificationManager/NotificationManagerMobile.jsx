import React from "react";
import styled from "styled-components";
import Modal from "../Modal/Modal";
import IconSvg from "../IconSvg/IconSvg";
import Text from "../Text/Text";
import Box from "../Box/Box";
import { theme } from "../../constants";
import NotificationMobile from "./NotificationMobile";

const NotificationManagerMobile = ({
  hideModal,
  afterClose,
  notifications = [],
  dismiss,
  sparklesImg,
  isActive,
  setActive,
  ...props
}) => {
  const closeModal = () => {
    setActive(!isActive)
  };

  return (
    <StyledModal
      open
      onClose={hideModal}
      maxWidth={true}
      buttonCircle
      fullScreen={true}
      hideX={true}
      sm-spacing="px-0 pt-0"
      contentHeight={"100%"}
      borderRadius="0 !important"
    >
      <StyledHeader
        flex
        direction="row"
        alignItems="center"
        onClick={closeModal}
        pointer
      >
        <IconSvg
          icon="left-long"
          width="25.58px"
          height="24px"
          color="secondary500"
          spacing="mr-2"
        ></IconSvg>
        <Text size="16px" lineHeight="24px" color="secondary500" semiBold>
          Back to community
        </Text>
      </StyledHeader>

      <Text
        spacing="px-4 py-5"
        size="28px"
        lineHeight="36px"
        color="secondary500"
        fontFamily="Outfit"
        semiBold
      >
        Notifications
      </Text>

      <NotificationsWrapperList>

      {notifications.map((notification) => (
        <NotificationMobile key={notification.id} {...notification} dismiss={dismiss} sparklesImg={sparklesImg} />
      ))}
      </NotificationsWrapperList>
    </StyledModal>
  );
};

const StyledModal = styled(Modal)`
  margin-top: 0;
`;

const StyledHeader = styled(Box)`
  padding: 17px 16px;
  width: 100%;
  border-bottom: 1px solid ${theme.colors.tertiary200};
`;

const NotificationsWrapperList = styled.div`
  position: relative;
  border-top: 1px solid ${theme.colors.tertiary200};
`;
export default NotificationManagerMobile;
