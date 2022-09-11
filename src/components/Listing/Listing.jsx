import React, {useState, useRef} from "react";
import styled from "styled-components";
import Box from "../Box/Box";
import Text from "../Text/Text";
import Tag from "../Tag/Tag";
import IconSvg from "../IconSvg/IconSvg";
import SparklesImage from "../assets/sparkles3.svg";
import ListingDetails from "../ListingDetails/ListingDetails";
import { useEffect } from "react";
import { useMedias } from "../hooks/useMedia";
import { breakpoints } from "../../constants";
import Tooltip from "../Tooltip/Tooltip";
import TextMore from "../TextMore/TextMore";
import Button from "../Button/Button";

const Completed = ({completedCount, completed}) => {
  const text = !completed ? 
    `Completed ${completedCount} ${completedCount === 1 ? "time" : "times"}` 
    : "Fully Completed";
  return (
    <>
      <Line />
      <StyledBox flex alignItems="center" gap="6px">
        <IconSvg icon="filled-check-circle" width="18px" color="primary700" />
        <Text extraBold size="14px" lHeight="21px" color="secondary500">{text}</Text>
      </StyledBox>
    </>
  );
};

const ToggleTextIcon = (toggle, iconName, text, tooltipMessage) => (
  <Box spacing="ml-a pl-4">
    <Tooltip message={tooltipMessage} direction="top" $minWidth="300px" transform="translate(-60%, -10%)">
      <StyledBoxToggle flex pointer alignItems="center" size="15px" gap="8px" onClick={toggle}>
        <Text color="accent450" bold={+true}>
          {text}
        </Text>
        <IconSvg color="accent450" icon={iconName} width="10px" />
      </StyledBoxToggle>
    </Tooltip>
  </Box>
);

const Listing = ({
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
  const [showFullDescription, setShowFullDescription] = useState(false);
  const {isMobile, isDesktop} = useMedias();
  const toggle = () => {
    setShowDetails(!showDetails);
  };
  const iconName = showDetails ? "up-long" : "down-long";
  const text = showDetails ? "Less detail" : manuallyVerification ? "Tell us when you complete" : "Progress & details";
  const tooltipMessage = !showDetails && manuallyVerification ?
    "Expand the card to see more details and confirm your contribution by pressing the “I did this!” button." 
    : "";
  const iconElement = ToggleTextIcon(toggle, iconName, text, tooltipMessage);
  const showCompletedElement = completed || completedCount > 0;
  const showContributionsPerUser = !completed && (canCompleteMultipleTimes || contributions_per_user > 1);

  useEffect(() => {
    if(didMount.current) {
      setShowDetails(true);
    } else {
      didMount.current = true;
    }
  }, [refresh]);

  const onReadMore = () => {
    if(!isAuthenticated) {
      setShowFullDescription(true);
    } else {
      readMore(id);
    }
  };

  const onConnect = (event) => {
      const app = event.target.dataset.type;
      connectSocialMedias(app);
    
  };

  const contributionsPerUser = (
    <Box flex alignItems="center">
      <Line />
      <IconSvg icon="repeat" width="15px" color="secondary500" spacing="mr-2"/>
      <CompletedText
        spacing="mr-4"
        sm-spacing="mr-0"
        extraBold
        color="secondary500"
        size="14px"
        lHeight="21px">
          Can be completed {
          canCompleteMultipleTimes ? "multiple" : 
            completedCount > 0 ?
              `${contributions_per_user - completedCount} more` : contributions_per_user
        } times
      </CompletedText>
    </Box>
  );

  const rewardElement = (
    <>
      <StyledBox>
        <Text extraBold size="14px" lHeight="21px" color="#3D3D3D" spacing="mb-2">
          {completed ? "Earned" : "Reward"}
        </Text>
        <Box flex alignItems="center" gap="6px">
          <IconSvg icon="logo-gold-circle" width="16px" />
          <Text extraBold lHeight="24px" color="accent550">{completed ? earned : reward} $THRIVE</Text>
        </Box>
      </StyledBox>
      {!isDesktop && showCompletedElement && (
        <Completed
          completed={completed}
          completedCount={completedCount} />
      )}
    </>
  );

  return (
    <Wrapper {...otherProps} relative>
      <Container relative flex bgColor="#fff" >
        <ImageWrapper relative bgColor="tertiary50" flex alignItems="center" justifyContent="center">
          {completed && <CompletedOverlay flex alignItems="center" justifyContent="center">
            <Box
              width="57px"
              height="57px"
              borderRadius="50%"
              bgColor="tertiary0"
              flex alignItems="center"
              justifyContent="center"
            >
              <IconSvg width="24px" icon="check" color="success500" />
            </Box>
          </CompletedOverlay>}
          {!!image_url && <StyledImage src={image_url} alt="Listing image" />}
        </ImageWrapper>
        <Box spacing="py-5" md-spacing="py-4+1" sm-spacing="py-0"  relative grow={1} flex direction="column">
          <Box spacing="pl-6 pr-9+7 pb-5" md-spacing="px-4+1" sm-spacing="p-4+1 pb-5">
            <Text bold spacing="mb-4" size="24px" lHeight="30px" fontFamily="Outfit" color="secondary500">{name}</Text>
            {!!description && 
              (type === "snapshot_app" || type === "twitter_app" || type === "discord_app" || showFullDescription) &&  (
              <Text spacing="mb-4" color="secondary500" lHeight="24px">{description}</Text>
            )}
            {!!description && 
              !showFullDescription && type !== "snapshot_app" && type !== "twitter_app" && type !== "discord_app" && (
              <Box spacing="mb-4">
                <TextMore
                  description={description}
                  maxWidth={isDesktop ? "100% - 140px" : "auto"}
                  onReadMore={onReadMore}
                  color="#4F99B9"
                />
              </Box>
            )}
            {activities.length > 0 && (
              <Box flex alignItems="center">
                <Text size="14px" lHeight="21px" color="secondary500" bold spacing="mr-2">
                  {activities.length === 1 ? "Activity" : "Activities"}:
                </Text>
                {activities.map((activity, i) => (
                  <StyledTag key={i}>{activity}</StyledTag>
                ))}
              </Box>
            )}
            {!isDesktop && (
              <Box md-spacing="mt-6+2" sm-spacing="mt-5" flex alignItems="center" justifyContent="space-between">
                {rewardElement}
              </Box>
            )}
          </Box>
          <BottomPart
            flex
            alignItems="center"
            spacing="pt-5 pl-6 pr-5 mt-a"
            md-spacing="px-4+1"
            sm-spacing="px-4+1 pt-0">
            {isDesktop && rewardElement}
            {isDesktop && showCompletedElement && (
              <Completed
                completed={completed}
                completedCount={completedCount} />
            )}
            {!!showContributionsPerUser && contributionsPerUser}
            
              
              {
              !showCompletedElement && (
                <>
                <Line />
                {manuallyVerification && (
                  <StyledBoxChecked
                    spacing="py-1 px-2 mr-4"
                    bgColor="rgba(169, 220, 230, 0.35)"
                    borderRadius="4px" color="#4F99B9"
                  >
                    <Text bold size="14px" lHeight="21px">Checked manually</Text>
                  </StyledBoxChecked>
                )}
                </>
              )}

                {!manuallyVerification && (
                  <StyledBoxChecked>
                    {
                      isAuthenticated && !socialProfileConnected && !completed && (type === 'discord_app' || type === 'twitter_app') ?
                      <>
                      <Check onClick={onConnect}  data-type={type === 'discord_app' ? 'discord_app' : 'twitter_app'} bgColor={type === 'discord_app' ? "#5865F2" : "#00ACEE"}>
                      <IconSvg icon={type === 'discord_app' ? "discord" : "twitter"} color="white"/>
                      Check for Completions</Check>
                      </>
                      :
                    <Text
                      color="secondary300"
                      size="14px" lHeight="21px" spacing="mr-4">Checked automatically</Text>
                    }
                  </StyledBoxChecked>
                )}
            {iconElement}
          </BottomPart>
          {completed && <CompletedImage src={SparklesImage} />}
        </Box>
        {!showDetails && isDesktop && (
          <WrapperLines>
            <LineBold />
          </WrapperLines>
        )}
      </Container>
      {showDetails && <ListingDetails {...props} />}
    </Wrapper>
  );
};

const Wrapper = styled(Box)`
  z-index: 9;
`;

const Container = styled(Box)`
  border-radius: 12px;
  border: 1px solid ${({theme}) => theme.colors.tertiary200};
  box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.02);

  @media ${breakpoints.tablet} {
    flex-direction: column;
  }

  @media ${breakpoints.mobile} {
    border: 0;
    border-radius: 0;
    flex-direction: column;
  }
`;

const ImageWrapper = styled(Box)`
  width: 258px;
  min-width: 258px;
  border-radius: 12px 0 0 12px;
  border-right: 1px solid ${({theme}) => theme.colors.tertiary200};

  @media ${breakpoints.tablet} {
    height: 251px;
    border-radius: 12px 12px 0 0;
    width: auto;
    border-right: 0;
    border-bottom: 1px solid ${({theme}) => theme.colors.tertiary200};
  }

  @media ${breakpoints.mobile} {
    width: auto;
    height: 215px;
    border-radius: 0;
    border: 0;
  }
`;

const StyledTag = styled(Tag)`
  margin: 0 8px 0 0;
  height: 28px;
`;

const BottomPart = styled(Box)`
  border-top: 1px solid ${({theme}) => theme.colors.tertiary200};

  @media ${breakpoints.mobile} {
    height: 84px;
  }
`;

const Line = styled(Box)`
  width: 0;
  height: 0;
  background-color: #c4c4c4;

  @media ${breakpoints.desktop} {
    width: 1px;
    height: 12px;
    margin: 0 1rem;
  }
`;

const CompletedImage = styled.img`
  position: absolute;
  top: 29px;
  right: 27px;
  width: 152px;
  height: 120px;
  object-fit: cover;
`;

const WrapperLines = styled.div`
  display: flex;
  flex-direction: column;
  left: 50%;
  transform: translate(-50%, 7px);
  position: absolute;
  width: 100%;
  bottom: 2px;
  z-index: -1;
  border-radius: 50%;
`;

const LineBold = styled.div`
  border: 1px solid ${({ theme }) => theme.colors.tertiary200};
  background: ${({ theme }) => theme.colors.tertiary0};
  height: 20px;
  border-radius: 12px;
  width: 97%;
  margin-left: auto;
  margin-right: auto;
  display: flex;
`;

const StyledImage = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 12px 0 0 12px;
  object-fit: contain;
`;

const CompletedText = styled(Text)`
  flex: 1;
  @media ${breakpoints.mobile} {
    max-width: 120px;
  } 
`;

const CompletedOverlay = styled(Box)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(141, 207, 159, 0.95);
  border-radius: 12px 0 0 12px;

  @media ${breakpoints.tablet} {
    border-radius: 12px 12px 0 0;
  } 
`;

const Check = styled(Button)`
  padding: 4px 8px;
  border-radius: 4px;
  display: flex;
  align-items: center;
  gap: 6px;
  height: 29px;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 21px;
  color: ${({ theme }) => theme.colors.tertiary0};
`
const StyledBox = styled(Box)`
  white-space: nowrap;

`;

const StyledBoxToggle = styled(Box)`
  white-space: nowrap;
  @media ${breakpoints.mobile} {
    white-space: unset;
    gap: 4px;
    &>div {
      max-width: 130px;
    }
  } 
`;
const StyledBoxChecked = styled(Box)`
  white-space: nowrap;

  @media ${breakpoints.mobile} {
    position: absolute;
    right: 0;
    bottom: 184px;
  }
`;

Listing.defaultProps = {
  reward: 0,
};

export default Listing;