import React from "react";
import styled from "styled-components";
import IconSvg from "../IconSvg/IconSvg";
import {bgColor} from "../properties";
import Text from "../Text/Text";

const AdminCard = ({
  username,
  email,
  role,
  dateOfInvite,
  isPending,
  onRemoveAdmin,
  onResend,
  onCancel,
  isAdmin,
  userEmail,
  dataId,
  ...props}) => {
  const hideRemoveButton = isPending || role === "Owner" || (isAdmin && email !== userEmail);

  return (
    <Wrapper {...props}>
      <LeftPart>
        <ImageWrapper>
          <IconSvg width="17px" icon="user" color="accent500" />
        </ImageWrapper>
        <div>
          {!isPending && <Text color="secondary500" bold lHeight="24px">{username}</Text>}
          <Text size="14px" color="secondary400">{email}</Text>
        </div>
      </LeftPart>
      {isPending && <Text color="secondary500" semiBold>{dateOfInvite}</Text>}
      {!isPending && <Text color="secondary500">{role}</Text>}
      <RightPart>
        {!hideRemoveButton && 
          (
            <Button onClick={onRemoveAdmin} data-id={dataId} data-username={username}>
              <IconSvg width="16px" icon="trash" />
              <Text bold>Remove as admin</Text>
            </Button>
          )}
        {isPending && !isAdmin && (
          <>
            <Button onClick={onResend} className="resend-invite" data-id={dataId} data-email={email}>
              <IconSvg width="16px" icon="send" />
              <Text bold>Resend invite</Text>
            </Button>
            <Divider />
            <Button onClick={onCancel} className="cancel-invite" data-id={dataId} data-email={email}>
              <IconSvg width="16px" icon="x" data-id={dataId} />
              <Text bold data-id={dataId}>Cancel invite</Text>
            </Button>
          </>
        )}
      </RightPart>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 1rem 2rem 1rem 1rem;

  ${bgColor}
`;

const ImageWrapper = styled.div`
  width: 44px;
  height: 44px;
  border-radius: 50%;
  margin-right: 1rem;
  background-color: ${({theme}) => theme.colors.accent100};
  border: 1px solid ${({theme}) => theme.colors.tertiary200};

  display: flex;
  align-items: center;
  justify-content: center;
`;

const LeftPart = styled.div`
  display: flex;
  align-items: center;
  width: 367px;
`;

const RightPart = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-left: auto;
`;

const Button = styled.button`
  display: flex;
  align-items: center;
  border: 0;
  gap: 8px;
  cursor: pointer;
  color: ${({theme}) => theme.colors.destructive500};
  background-color: transparent;

  & > svg,
  & > div {
    pointer-events: none;
  }

  &.resend-invite {
    color: ${({theme}) => theme.colors.primary700};
  }

  &.cancel-invite {
    color: ${({theme}) => theme.colors.secondary500};
  }
`;

const Divider = styled.div`
  width: 1px;
  height: 12px;
  background-color: #c4c4c4;
`;

const StyledIcon = styled(IconSvg)`
  pointer-events: none;
`;

export default AdminCard;