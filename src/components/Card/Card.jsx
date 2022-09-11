import React, { useRef, useState } from "react";
import styled from "styled-components";
import IconSvg from "../IconSvg/IconSvg";
import Text from "../Text/Text";
import Button from "../Button/Button";
import Tag from "../Tag/Tag";
import ImagePlaceholder from "../../assets/placeholders/photo.png";
import TextMore from "../TextMore/TextMore";
import useClickOutsideCallback from "../hooks/useClickOutsideCallback";
import Box from "../Box/Box";
import ProgressBar from "../ProgressBar/ProgressBar";
import Tooltip from "../Tooltip/Tooltip";
import StatusChallenge from "../CardSimple/StatusChallenge";
import OptionsPanel from "../OptionsPanel/OptionsPanel";
import pluralize from "../../utils/pluralize";
import { breakpoints, fontWeights } from "../../constants";
import { useMedias } from "../hooks/useMedia";

const Card = ({
  children,
  hideIcon,
  active,
  hideAccordion,
  ImageUrl,
  title,
  statusText,
  statusToggle,
  description,
  tags,
  ActivitiesToggle,
  reward,
  numMembers,
  buttonJoin,
  membersList,
  closesTime,
  totalNumSteps,
  stepsCompleted,
  currentChallenge,
  percentage,
  isSecondary,
  challengeCompleted,
  totalTimeCompletion,
  isPrevious,
  isClosed,
  underReview,
  SparklesImage,
  SparklesImage2,
  disableOutsideClick,
  abandonChallenge,
  challengeId,
  startChallenge,
  activeContributorsCount,
  daysLeft,
  rewardEarned,
  completedCount,
  isAbandoned,
  btnTooltip,
  onToggle,
  disabled,
  hideStepsNumber,
  hideDaysToComplete,
  hideContributors,
  hideLastLine,
  hidePartChallenge,
  communityManager,
  editChallenge,
  editExpirationDate,
  cancelChallenge,
  ...props
}) => {
  const ref = useRef();
  const [isActive, SetState] = useState(active);
  const toggle = () => {
    SetState(!isActive);
    onToggle && onToggle(!isActive);
  };
  const close = () => SetState(false);
  const iconName = isActive ? "chevron-up" : "chevron-down";
  const text = isActive ? "Less detail" : "More detail";
  const { isDesktop, isTablet, isMobile} = useMedias();
  const iconElement = ToggleTextIcon(toggle, iconName, text, isMobile);
  const AccordionElement = hideAccordion ? iconElement : null;

  useClickOutsideCallback(ref, disableOutsideClick ? () => {} : close);

  const showButton = !challengeCompleted && !isClosed && !isPrevious && !underReview;

  const buttonChallenge = () => {
    return (
      <>
        {disabled && isMobile ? (
          <></>
        ) : (
          <Tooltip message={btnTooltip} direction="top" $minWidth="334px" arrowPosition="90%" wrapperLeft="-30%">
            <JoinButton
              bold={isDesktop}
              borderRadius="40px"
              bgColor="primary700"
              kind="solid"
              heightSize="44px"
              disabled={disabled}
              minWidth={buttonJoin === 'Start Contributing' ? '144px' : 'unset'}
              onClick={() => startChallenge(challengeId)}
            >
              {buttonJoin}
            </JoinButton>
          </Tooltip>
        )}
        {!isTablet && (
          <ChallengeInfo
            isSecondary={isSecondary}
            currentChallenge={currentChallenge}
            daysLeft={daysLeft}
            closesTime={closesTime}
            isMobile={isMobile}
          />
        )}
      </>
    );
  };

  return (
    <div {...props} ref={ref}>
      <CardWrapper>
        <Container
          isActive={isActive}
          className={(isPrevious || isClosed) && isMobile && "challenge-previous"}
          borderBottomRightRadius={!isActive ? "12px" : 0}
        >
          {isPrevious || isClosed ? null : (
            <ImageWrapper>
              <ImageStyled alt="card" src={ImageUrl} borderBottomLeftRadius={!isActive && isDesktop ? "12px" : "0"} />
            </ImageWrapper>
          )}
          <ContainerInside
            SparklesImage={SparklesImage}
            SparklesImage2={SparklesImage2}
            className={challengeCompleted && "challengeCompleted"}
          >
            <UpperPart>
              <MiddlePart>
                <TitleContainer>
                  <TextTag>
                    <StyledHeader fontFamily='Outfit' size="24px" color="secondary500" bold>
                      {title}
                    </StyledHeader>
                    {statusToggle && (
                      <StyleTag bgColor="tertiary350" borderColor="tertiary350" color="tertiary600">
                        {statusText}
                      </StyleTag>
                    )}
                  </TextTag>
                  <Box flex alignItems="center">
                    {isTablet && (
                      <>
                        {showButton && buttonChallenge()}

                        {underReview && !challengeCompleted && (
                          <StatusChallenge
                            color="success150"
                            text="Contribution is under review"
                            icon="alert-circle"
                            tooltipMsg="Your contribution will be reviewed within the next 24 hours."
                          />
                        )}

                        {challengeCompleted && <ChallengeCompleted /> }
                        {(abandonChallenge || communityManager) && (
                          <StyledMore>
                            <OptionsPanel
                              padding="0"
                              right="0"
                              top="40px"
                              minPanelWidth={communityManager ? "272px" : "250px"}>
                              {communityManager && (
                                <>
                                  <DropDownOption
                                    pointer
                                    flex
                                    alignItems="center"
                                    onClick={() => editChallenge(challengeId)}
                                  >
                                    <Text color="secondary500">
                                      Edit Challenge
                                    </Text>
                                  </DropDownOption>
                                  <DropDownOption
                                    pointer
                                    flex
                                    alignItems="center"
                                    onClick={() => editExpirationDate(challengeId)}
                                  >
                                    <Text color="secondary500">
                                      Edit Challenge Expiration Date
                                    </Text>
                                  </DropDownOption>
                                  <DropDownOption
                                    pointer
                                    flex
                                    alignItems="center"
                                    onClick={() => cancelChallenge(challengeId)}
                                  >
                                    <Text color="accent750">
                                      Cancel Challenge
                                    </Text>
                                  </DropDownOption>
                                </>
                              )}
                              {abandonChallenge && (
                                <DropDownOption
                                  pointer
                                  flex
                                  alignItems="center"
                                  onClick={() => abandonChallenge(challengeId)}
                                >
                                  <Text color="accent750">
                                    Abandon Challenge
                                  </Text>
                                </DropDownOption>
                              )}
                            </OptionsPanel>
                          </StyledMore>
                        )}
                      </>
                    )}
                  </Box>
                </TitleContainer>
                {
                  description &&
                  <DescriptionWrapper>
                    <TextMore description={description} maxWidth={isDesktop ? "417px" : "auto"} />
                  </DescriptionWrapper>
                }
                  
                {ActivitiesToggle && (
                  <Activities>
                    <Text size="14px" color="secondary400" spacing="mr-3" fontWeight={fontWeights.regular}>
                      Activities
                    </Text>
                    {tags.map((tag) => (
                      <StyleTag key={tag}>{tag}</StyleTag>
                    ))}
                  </Activities>
                )}
              </MiddlePart>
              {isDesktop && (
                <RightPart>
                  <Box direction="column" gap="24px" flex={+true} grow="1" alignItems="flex-end">
                    {!challengeCompleted && !isClosed && !isPrevious && !underReview ? (
                      buttonChallenge()
                    ) : (
                      <Box gap="10px" alignItems="center" justifyContent="flex-end" spacing="mt-3" flex={+true}>
                        {isClosed || isAbandoned ? (
                          <Text size="16px" bold={+true} color="secondary300">
                            {isClosed ? "Closed" : "Incomplete"}
                          </Text>
                        ) : (
                          <>
                            {underReview && !challengeCompleted && (
                              <StatusChallenge
                                color="success150"
                                text="Contribution is under review"
                                icon="alert-circle"
                                tooltipMsg="Your contribution will be reviewed within the next 24 hours."
                              />
                            )}

                            {challengeCompleted && (<ChallengeCompleted />)}
                          </>
                        )}
                      </Box>
                    )}
                  </Box>
                  {(abandonChallenge || communityManager) && (
                    <StyledMore>
                      <OptionsPanel
                        padding="0"
                        right="0"
                        top="40px"
                        minPanelWidth={communityManager ? "272px" : "250px"}>
                        {communityManager && (
                          <>
                            <DropDownOption
                              pointer
                              flex
                              alignItems="center"
                              onClick={() => editChallenge(challengeId)}
                            >
                              <Text color="secondary500">
                                Edit Challenge
                              </Text>
                            </DropDownOption>
                            <DropDownOption
                              pointer
                              flex
                              alignItems="center"
                              onClick={() => editExpirationDate(challengeId)}
                            >
                              <Text color="secondary500">
                                Edit Challenge Expiration Date
                              </Text>
                            </DropDownOption>
                            <DropDownOption
                              pointer
                              flex
                              alignItems="center"
                              onClick={() => cancelChallenge(challengeId)}
                            >
                              <Text color="accent750">
                                Cancel Challenge
                              </Text>
                            </DropDownOption>
                          </>
                        )}
                        {abandonChallenge && (
                          <DropDownOption
                            pointer 
                            flex
                            alignItems="center"
                            onClick={() => abandonChallenge(challengeId)}>
                            <Text color="accent750">
                              Abandon Challenge
                            </Text>
                          </DropDownOption>
                        )}
                      </OptionsPanel>
                    </StyledMore>
                  )}
                </RightPart>
              )}
            </UpperPart>
            <Footer>
              <FooterLeft>
                {currentChallenge ? (
                  <>
                    <Reward>
                      <Text size="16px" color="secondary400">
                        Reward earned so far
                      </Text>
                      <Box gap="6px" flex={+true}>
                        <IconSvg width="16px" icon="star" />
                        <Text size="16px" color="accent550" extraBold>
                          {rewardEarned} of {reward}
                        </Text>
                      </Box>
                    </Reward>
                    <LineVertical />
                    <Box direction="column" gap="14px" flex={+true}>
                      <Text size="14px" color="secondary400">
                        Completed:{" "}
                        <b fontWeight={fontWeights.extraBold}>
                          {stepsCompleted}/{totalNumSteps}
                        </b>
                      </Text>
                      <ProgressBar bgColor="#58C7A9" percent={percentage} />
                    </Box>
                    {!isMobile && (
                      <>
                        <LineVertical />
                        <Box direction="column" gap="6px" flex={+true}>
                          <Contributors numMembers={numMembers} membersTakingChallenge={activeContributorsCount} />
                        </Box>
                      </>
                    )}
                  </>
                ) : (
                  <>
                    <Reward>
                      <TextStyled size="16px" color="secondary500" extraBold>
                        Reward {!!isPrevious && "earned"}
                      </TextStyled>
                      <Box gap="6px" flex={+true} alignItems={+true}>
                        <IconSvg width="15px" height="15px" icon="logo-gold-circle" />
                        <Text size="16px" color="accent550" extraBold>
                          {isPrevious ? rewardEarned : reward}
                        </Text>
                      </Box>
                    </Reward>

                    <LineVertical />
                    <Box direction="column" gap="4px" flex={+true}>
                      {challengeCompleted || isPrevious ? (
                        <>
                          <TextStyled size="16px" color="secondary400">
                            Steps completed
                          </TextStyled>
                          <Text size="14px" color="secondary400" extraBold>
                            {stepsCompleted}/{totalNumSteps}
                          </Text>
                        </>
                      ) : (
                        <>
                          {hideStepsNumber && 
                          <TextStyled size="16px" color="secondary400" extraBold>
                            {totalNumSteps} {pluralize("step", totalNumSteps)}
                          </TextStyled>
                          }
                          {hidePartChallenge && 
                          <TextStyled size="16px" color="secondary500" extraBold>
                            {totalNumSteps} Part Challenge
                          </TextStyled>
                          }
                          {
                            hideDaysToComplete && 
                        <Text size="14px" color="secondary300">
                          {totalTimeCompletion} to complete
                        </Text>

                          }
                     
                        </>
                      )}
                    </Box>
                    {!isMobile && hideLastLine && <LineVertical  />}
                    <Box direction="column" gap="4px" flex={+true}>
                      {isPrevious || isClosed ? (
                        <>
                          {!isMobile && (
                            <Contributors
                              numMembers={numMembers}
                              membersCompletedChallenge={completedCount}
                              challengeCompleted={challengeCompleted}
                            />
                          )}
                        </>
                      ) : (
                        <>
                          {
                            hideContributors && !isMobile && (
                              <Contributors
                                numMembers={numMembers}
                                membersTakingChallenge={activeContributorsCount}
                                challengeCompleted={challengeCompleted}
                              />
                            )
                          }

                        </>
                      )}
                    </Box>
                  </>
                )}
              </FooterLeft>
              {isDesktop && AccordionElement}
            </Footer>
          </ContainerInside>
          {(isTablet || isMobile) && (
            <TabletFooter isActive={isActive}>
              {showButton && isTablet && (
                <ChallengeInfo
                  isSecondary={isSecondary}
                  currentChallenge={currentChallenge}
                  daysLeft={daysLeft}
                  closesTime={closesTime}
                />
              )}
              {showButton && isMobile && buttonChallenge()}
              {underReview && !challengeCompleted && isMobile && (
                <StatusChallenge
                  color="success150"
                  text="Contribution is under review"
                  icon="alert-circle"
                  tooltipMsg="Your contribution will be reviewed within the next 24 hours."
                />
              )}
              {isMobile && challengeCompleted && (<ChallengeCompleted />)}
              {(isClosed || isAbandoned) && (
                <Text
                  size={isTablet ? "14px" : "16px"}
                  bold={isDesktop ? true : false}
                  semiBold={isDesktop ? false : true}
                  color={isDesktop ? "secondary300" : "tertiary500"}
                >
                  {isClosed ? "Closed" : "Incomplete"}
                </Text>
              )}
              {AccordionElement}
            </TabletFooter>
          )}
        </Container>
        {isActive && <ContainerCardsInside>{children}</ContainerCardsInside>}
        {isDesktop && !isActive && (
          <WrapperLines>
            <LineBold />
            <LineBoldSecond />
          </WrapperLines>
        )}
      </CardWrapper>
    </div>
  );
};

const ChallengeCompleted = () => (
  <Box gap="7px" alignItems="center" justifyContent="flex-end" flex={+true}>
    <IconSvg width="18px" color="success150" icon="circle-check" className="success150" />
    <Text size="16px" color="secondary400" bold={+true}>
      Challenge fully completed!
    </Text>

    <IconSvg width="18px" icon="zap" color="secondary650" />
  </Box>
);

const ToggleTextIcon = (toggle, iconName, text, isMobile) => (
  <WrapperTextAccordion onClick={toggle}>
    <Text color="accent450" extraBold size="16px">
      {text}
    </Text>
    <IconSvg color="accent450" icon={iconName} width={isMobile ? "14px" : "21px"} />
  </WrapperTextAccordion>
);

const ChallengeInfo = ({ isSecondary, currentChallenge, daysLeft, closesTime, isMobile }) => {
  if (isSecondary) {
    return (
      <StatusChallenge
        color="primary500"
        text="You already started a challenge"
        icon="alert-circle"
        tooltipMsg="You can only participate in one challenge at a time."
      />
    );
  } else {
    if (isMobile) {
      return <></>;
    }
    return (
      <WrapperUntil gap="9px" flex={+true}>
        {currentChallenge && (
          <Text size="14px" color="secondary500">
            Only {daysLeft} {pluralize("day", daysLeft)} left to complete
          </Text>
        )}
        {!currentChallenge && (
          <Text size="14px" color="secondary500">
            Challenge available until {closesTime}
          </Text>
        )}
        <IconSvg width="16px" icon="clock" />
      </WrapperUntil>
    );
  }
};

const Contributors = ({ numMembers, membersTakingChallenge, membersCompletedChallenge, challengeCompleted }) => {
  return (
    <>
      <Members>
        <IconSvg icon="heart" width="14px" color="secondary400" />
        <TextStyled size="16px" color="secondary400" extraBold>
          {numMembers} {pluralize("contributor", numMembers)}
        </TextStyled>
      </Members>
      {membersTakingChallenge > 0 && (
        <Text size="14px" color="secondary300">
          {membersTakingChallenge} taking challenge now
        </Text>
      )}
      {challengeCompleted && membersCompletedChallenge > 0 && (
        <Text size="14px" color="secondary300">
          {membersCompletedChallenge} completed this challenge
        </Text>
      )}
    </>
  );
};

const TextStyled = styled(Text)`
  height: 24px;
  display: flex;
  align-items: center;
`;

const StyledHeader = styled(Text)`
  max-width: 471px;
`;

const WrapperUntil = styled(Box)`
  white-space: nowrap;
`;

const StyledMore = styled.div`
  margin: 10px 0 0 8px;

  @media ${breakpoints.tablet} {
    margin: 0 0 0 8px;
  }
`;

const UpperPart = styled.div`
  display: flex;
  justify-content: space-between;

  @media ${breakpoints.mobile} {
    padding: 24px 14px 0;
  }
`;

const FooterLeft = styled.div`
  display: flex;
  align-items: center;
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

const LineBoldSecond = styled.div`
  border: 1px solid ${({ theme }) => theme.colors.tertiary200};
  background: ${({ theme }) => theme.colors.tertiary0};
  height: 20px;
  border-radius: 12px;
  width: 94%;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  position: absolute;
  bottom: -5px;
  left: 50%;
  z-index: -2;
  box-shadow: 0px 10px 8px rgba(0, 0, 0, 0.02);
  transform: translate(-50%, 0);
`;

const ImageWrapper = styled.div`
  border-bottom-left-radius: 12px;

  @media ${breakpoints.tablet}, @media ${breakpoints.mobile} {
    border-bottom-left-radius: 0;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border: 1px solid ${({ theme }) => theme.colors.tertiary200};
  box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.04);
  background: ${({ theme }) => theme.colors.tertiary0};
  border-top-right-radius: 12px;
  border-bottom-left-radius: 12px;
  border-top-left-radius: 12px;
  border-bottom-right-radius: ${(props) => props.borderBottomRightRadius};

  @media ${breakpoints.tablet} {
    flex-direction: column;
    gap: 0;
  }

  @media ${breakpoints.mobile} {
    flex-direction: column;
    gap: 0;
    border-top-right-radius: 0;
    border-bottom-left-radius: 0;
    border-top-left-radius: 0;
    border-bottom-right-radius: 0;
    border: 0;

    box-shadow: ${({ isActive }) => (!isActive ? "0px 3px 8px rgba(31, 32, 41, 0.08)" : "0 0 0 transparent")};
  }

  &.challenge-previous {
    padding-left: 32px;
    border-radius: 12px;
    min-height: 200px;
  }
  .success150 {
    circle,
    path {
      stroke: ${({ theme }) => theme.colors.success150};
    }
  }
`;

const ContainerInside = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: space-between;
  gap: 40px;

  &.challengeCompleted {
    background: url(${({ SparklesImage }) => SparklesImage}) no-repeat 96% 82%,
      url(${({ SparklesImage2 }) => SparklesImage2}) no-repeat 90% 65%;
  }

  @media ${breakpoints.desktop} {
    padding-left: 24px;
  }

  @media ${breakpoints.mobile} {
    gap: 32px;
  }
`;

const MiddlePart = styled.div`
  padding: 24px 10px 0 0;

  @media ${breakpoints.tablet} {
    padding: 22px;
    width: 100%;
  }
`;

const WrapperTextAccordion = styled.div`
  display: flex;
  cursor: pointer;
  margin-left: auto;

  @media ${breakpoints.mobile} {
    font-size: 14px;
    line-height: 22px;
    gap: 8px;
  }
`;

const CardWrapper = styled.div`
  box-sizing: border-box;
  border-radius: 12px;
  background: ${({ theme }) => theme.colors.tertiary750};
  position: relative;
  z-index: 9;
`;

const ImageStyled = styled.img`
  height: 100%;
  object-fit: cover;
  border-top-left-radius: 12px;
  border-bottom-left-radius: ${(props) => props.borderBottomLeftRadius};
  max-width: 258px;
  display: block;
  @media screen and (max-width: 1500px) {
    width: 100%;
  }

  @media ${breakpoints.tablet} {
    height: 250px;
    width: 100%;
    max-width: 100%;
    border-top-right-radius: 12px;
  }

  @media ${breakpoints.mobile} {
    height: 214px;
    width: 100%;
    max-width: 100%;
    border-top-left-radius: 0;
  }
`;

const RightPart = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 24px 24px 27px 24px;
  min-width: 210px;
  border-top-right-radius: 12px;
`;

const TextTag = styled.div`
  display: flex;
  gap: 17px;
  margin-bottom: 4px;
  align-items: center;
  flex: 1;

  @media ${breakpoints.tablet} {
    margin-bottom: 0;
  } ;
`;

const StyleTag = styled(Tag)`
  margin: 0 8px 0 0;
  height: 22px;
`;
const Activities = styled.div`
  display: flex;
  align-items: center;
  margin: 16px 0 0 0;

  @media ${breakpoints.tablet} {
    margin: 32px 0 10px 0;
  }
`;

const Footer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 24px 24px 0;

  @media ${breakpoints.tablet} {
    padding: 0 22px 22px 22px;
  }

  @media ${breakpoints.mobile} {
    padding: 0 14px 24px;
  }
`;

const Reward = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

const LineVertical = styled.div`
  width: 1px;
  height: 12px;
  background-color: ${({ theme }) => theme.colors.secondary100};
  margin: 0 24px;
`;

const Members = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
`;

const ContainerCardsInside = styled.div`
  display: flex;
  align-items: center;
  padding: 24px 24px 24px 38px;
  flex-direction: column;
  @media ${breakpoints.tablet} {
    padding: 16px 16px 25px 32px;
  }
  @media ${breakpoints.mobile} {
    padding: 16px;
  }
`;

const DropDownOption = styled(Box)`
  padding: 17px 15px;
  ${({withBorders, theme}) => withBorders && `
    border-top: 1px solid ${theme.colors.secondary50};
    border-bottom: 1px solid ${theme.colors.secondary50};
  `}
  &:hover {
    font-weight: 700;
    background: ${({ theme }) => theme.colors.tertiary50};
  }
`;

const TabletFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 64px;
  padding: 0 20px;
  border: 0 solid #e9e9e9;
  border-top-width: 1px;
  ${({ isActive, theme }) => `
    background-color: ${theme.colors.tertiary50};
    border-bottom-width: ${isActive ? "1px" : "0"};
    border-bottom-left-radius: ${isActive ? 0 : "12px"};
    border-bottom-right-radius: ${isActive ? 0 : "12px"};
  `}

  @media ${breakpoints.mobile} {
    border-bottom-width: 0;
  }
`;

const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media ${breakpoints.tablet} {
    margin-bottom: 16px;
  }
`;

const DescriptionWrapper = styled.div`
  margin-top: 10px;
`;

const JoinButton = styled(Button)`
  padding: 12.5px 16px 10.5px 16px;
  line-height: 21px;
  font-style: normal;
`

Card.defaultProps = {
  ImageUrl: ImagePlaceholder,
  tags: [],
  hideStepsContributors: true,
  disableOutsideClick: true,
  hideStepsNumber: false,
  hideDaysToComplete: false,
  hideContributors: false,
  hideLastLine: false,
  hidePartChallenge: true
};

export default Card;
