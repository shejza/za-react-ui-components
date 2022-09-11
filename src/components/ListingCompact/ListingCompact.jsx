import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import Box from "../Box/Box";
import Text from "../Text/Text";
import SparklesImage from "../assets/list-sparkles.svg";
import { useMedias } from "../hooks/useMedia";
import { breakpoints } from "../../constants";
import Completed from "./Completed";
import ToggleTextIcon from "./ToggleTextIcon";
import CanBeCompleted from "./CanBeCompleted";
import RewardElement from "./RewardElement";
import CompletionCheck from "./CompletionCheck";
import ConnectedBtn from "./ConnectedBtn";
import ListingCompactDetails from "../ListingCompactDetails/ListingCompactDetails";
import Button from "../Button/Button";
import FullyCompletedLabel from "./FullyCompletedLabel";

const ListingCompact = ({
  id,
  name,
  description,
  activities,
  reward,
  completed,
  canCompleteMultipleTimes,
  completedCount,
  isAuthenticated,
  image_url,
  onSignUp,
  earned,
  viewYourReceipt,
  contributions_per_user,
  type,
  refresh,
  getSnapshotDetails,
  getActivityDetails,
  manuallyVerification,
  manuallyComplete,
  socialProfileConnected,
  connectSocialMedias,
  readMore,
  ...otherProps
}) => {
  const props = {
    id,
    name,
    description,
    activities,
    reward,
    completed,
    canCompleteMultipleTimes,
    completedCount,
    isAuthenticated,
    image_url,
    onSignUp,
    earned,
    viewYourReceipt,
    contributions_per_user,
    type,
    refresh,
    getSnapshotDetails,
    getActivityDetails,
    manuallyVerification,
    manuallyComplete,
    socialProfileConnected,
    connectSocialMedias,
    readMore,
  };
  const didMount = useRef(false);
  const [showDetails, setShowDetails] = useState(false);
  const { isTablet, isMobile } = useMedias();
  const socialTypes = ["discord_app", "twitter_app", "discourse_app"];
  const isSocialType = socialTypes.includes(type);
  const isConnectedSocials = isAuthenticated && socialProfileConnected && type !== "snapshot_app";
  const bgMobileColor = completed ? "#DDEFE2" : "#fafafa";

  const toggle = () => {
    setShowDetails(!showDetails);
  };
  const iconName = showDetails ? "up-long" : "down-long";
  const text = completed
    ? "Read more"
    : showDetails
      ? "Less detail"
      : manuallyVerification
        ? "Tell us when you complete"
        : "Progress & details";
  const tooltipMessage =
    !showDetails && manuallyVerification
      ? "Expand the card to see more details and confirm your contribution by pressing the “I did this!” button."
      : "";
  const iconElement = ToggleTextIcon(
    toggle,
    iconName,
    text,
    tooltipMessage,
    completed,
    showDetails,
    manuallyVerification
  );
  const showCompletedElement = completed || completedCount > 0;
  const showCanBeCompleted = !completed && (canCompleteMultipleTimes || contributions_per_user > 1);

  useEffect(() => {
    if (didMount.current) {
      setShowDetails(true);
    } else {
      didMount.current = true;
    }
  }, [refresh]);

  const onConnect = (event) => {
    if (!isAuthenticated) {
      onSignUp();
    } else {
      const app = event.target.dataset.type;
      connectSocialMedias(app);
    }
  };

  return (
    <Wrapper {...otherProps} relative>
      <Container
        borderRadius={!showDetails ? "12px" : "12px 12px 0 0"}
        borderBottom={isMobile && showDetails && "none"}
        boxShadow={isMobile && showDetails ? "none" : " 0px 5px 15px rgba(0, 0, 0, 0.02)"}
        relative
        flex
        bgColor={completed && isAuthenticated ? "success600" : "tertiary0"}
      >
        <WrapperImageTitle>
          <ImageWrapper
            relative
            bgColor={completed && isAuthenticated ? "success600" : "tertiary50"}
            flex
            alignItems="center"
            justifyContent="center"
          >
            {!!image_url && <StyledImage src={image_url} alt="Listing image" />}
          </ImageWrapper>
          <Title bold typography="body/medium" color="secondary800">
            {name}
          </Title>
        </WrapperImageTitle>
        <BoxInside bgColor={isMobile && bgMobileColor} grow={1} flex alignItems="center">
          <BottomPart
            borderRadius={isMobile && "0 0 12px 12px"}
            bgColor={isMobile && bgMobileColor}
            flex
            alignItems="center"
          >
            <RewardElement
              completed={completed}
              earned={earned}
              reward={reward}
              showCompletedElement={showCompletedElement}
              completedCount={completedCount}
            />
            {isAuthenticated &&
            <Completed completed={completed} completedCount={completedCount} />
            }

            {!!showCanBeCompleted ? (
              <CanBeCompleted
                canCompleteMultipleTimes={canCompleteMultipleTimes}
                contributions_per_user={contributions_per_user}
                completedCount={completedCount}
              />
            ) : (
              <EmptyCanBeCompleted>
              -
            </EmptyCanBeCompleted>
            )
          }

            {!isTablet && (
              <CompletionCheck
                completedCount={completedCount}
                manuallyVerification={manuallyVerification}
                isAuthenticated={isAuthenticated}
                socialProfileConnected={socialProfileConnected}
                completed={completed}
                type={type}
              />
            )}
            {completed && isMobile && (
              <WrapperCompleted>
                <FullyCompletedLabel />
              </WrapperCompleted>
            )}
            {!manuallyVerification && isAuthenticated && !socialProfileConnected && !completed && isSocialType && (
              <ConnectedBtn onConnect={onConnect} typeConnected={type} />
            )}
            {!isAuthenticated && (
              <MetaButton
                heightSize="44px"
                typograhy="body/small"
                color="secondary800"
                kind="outline"
                variant="success500"
                borderRadius="50px"
                bold
                rightIcon="chain"
                leftIcon="metamask"
                spacing="ml-a mr-6"
                onClick={onConnect}
              >
                Connect Wallet
              </MetaButton>
            )}
            {isConnectedSocials && iconElement}

            {isAuthenticated && type === "snapshot_app" && iconElement}
          </BottomPart>
          {completed && isAuthenticated && <CompletedImage src={SparklesImage} />}
        </BoxInside>
      </Container>
      {showDetails && isAuthenticated && <ListingCompactDetails {...props} />}
    </Wrapper>
  );
};

const Wrapper = styled(Box)`
  z-index: 9;
  @media ${breakpoints.mobile} {
    overflow-x: hidden;
  }
`;

const Container = styled(Box)`
  border-radius: ${({ borderRadius }) => borderRadius && borderRadius};
  border: 1px solid ${({ theme }) => theme.colors.tertiary200};
  box-shadow: ${({ boxShadow }) => boxShadow && boxShadow};
  padding: 0 0 0 28px;
  min-height: 40px;
  @media ${breakpoints.mobile} {
    flex-direction: column;
    padding: 0;
    border-bottom: ${({ borderBottom }) => borderBottom && borderBottom};
  }
`;

const ImageWrapper = styled(Box)`
  width: 20px;
  border-radius: 12px 0 0 12px;
`;

const BottomPart = styled(Box)`
  width: 100%;
  @media ${breakpoints.mobile} {
    flex-direction: column;
    align-items: baseline;
    gap: 24px;
    @media ${breakpoints.mobile} {
      border-radius: ${({ borderRadius }) => borderRadius && borderRadius};
    }
  }
`;

const CompletedImage = styled.img`
  position: absolute;
  top: 20px;
  left: 300px;
  object-fit: cover;
  @media ${breakpoints.tablet} {
    left: 210px;
  }
  @media ${breakpoints.mobile} {
    top: unset;
    left: unset;
    bottom: 81px;
    right: 6px;
  }
`;

const BoxInside = styled(Box)`
  padding: 30px 0 30px 0;
  @media ${breakpoints.tablet} {
    flex-direction: column;
    gap: 8px;
    align-items: baseline;
    padding: 30px 0 30px 0;
  }
  @media ${breakpoints.mobile} {
    padding: 27px 0 0 0;
    border-radius: 0 0 12px 12px;
    position: relative;
  }
`;

const StyledImage = styled.img`
  width: 100%;
  max-width: 16px;
`;

const Title = styled(Text)`
  padding-right: 62px;
  width: 254px;
  @media ${breakpoints.tablet} {
    max-width: 173px;
    padding-right: 18px;
  }
  @media ${breakpoints.mobile} {
    max-width: unset;
  }
`;

const WrapperImageTitle = styled.div`
  display: flex;
  align-items: center;
  gap: 23.5px;
  z-index: 9;
  @media ${breakpoints.mobile} {
    gap: 14.15px;
    padding: 24px 45px 24px 22.5px;
    border-bottom: 1px solid #e4e4ed;
  }
`;

const WrapperCompleted = styled.div`
  @media ${breakpoints.mobile} {
    position: absolute;
    right: 16px;
    top: 25px;
    & > div {
      margin-right: 0;
    }
  }

  @media only screen and (max-width: 490px) {
    position: relative;
    right: unset;
    top: unset;
    & > div {
      margin-left: 16px;
    }
  }
`;

const EmptyCanBeCompleted = styled.div`
   width: 114px;
   @media ${breakpoints.mobile} {
      display: flex;
      padding-left: 16px;
   }
`;

const MetaButton = styled(Button)`
  min-width: 177px;
  svg {
    overflow: overlay;  
  }
  @media ${breakpoints.mobile} {
    width: 100%;
    border-radius: 0px 0px 8px 8px;
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
    height: 72px;
    svg {
      width: 16px;
    }
  }
`

ListingCompact.defaultProps = {
  reward: 0,
};

export default ListingCompact;
