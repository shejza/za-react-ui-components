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
    selectedColorText,
    colorText,
    heightTab,
    fontFamily,
    paddingTab,
    borderBottomTab,
    bgColorTab,
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
      const selected = selectedTab == index;

      return (
        <TabOption
          className={selected ? "tab tab-active" : "tab"}
          key={header}
          data-value={index}
          onClick={onChange}
          selected={selected}
          color={selected ? selectedColorText : colorText}
          bgColorTabs={!selected ? selectedBg : bgColorTabs}
          heightTab={heightTab}
          sideBarWidth={sideBarWidth}
          fontFamily={fontFamily}
          paddingTab={paddingTab}
          borderBottomTab={borderBottomTab}
          >
          {header}
        </TabOption>
      );
    });

    useEffect(() => {
      setSelected(selectedIndex);
    }, [selectedIndex]);

    return (
      <WrapperTabs  className={className} {...props}>
        <BorderedBox bgColorTab={bgColorTab} flex spacing={headerSpacing} gap={gapTabs}>
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
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ bgColorTabs }) => bgColorTabs && bgColorTabs};
  width: ${({ sideBarWidth }) => sideBarWidth && sideBarWidth};
  height: ${({ heightTab }) => heightTab && heightTab};
  display: flex;
  align-items: center;
  padding:  ${({ paddingTab }) => paddingTab && paddingTab};
  border-bottom:  ${({ borderBottomTab }) => borderBottomTab && borderBottomTab};
  font-family:  ${({ fontFamily }) => fontFamily && fontFamily};
`;

const BorderedBox = styled(Box)`
  flex-direction: column;
  display: flex;
  min-height: 64px;
  background-color: ${({ bgColorTab }) => bgColorTab && bgColorTab};
`;

Sidebar.defaultProps = {
  selectedIndex: 0,
  headers: [],
  tabClasses: [],
  bgColorTabs: "rgba(50, 50, 60, 1)",
  selectedBg: "rgba(39, 39, 49, 0.94)",
  sideBarWidth: "250px",
  selectedColorText: "white",
  colorText: "white",
  heightTab: "64px",
  fontFamily: "Inter",
  paddingTab: "0 0 0 24px",
  borderBottomTab: "1px solid #32323C",
};

Sidebar.BorderedBox = BorderedBox;

export default Sidebar;
