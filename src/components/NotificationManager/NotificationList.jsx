import React from "react";
import styled from "styled-components";
import Text from "../Text/Text";
import Notification from "./Notification";

const NotificationList = ({ notifications = [], dismiss, sparklesImg, unseenCount }) => {
  return (
    <ContainerOutside>
    <Container>
      <StyledText bgColor="secondary600" color="tertiary0" typography="body/medium" extraBold>
      {unseenCount > 0 && '(' + unseenCount + ')' } Notifications
      </StyledText>
      <NotificationsWrapper>
      {notifications.map((notification) => (
        <Notification key={notification.id} {...notification} dismiss={dismiss}  sparklesImg={sparklesImg}/>
      ))}
      </NotificationsWrapper>
    </Container>
    </ContainerOutside>
  );
};

const StyledText = styled(Text)`
  background-color: ${({ theme }) => theme.colors.secondary600};
  border-radius: 0.5rem 0.5rem 0 0;
  padding: 13px 10px 13px 28px
`;

const Container = styled.div`
  width: 417px;
`;

const NotificationsWrapper = styled.div`
  max-height: 365px;
  overflow-y: auto;
  overscroll-behavior: contain;

`;
const ContainerOutside = styled.div`
  position: absolute;
  left: -377px;
  top: 40px;
  border-radius: 0.5rem;
  border-left: 1px solid #d9d9d9;
  border-right: 1px solid #d9d9d9;
  background-color: ${({ theme }) => theme.colors.tertiary50};
    &::after {
      content: '';
      position: absolute;
      top: -2.2px;
      right: 18px;
      background: ${({ theme }) => theme.colors.secondary600};
      width: 20px;
      height: 12.2px;
      clip-path: polygon(6% 0%,50% 84%,0 100%);
      transform: rotate(137deg);
      border-radius: 0 0 0 0.25em;
    }
`;


export default NotificationList;
