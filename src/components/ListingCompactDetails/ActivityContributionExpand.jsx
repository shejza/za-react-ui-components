import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { breakpoints } from "../../constants";
import Box from "../Box/Box";
import Button from "../Button/Button";
import { useMedias } from "../hooks/useMedia";
import IconSvg from "../IconSvg/IconSvg";
import ListingConditionsCompact from "../ListingConditionsCompact/ListingConditionsCompact";
import Loader from "../Loader/Loader";
import Text from "../Text/Text";

const connectSocialText = (app) => `Connect your ${APP_SOURCES[app] || ""} for Crypto Rewards`;

const APP_SOURCES = {
  discord_app: "Discord",
  discourse_app: "Discourse",
  github_app: "Github",
  twitter_app: "Twitter",
};

const ActivityContributionExpand = ({
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
  description,
}) => {
  const [loading, setLoading] = useState(true);
  const [activity, setActivity] = useState(null);
  const { isDesktop, isMobile } = useMedias();
  const conditions = activity?.conditions || {};
  const connected = isAuthenticated && socialProfileConnected;
  const buttonText = completedCount && completedCount > 0 ? "I did this again!" : "I did this!";

  const onManuallyComplete = () => manuallyComplete(activity);

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
      <BoxWrapped flex spacing="pb-2" justifyContent="space-between">
        <ListingConditionsCompact conditions={conditions} description={description} />

        {manuallyVerification && (!connected || (!completed && !activity?.pending)) && (
          <ButtonStyled
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
          </ButtonStyled>
        )}
      </BoxWrapped>
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

const BoxWrapped = styled(Box)`
  @media ${breakpoints.mobile} {
    flex-direction: column;
  }
`;

const ButtonStyled = styled(Button)`
  position: absolute;
  right: 27px;
  @media ${breakpoints.mobile} {
    position: unset;
    right: unset;
    width: 311px;
    margin: 24px auto 0 auto;
  }
`;
export default ActivityContributionExpand;
