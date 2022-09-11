import React from "react";
import styled from "styled-components";
import Text from "../Text/Text";
import NoNotificationsImg from "../../assets/no-notifications.svg";

const NotificationEmpty = () => {
  return (
    <Container>
      <StyledText color="tertiary0" typography="body/medium" extraBold>
         Notifications
      </StyledText>
      <ContainerInside>
      <Text typography="body/medium" color="secondary400">No notifications for now</Text>
      <StyledImg src={NoNotificationsImg} alt="NoNotificationsImg"/>
      </ContainerInside>
    </Container>
  );
};



const Container = styled.div`
  height: 399px;
  position: absolute;
  left: -376px;
  top: 40px;
  width: 417px;
  border-radius: 0 0 8px 8px;
  background: white;

&::after {
  content: '';
  position: absolute;
  top: -2.2px;
  right: 18px;
  background: #3B5277;
  width: 20px;
  height: 12.2px;
  clip-path: polygon(6% 0%,50% 84%,0 100%);
  transform: rotate(137deg);
  border-radius: 0 0 0 0.25em;
}
`;

const StyledText = styled(Text)`
  background-color: #3B5277;
  border-radius: 8px 8px 0 0;
  padding: 13px 10px 13px 28px
`;

const ContainerInside = styled.div`
  padding: 32px 45px 67px 45px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
  border: 1px solid #F0F1FF;
  border-radius: 0 0 8px 8px;
`

const StyledImg = styled.img`
  width: 181px;
  height: 186px;
`
export default NotificationEmpty;
