import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { breakpoints } from "../../constants";
import Box from "../Box/Box";
import Button from "../Button/Button";
import { useMedias } from "../hooks/useMedia";
import IconSvg from "../IconSvg/IconSvg";
import ListingConditions from "../ListingConditions/ListingConditions";
import Loader from "../Loader/Loader";
import Text from "../Text/Text";

const connectSocialText = (app) => `Connect your Wallet and ${APP_SOURCES[app]} for Crypto Rewards`;

const APP_SOURCES = {
  discord_app: "Discord",
  discourse_app: "Discourse",
  github_app: "Github",
  twitter_app: "Twitter",
};

const ActivityContribution = ({
  id,
  completed,
  completedCount,
  manuallyVerification,
  isAuthenticated,
  manuallyComplete,
  onSignUp,
  refresh,
  getActivityDetails,
  type,
  socialProfileConnected,
  connectSocialMedias,
}) => {
  const [loading, setLoading] = useState(true);
  const [activity, setActivity] = useState(null);
  const { isDesktop, isMobile } = useMedias();
  const conditions = activity?.conditions || {};
  const connected = isAuthenticated && socialProfileConnected;
  const buttonText = completedCount && completedCount > 0 ? "I did this again!" : "I did this!";

  const onManuallyComplete = () => manuallyComplete(activity);

  const onClick = (event) => {
    if (!isAuthenticated) {
      onSignUp();
    } else {
      const app = event.target.dataset.type;
      connectSocialMedias(app);
    }
  };

  useEffect(() => {
    setLoading(true);
    getActivityDetails(id)
      .then(({ activity }) => setActivity(activity))
      .finally(() => {
        setLoading(false);
      });
  }, [refresh, isAuthenticated, socialProfileConnected]);

  if (loading) {
    return (
      <Box flex justifyContent="center">
        <Loader />
      </Box>
    );
  }

  return (
    <>
      <Box flex spacing="pb-2">
        <ListingConditions conditions={conditions} />
      </Box>
      {(!connected || manuallyVerification) && (
        <BottomBox relative>
          <BottomContent flex connected={connected} alignItems="center" justifyContent="space-between">
            <Box>
              {(!connected || (!completed && !activity?.pending)) && (
                <Button
                  extraBold
                  size="lg"
                  spacing="p-0"
                  height="50px"
                  width="184px"
                  borderRadius="40px"
                  bgColor="success500"
                  onClick={onManuallyComplete}
                >
                  {buttonText}
                </Button>
              )}
              {activity?.pending && (
                <Box flex alignItems="center" color="success500" gap="6px">
                  <IconSvg icon="alert-circle" width="15px" />
                  <Text bold>Contribution is under review</Text>
                </Box>
              )}
            </Box>
            {!!activity?.rewards_earned && <Earned earned={+activity?.rewards_earned} isDesktop={isDesktop} />}
            {!connected && <Earned earned={30} isDesktop={isDesktop} />}
          </BottomContent>
          {!connected && (
            <SignUpWrapper>
              <Button
                bold
                size={!isMobile && "lg"}
                height="56px"
                bgColor="primary700"
                borderRadius="40px"
                onClick={onClick}
                data-type={type}
                rightIcon={!isMobile && "right-long"}
                iconWidth="20px"
                width={isMobile && "100%"}
                leftIcon={isAuthenticated && !socialProfileConnected && "chain"}
              >
                {connectSocialText(type)}
              </Button>
            </SignUpWrapper>
          )}
        </BottomBox>
      )}
    </>
  );
};

const Earned = ({ earned, isDesktop }) => {
  return (
    <Box
      flex
      direction="column"
      alignItems={isDesktop ? "flex-end" : "flex-start"}
      justifyContent="space-between"
      gap="2rem"
      spacing="ml-a"
      md-spacing="mx-0 mt-4+1"
      sm-spacing="mx-0"
    >
      <Box flex direction="column" gap="6px" alignItems={isDesktop ? "flex-end" : "flex-start"}>
        <Text extraBold lHeight="21px" color="secondary500">
          Earned:
        </Text>
        <Box flex alignItems="center" gap="6px">
          <IconSvg icon="logo-gold-circle" width="16px" />
          <Text bold size="24px" lHeight="30px" color="accent550">
            {earned} $THRIVE
          </Text>
        </Box>
      </Box>
    </Box>
  );
};

const BottomContent = styled(Box)`
  margin-top: 1.5rem;
  ${({ connected }) => !connected && `filter: blur(5px);`}
`;

const BottomBox = styled(Box)`
  border-top: 1px solid ${({ theme }) => theme.colors.tertiary200};
`;

const SignUpWrapper = styled(Box)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  @media ${breakpoints.mobile} {
    left: 0;
    right: 0;
    transform: translate(0, -50%);
  }
`;

export default ActivityContribution;
