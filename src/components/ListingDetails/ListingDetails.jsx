import React from "react";
import styled from "styled-components";
import { breakpoints } from "../../constants";
import Box from "../Box/Box";
import ActivityContribution from "./ActivityContribution";
import SnapshotContribution from "./SnapshotContribution";

export const COMPONENTS = { snapshot_app: SnapshotContribution, activity_app: ActivityContribution };

const ListingDetails = ({
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
  };
  const updatedType = type === "snapshot_app" ? type : "activity_app";

  const Klass = COMPONENTS[updatedType] || React.Fragment;

  return (
    <Wrapper bgColor="#ecefec" spacing="p-5 pt-7" sm-spacing="p-4+1 pt-6+2">
      <Box bgColor="#fff" spacing="p-5" borderRadius="12px">
        <Klass {...props} />
      </Box>
    </Wrapper>
  );
};

const Wrapper = styled(Box)`
  border-radius: 12px;
  margin-top: -24px;
  z-index: -1;

  @media ${breakpoints.mobile} {
    border-radius: 0;
  }
`;

ListingDetails.defaultProps = {
  reward: 0,
};

export default ListingDetails;
