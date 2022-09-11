import React from "react";
import styled from "styled-components";
import { breakpoints } from "../../constants";
import Box from "../Box/Box";
import ActivityContributionExpand from "./ActivityContributionExpand";
import SnapshotContributionExpand from "./SnapshotContributionExpand";

export const COMPONENTS = { snapshot_app: SnapshotContributionExpand, activity_app: ActivityContributionExpand };

const ListingCompactDetails = ({
  id,
  isAuthenticated,
  onSignUp,
  isCompleted,
  completedCount,
  canCompleteMultipleTimes,
  earned,
  viewYourReceipt,
  type,
  refresh,
  getSnapshotDetails,
  getActivityDetails,
  manuallyVerification,
  manuallyComplete,
  socialProfileConnected,
  connectSocialMedias,
  description,
  completed,
}) => {
  const props = {
    id,
    isAuthenticated,
    onSignUp,
    isCompleted,
    completedCount,
    canCompleteMultipleTimes,
    earned,
    viewYourReceipt,
    type,
    refresh,
    getSnapshotDetails,
    getActivityDetails,
    manuallyVerification,
    manuallyComplete,
    socialProfileConnected,
    connectSocialMedias,
    description,
  };
  const updatedType = type === "snapshot_app" ? type : "activity_app";

  const Klass = COMPONENTS[updatedType] || React.Fragment;

  return (
    <Wrapper bgColor={!completed ? "#FAFAFA" : "#DDEFE2"}>
      <Box>
        <Klass {...props} />
      </Box>
    </Wrapper>
  );
};

const Wrapper = styled(Box)`
  margin-top: -24px;
  border-radius: 0px 0px 12px 12px;
  border: 1px solid ${({ theme }) => theme.colors.tertiary200};
  padding: 52px 28px 34px 28px;
  box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.02);
  @media ${breakpoints.mobile} {
    padding: 48px 16px 20px 16px;
  }
`;

ListingCompactDetails.defaultProps = {
  reward: 0,
};

export default ListingCompactDetails;
