import React from "react";
// import PropTypes from 'prop-types';
import styled from "styled-components";
import Box, { Panel } from "../Box/Box";
import Text from "../Text/Text";
import IconSvg from "../IconSvg/IconSvg";
import useSpacingProps from "../../utils/spacing-props";

const Row = styled(Box)`
  ${useSpacingProps}
  flex-grow: 1;
  display: flex;
  width: 100%;
  box-sizing: border-box;
`;

const StyledDiv = styled("div")`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const FlexContainer = styled(Box)`
  ${useSpacingProps}
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const Footer = styled(FlexContainer)`
  ${useSpacingProps}
  background-color: #FAFBFF;
  justify-content: space-around;
  align-items: center;
  border-radius: 0px 0px 12px 12px;
  border-top-style: solid;
  border-top-color: #ECECEF;
  border-top-width: thin;
}
`;
const GroupCardImage = styled("div")`
  width: 72px;
  height: 72px;
  background: #e8eafd;
  border-radius: 10px;
`;

const GroupStat = styled(({ title, badge, badgecolor, text }) => {
  return (
    <div>
      <Text spacing="mb-1">{title}</Text>
      <label style={{ "font-weight": "bold;" }}>
        <IconSvg icon={badge} color={badgecolor} /> {text}
      </label>
    </div>
  );
})``;

const GroupCard = ({ ...props }) => {
  return (
    <Panel>
      <StyledDiv>
        <Row spacing="p-4">
          <div>
            <GroupCardImage />
          </div>
          <div
            style={{
              width: "100%",
              "padding-left": "1em",
              "padding-right": "1em",
            }}
          >
            <FlexContainer style={{ paddingBottom: "1.7em" }}>
              <div>
                <label style={{ fontWeight: "bold", fontSize: "1.5em" }}>
                  Some Long Name
                </label>
                <div>
                  <IconSvg icon="user" color="blue" />
                  <span>owner</span>
                </div>
              </div>
              <div>
                <div>Available balance</div>
                <label style={{ fontWeight: "bold", fontSize: "1.5em" }}>
                  $THRIVE 900
                </label>
              </div>
            </FlexContainer>
            <FlexContainer>
              <GroupStat
                title="Members"
                badge="user"
                badgecolor="lightBlue"
                text="390 members"
              />
              <GroupStat
                title="Listings"
                badge="paper"
                badgecolor="lightBlue"
                text="12 Active Listings"
              />
              <GroupStat
                title="Reputation"
                badge="flag"
                badgecolor="green"
                text="Trustworthy"
              />
              <GroupStat
                title="Trending"
                badge="trending-up"
                badgecolor="green"
                text="Influence"
              />
            </FlexContainer>
          </div>
        </Row>
        <Row style={{ width: "100%" }}>
          <Footer spacing="p-4">
            <label style={{ fontWeight: "bold" }}>Review:</label>
            <div>
              <label>
                <IconSvg color="blue" icon="paper" /> Listings (1)
              </label>
            </div>
            <label>|</label>
            <div>
              <label>
                <IconSvg color="blue" icon="paper-checked" /> Contributions (2)
              </label>
            </div>
            <label>|</label>
            <div>
              <label>
                <IconSvg color="blue" icon="user-checked" /> Membership requests
                (3)
              </label>
            </div>
          </Footer>
        </Row>
      </StyledDiv>
    </Panel>
  );
};

GroupCard.propTypes = {};

GroupCard.defaultProps = {};

export default GroupCard;
