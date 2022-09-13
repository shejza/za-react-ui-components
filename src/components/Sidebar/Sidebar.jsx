import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { breakpoints } from "../../constants";
import Box from "../Box/Box";
import Text from "../Text/Text";

const Sidebar = styled(
  ({
    selectedIndex,
    headers,
    tabClasses,
    className,
    headerSpacing,
    gapTabs,
    tabProps = {},
    onChangeIndex,
    currentIndex,
    extraHeaderElement,
    bgColorTabs,
    selectedBg,
    sideBarWidth,
    ...props }) => {
    const [_selectedTab, setSelected] = useState(selectedIndex);
    const selectedTab = _selectedTab > tabClasses.length - 1 ? 0 : _selectedTab;
    const TabClass = tabClasses[selectedTab];
    const onChange = (event) => {
      setSelected(parseInt(event.target.dataset.value));
      onChangeIndex(parseInt(event.target.dataset.value));
    };

    useEffect(() => {
      if(currentIndex !== _selectedTab) {
        setSelected(currentIndex);
      }
    }, [currentIndex]);

    if (TabClass === undefined) return "tabClasses array is empty";

    const headerlist = headers.map((header, index) => {
      const spacing = index === 0 ? "p-4 pl-0" : "p-4";
      const selected = selectedTab == index;

      return (
        <TabOption
          className={selected ? "tab tab-active" : "tab"}
          key={header}
          data-value={index}
          onClick={onChange}
          semiBold
          selected={selected}
          bgColorTabs={!selected ? selectedBg : bgColorTabs}
          sideBarWidth={sideBarWidth}
          spacing={spacing}>
          {header}
        </TabOption>
      );
    });

    useEffect(() => {
      setSelected(selectedIndex);
    }, [selectedIndex]);

    return (
      <WrapperTabs  className={className} {...props}>
        <BorderedBox bgColorTabs={bgColorTabs} flex spacing={headerSpacing} gap={gapTabs}>
          {headerlist}
          {extraHeaderElement}
        </BorderedBox>
        <TabClass {...tabProps} />
      </WrapperTabs>
    );
  }
)``;

const WrapperTabs = styled(Box)`
  display: flex;
`
export const TabOption = styled(Text)`
  font-family: 'Proxima Nova';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 17px;
  padding: 8.5px 10px !important;
  color: ${({ theme }) => theme.colors.secondary500};
  ${({ selected, theme }) =>
    selected &&
    `
    color: ${theme.colors.tertiary0};
    font-weight: 600;
    background-color:${theme.colors.accent500};
    border-radius: 5px;
  `}
  background-color: ${({ bgColorTabs }) => bgColorTabs && bgColorTabs};
  width: ${({ sideBarWidth }) => sideBarWidth && sideBarWidth};

`;

const BorderedBox = styled(Box)`
  flex-direction: column;
  display: flex;
  min-height: 64px;
  background-color: ${({ bgColorTabs }) => bgColorTabs && bgColorTabs};

  @media ${breakpoints.mobile} {
    overflow-x: auto;
    padding-bottom: 10px;
  }
`;

Sidebar.defaultProps = {
  selectedIndex: 0,
  headers: [],
  tabClasses: [],
  bgColorTabs: "rgba(50, 50, 60, 1)",
  selectedBg: "rgba(39, 39, 49, 0.94)",
  sideBarWidth: "250px"
};

Sidebar.BorderedBox = BorderedBox;

export default Sidebar;
