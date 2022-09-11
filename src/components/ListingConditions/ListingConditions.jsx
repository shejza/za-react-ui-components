import React from "react";
import Box from "../Box/Box";
import { useMedias } from "../hooks/useMedia";
import Text from "../Text/Text";
import Condition from "./Condition"

const ListingConditions = ({conditions}) => {
  const { isDesktop } = useMedias();
  return (
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
      {conditions?.discord_server && (
        <Condition
          icon="discord"
          condition="Server"
          conditionDescription={conditions.discord_server}
          iconWidth="19px"
          gap="10px"
          isDesktop={isDesktop}
        />
      )}
      {conditions?.repo && (
        <Condition
          icon="github"
          condition="Repo"
          conditionDescription={conditions.repo}
          iconWidth="16px"
          link={conditions.repo_link}
          isDesktop={isDesktop}
        />
      )}
      {conditions?.twitter_handle && (
        <Condition
          icon="twitter"
          condition="Twitter handle"
          conditionDescription={conditions.twitter_handle}
          iconWidth="16px"
          isDesktop={isDesktop}
        />
      )}
      {conditions?.community && (
        <Condition
          icon="discourse"
          condition="Community"
          conditionDescription={conditions.community}
          iconWidth="14px"
          link={conditions.community_link}
          gap="13px"
          isDesktop={isDesktop}
        />
      )}
      {conditions?.likes_count && (
        <Condition
          icon="heart-filled"
          condition="Number of likes"
          conditionDescription={conditions.likes_count}
          iconWidth="18px"
          gap="11px"
          isDesktop={isDesktop}
        />
      )}
      {conditions?.badge_name && (
        <Condition
          icon="medal-filled"
          condition="Badge name"
          conditionDescription={conditions.badge_name}
          iconWidth="18px"
          gap="11px"
          isDesktop={isDesktop}
        />
      )}
      {conditions?.badge_level && (
        <Condition
          icon="medal-filled"
          condition="Badge level"
          conditionDescription={conditions.badge_level}
          iconWidth="18px"
          gap="11px"
          isDesktop={isDesktop}
        />
      )}
      {conditions?.badge_category && (
        <Condition
          icon="medal-2"
          condition="Badge category"
          conditionDescription={conditions.badge_category}
          iconWidth="18px"
          gap="11px"
          isDesktop={isDesktop}
        />
      )}
      {conditions?.number_of_badges && (
        <Condition
          icon="file-certificate"
          condition="Number of badges"
          conditionDescription={conditions.number_of_badges}
          iconWidth="18px"
          gap="11px"
          isDesktop={isDesktop}
        />
      )}
      {conditions?.retweets_count && (
        <Condition
          icon="twitter-square"
          condition="Number of retweets"
          conditionDescription={conditions.retweets_count}
          iconWidth="14px"
          gap="13px"
          isDesktop={isDesktop}
        />
      )}
      {conditions?.accepted_prs && (
        <Condition
          icon="check-to-slot"
          condition="Number of accepted PRs"
          conditionDescription={conditions.accepted_prs}
          iconWidth="21px"
          gap="9.5px"
          isDesktop={isDesktop}
        />
      )}
      {conditions?.role && (
        <Condition
          icon="astronaut"
          condition="Role"
          conditionDescription={conditions.role}
          iconWidth="16px"
          isDesktop={isDesktop}
        />
      )}
      {conditions?.channel && (
        <Condition
          icon="square-right"
          condition="Channel"
          conditionDescription={conditions.channel}
          iconWidth="16px"
          isDesktop={isDesktop}
        />
      )}
      {conditions?.post_contains && (
        <Condition
          icon="file-lines"
          condition="Post contains"
          conditionDescription={conditions.post_contains}
          iconWidth="14px"
          gap="13px"
          isDesktop={isDesktop}
        />
      )}
      {conditions?.post_recency && (
        <Condition
          icon="list-timeline"
          condition="Post recency"
          conditionDescription={conditions.post_recency}
          iconWidth="18px"
          gap="11px"
          isDesktop={isDesktop}
        />
      )}
      {conditions?.replies_count && (
        <Condition
          icon="reply"
          condition="Number of replies"
          conditionDescription={conditions.replies_count}
          iconWidth="18px"
          gap="11px"
          isDesktop={isDesktop}
        />
      )}
      {conditions?.conditional_verification && (
        <Condition
          icon="clipboard-check"
          condition="Conditional verification"
          conditionDescription={conditions.conditional_verification}
          iconWidth="14px"
          gap="13px"
          isDesktop={isDesktop}
        />
      )}
      {conditions?.final_verification && (
        <Condition
          icon="badge-check"
          condition="Final verification"
          conditionDescription={conditions.final_verification}
          iconWidth="18px"
          gap="11px"
          isDesktop={isDesktop}
        />
      )}
      {conditions?.verification_speed && (
        <Condition
          icon="rabbit"
          condition="Verification speed"
          conditionDescription={conditions.verification_speed}
          iconWidth="23px"
          gap="8.5px"
          moveLeft="-ml-1"
          isDesktop={isDesktop}
        />
      )}
    </Box>
  );
};

export default ListingConditions;