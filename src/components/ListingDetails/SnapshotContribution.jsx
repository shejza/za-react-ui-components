import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Box from "../Box/Box";
import Button from "../Button/Button";
import IconSvg from "../IconSvg/IconSvg";
import ProgressBar from "../ProgressBar/ProgressBar";
import Text from "../Text/Text";
import Loader from "../Loader/Loader";
import SparklesImage from "../assets/sparkles3.svg";
import { breakpoints } from "../../constants";
import { useMedias } from "../hooks/useMedia";
import Condition from "../ListingConditions/Condition";

const Completed = ({completedCount, completed}) => {
  const text = !completed ?
    `Completed ${completedCount} ${completedCount === 1 ? "time" : "times"}`
    : "Fully Completed";
  return (
    <Box flex alignItems="center" gap="6px">
      <IconSvg icon="filled-check-circle" width="18px" color="primary700" />
      <Text extraBold size="14px" lHeight="21px" color="secondary500">{text}</Text>
    </Box>
  );
};

const Earned = ({earned, isDesktop, contributionsCount, completed}) => {
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
        <Text extraBold lHeight="21px" color="secondary500">Earned:</Text>
        <Box flex alignItems="center" gap="6px">
          <IconSvg icon="logo-gold-circle" width="16px" />
          <Text bold size="24px" lHeight="30px" color="accent550">{earned} $THRIVE</Text>
        </Box>
        {/* <Text
          bold
          size="14px"
          lHeight="21px"
          color="#7EC0CE"
          underline
          pointer
          onClick={viewYourReceipt}>
            View your receipt
        </Text> */}
      </Box>
      {isDesktop && (
        <Completed
          completedCount={contributionsCount}
          completed={completed}
        />
      )}
    </Box>
  );
};

const SnapshotActivity = ({
  id,
  isAuthenticated,
  onSignUp,
  refresh,
  getSnapshotDetails,
}) => {
  const {isMobile, isDesktop} = useMedias();
  const [loading, setLoading] = useState(true);
  const [activity, setActivity] = useState(null);

  useEffect(() => {
    setLoading(true);
    getSnapshotDetails(id)
      .then(({activity}) => setActivity(activity))
      .finally(() => {
        setLoading(false);
      });
  }, [refresh, isAuthenticated]);

  if(loading) {
    return (
      <Box flex justifyContent="center">
        <Loader />
      </Box>
    );
  }

  return (
    <>
      <Box flex relative direction={!isDesktop && "column"}>

        {activity?.completed && (
          <StyledImage src={SparklesImage} />
        )}
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
        {!!activity?.rewards_earned && activity.rewards_earned > 0 && !activity?.with_progress && (
          <Earned
            earned={+activity.rewards_earned}
            isDesktop={isDesktop}
            contributionsCount={activity?.contributions_count}
            completed={activity?.completed}
          />
        )}
      </Box>
      {(activity?.with_progress || !isAuthenticated) && (
        <Line bgColor="tertiary200" spacing="mt-5" md-spacing="mt-0" sm-spacing="mt-2" />
      )}
      <Box
        relative
        flex
        direction={!isDesktop && "column"}>
        {(activity?.with_progress || !isAuthenticated) && (
          <ProgressBox
            isAuthenticated={isAuthenticated}
            flex
            direction={!isDesktop && "column"}
            justifyContent="space-between"
          >
            <Box>
              <Text extraBold size="14px" lHeight="21px" color="secondary500" spacing="mb-3">
                Progress toward success:
              </Text>
              <Box flex alignItems="center" gap="16px" spacing="mb-a">
                <Box width={!isDesktop ? "158px" : "233px"}>
                  <ProgressBar
                    percent={!isAuthenticated ? 60 : ((activity.voted_proposals/activity.proposals_count)*100)}
                    bgColor="#5FB974"
                    height="6"
                  />
                </Box>
                <Box flex alignItems="center" gap="6px">
                  <Text extraBold color="secondary400" lHeight="24px">
                    {!!isAuthenticated && `${activity?.voted_proposals}/${activity?.proposals_count} Votes`}
                  </Text>
                </Box>
              </Box>
            </Box>
            {!!isAuthenticated && !!activity?.rewards_earned && activity.rewards_earned > 0 && (
              <Box sm-spacing="mt-4">
                <Earned
                  earned={+activity.rewards_earned}
                  isDesktop={isDesktop}
                  contributionsCount={activity?.contributions_count}
                  completed={activity?.completed}
                />
              </Box>
            )}
            {!isAuthenticated && (
              <Earned
                earned={30}
                isDesktop={isDesktop}
                contributionsCount={3}
                completed={false}
              />
            )}
          </ProgressBox>
        )}
        {!isDesktop && isAuthenticated && activity?.completed && <Box height="1px" bgColor="#E9E9E9" spacing="my-5" />}
        {!isAuthenticated && (
          <SignUpWrapper>
            <Button
              bold
              size={!isMobile && "lg"}
              height="56px"
              bgColor="primary700"
              borderRadius="40px"
              onClick={onSignUp}
              rightIcon={!isMobile && "right-long"}
              iconWidth="20px"
              width={isMobile && "100%"}
            >
              Connect Your Wallet for Crypto Rewards
            </Button>
          </SignUpWrapper>
        )}
      </Box>
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

const Line = styled(Box)`
  height: 1px;
  margin-bottom: 21px;
`;

const ProgressBox = styled(Box)`
  width: 100%;
  ${({isAuthenticated}) => !isAuthenticated && `filter: blur(5px);`}
`;

const SignUpWrapper = styled(Box)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);

  @media ${breakpoints.mobile} {
    left: 0;
    right: 0;
    transform: translate(0, -50%);
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

export default SnapshotActivity;
