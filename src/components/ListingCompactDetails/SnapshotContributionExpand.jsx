import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Box from "../Box/Box";
import IconSvg from "../IconSvg/IconSvg";
import Text from "../Text/Text";
import Loader from "../Loader/Loader";
import SparklesImage from "../assets/sparkles3.svg";
import { breakpoints } from "../../constants";
import { useMedias } from "../hooks/useMedia";
import Condition from "../ListingConditionsCompact/Condition";

const Completed = ({ completedCount, completed }) => {
  const text = !completed
    ? `Completed ${completedCount} ${completedCount === 1 ? "Time" : "Times"}`
    : "Fully Completed";
  return (
    <Box flex alignItems="center" gap="6px">
      <IconSvg icon="filled-check-circle" width="18px" color="primary700" />
      <Text extraBold size="14px" lHeight="21px" color="secondary500">
        {text}
      </Text>
    </Box>
  );
};

const Earned = ({ earned, isDesktop, contributionsCount, completed, isMobile }) => {
  return (
    <Box
      flex
      direction="column-reverse"
      alignItems={isDesktop ? "flex-end" : "flex-start"}
      justifyContent="space-between"
      gap="2rem"
      spacing="ml-a"
      md-spacing="mx-0 mt-4+1"
      sm-spacing="mx-0"
    >
      <Box flex direction="column" gap="6px" alignItems={isDesktop ? "flex-end" : "flex-start"}>
        <Text extraBold typography="body/medium" color="secondary800">
          Earned:
        </Text>
        <Box flex alignItems="center" gap="6px">
          <IconSvg icon="logo-gold-circle" width="20px" />
          <Text bold size="24px" lHeight="30px" color="accent550">
            {earned} $THRIVE
          </Text>
        </Box>
      </Box>
      {!isMobile && <Completed completedCount={contributionsCount} completed={completed} />}
    </Box>
  );
};

const SnapshotActivityExpand = ({ id, isAuthenticated, onSignUp, refresh, getSnapshotDetails }) => {
  const { isMobile, isDesktop } = useMedias();
  const [loading, setLoading] = useState(true);
  const [activity, setActivity] = useState(null);

  useEffect(() => {
    setLoading(true);
    getSnapshotDetails(id)
      .then(({ activity }) => setActivity(activity))
      .finally(() => {
        setLoading(false);
      });
  }, [refresh, isAuthenticated]);

  if (loading) {
    return (
      <Box flex justifyContent="center">
        <Loader />
      </Box>
    );
  }

  return (
    <>
      <ContainerBox flex relative justifyContent="space-between">
        {activity?.completed && <StyledImage src={SparklesImage} />}
        <Box>
          <Text
            extraBold
            size="14px"
            lHeight="21px"
            color="secondary500"
            spacing="mb-4"
            md-spacing="mb-5"
            sm-spacing="mb-5"
          >
            Conditions:
          </Text>
          <ConditionsWrapper>
            {activity?.space && (
              <Condition
                icon="atom"
                condition="Space"
                conditionDescription={activity.space}
                link={activity.space_link}
                gap="14px"
                isDesktop={isDesktop}
              />
            )}
            {activity?.proposals_count && activity.proposals_count > 1 && (
              <Condition
                icon="person-carry-box"
                condition="Number of votes"
                conditionDescription={activity.proposals_count}
                iconWidth="16px"
                gap="13px"
                isDesktop={isDesktop}
              />
            )}
            {activity?.voting_power && (
              <Condition
                icon="bolt"
                condition="Minimum voting power"
                conditionDescription={activity.voting_power}
                gap="9px"
                isDesktop={isDesktop}
              />
            )}
            {activity?.minimum_votes && (
              <Condition
                icon="person-carry-box"
                condition="Proposal popularity"
                gap="13px"
                conditionDescription={"Minimum " + activity.minimum_votes + " votes"}
                isDesktop={isDesktop}
              />
            )}
            {activity?.role && (
              <Condition
                icon="astronaut"
                condition="Role"
                conditionDescription={activity.role}
                iconWidth="16px"
                isDesktop={isDesktop}
              />
            )}
            {activity?.start_date && (
              <Condition
                icon="clock"
                condition="Dates"
                iconWidth="16px"
                conditionDescription={`${activity.start_date} to ${activity.end_date}`}
                isDesktop={isDesktop}
              />
            )}
            <Condition
              icon="rabbit"
              condition="Verification speed"
              conditionDescription="within 1 hour"
              iconWidth="23px"
              gap="8.5px"
              moveLeft="-ml-1"
              isDesktop={isDesktop}
            />
          </ConditionsWrapper>
        </Box>

        <Earned
          earned={+activity.rewards_earned}
          isDesktop={isDesktop}
          contributionsCount={activity?.contributions_count}
          completed={activity?.completed}
          isMobile={isMobile}
        />
      </ContainerBox>
    </>
  );
};

const ConditionsWrapper = styled(Box)`
  display: grid;
  grid-template-columns: auto 1fr;
  grid-auto-flow: column;
  grid-template-rows: repeat(4, auto);

  @media ${breakpoints.mobile} {
    display: flex;
    flex-direction: column;
  }
`;

const ContainerBox = styled(Box)`
  @media ${breakpoints.mobile} {
    display: flex;
    flex-direction: column;
  }
`;

const StyledImage = styled.img`
  position: absolute;
  top: 50%;
  right: 185px;
  width: 199px;
  transform: translate(0, -50%);
  height: 80%;
`;

export default SnapshotActivityExpand;
