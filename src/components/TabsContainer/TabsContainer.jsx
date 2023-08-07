import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Box from "../Box/Box";
import Text from "../Text/Text";
import { bgColor } from "../properties";

const TabsContainer = styled(
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
    tabPadding,
    colorTab,
    bgColorTab,
    selectedBgColorTab,
    selectedColorTab,
    fontWeightTab,
    selectedFontWeightTab,
    fontSizeTab,
    fontFamilyTab,
    fontStyleTab,
    fontLineHeightTab,
    displayTab,
    minWidthTab,
    borderTab,
    tabBorderColor,
    ...props
  }) => {
    const [_selectedTab, setSelected] = useState(selectedIndex);
    const selectedTab = _selectedTab > tabClasses.length - 1 ? 0 : _selectedTab;
    const TabClass = tabClasses[selectedTab];
    const onChange = (event) => {
      setSelected(parseInt(event.target.dataset.value));
      onChangeIndex(parseInt(event.target.dataset.value));
    };

    useEffect(() => {
      if (currentIndex !== _selectedTab) {
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
          semiBold
          bgColorTab={bgColorTab}
          selected={selected}
          tabPadding={tabPadding}
          colorTab={colorTab}
          selectedBgColorTab={selectedBgColorTab}
          fontWeightTab={fontWeightTab}
          selectedFontWeightTab={selectedFontWeightTab}
          fontSizeTab={fontSizeTab}
          fontFamilyTab={fontFamilyTab}
          fontStyleTab={fontStyleTab}
          fontLineHeightTab={fontLineHeightTab}
          displayTab={displayTab}
          minWidthTab={minWidthTab}
          borderTab={borderTab}
          selectedColorTab={selectedColorTab}
          tabBorderColor={tabBorderColor}
        >
          {header}
        </TabOption>
      );
    });

    useEffect(() => {
      setSelected(selectedIndex);
    }, [selectedIndex]);

    return (
      <Box display="flex" flexDirection="row" bgColor={bgColor} className={className} {...props}>
        <BorderedBox  bgColorTab={bgColorTab}>
          {headerlist}
          {extraHeaderElement}
        </BorderedBox>
        <TabClass {...tabProps} />
      </Box>
    );
  }
)``;

export const TabOption = styled(Text)`
  font-family: ${({ fontFamilyTab }) => fontFamilyTab && fontFamilyTab};
  font-style: ${({ fontStyleTab }) => fontStyleTab && fontStyleTab};
  font-weight: ${({ fontWeightTab }) => fontWeightTab && fontWeightTab};
  line-height: ${({ fontLineHeightTab }) => fontLineHeightTab && fontLineHeightTab};
  display: ${({ displayTab }) => displayTab && displayTab};
  color: ${({ colorTab, theme }) => colorTab && theme.colors[colorTab]};
  background-color: ${({ bgColorTab, theme }) => bgColorTab && theme.colors[bgColorTab]};
  padding: ${({ tabPadding }) => tabPadding && tabPadding};
  min-width: ${({ minWidthTab }) => minWidthTab && minWidthTab}; 
  font-size: ${({ fontSizeTab }) => fontSizeTab && fontSizeTab};
  cursor: pointer;
  border-bottom: 1px solid ${({ tabBorderColor, theme }) => tabBorderColor && theme.colors[tabBorderColor]};;
  border: ${({ borderTab }) => borderTab && borderTab};
  ${({ selected, theme, selectedBgColorTab, selectedFontWeightTab, selectedColorTab }) =>
    selected &&
    `
    background-color: ${theme.colors[selectedBgColorTab] || selectedBgColorTab};
    font-weight: ${selectedFontWeightTab};
    color: ${theme.colors[selectedColorTab] || selectedColorTab};
  `}
`;

const BorderedBox = styled(Box)`
  display: flex;
  flex-direction: column;
  background-color: ${({ bgColorTab, theme }) => theme.colors[bgColorTab] || bgColorTab};
`;

TabsContainer.defaultProps = {
  selectedIndex: 0,
  headers: [],
  tabClasses: [],
  tabPadding: "24px",
  colorTab: "tabColor",
  bgColorTab: "tabBgColor",
  selectedBgColorTab: "tabActiveBgColor",
  selectedColorTab: "tabActiveColor",
  fontWeightTab: "400",
  selectedFontWeightTab: "600",
  fontSizeTab: "1rem",
  fontFamilyTab: "Proxima Nova",
  fontStyleTab: "normal",
  fontLineHeightTab: "1.5",
  displayTab: "inline-block",
  minWidthTab: "256px",
  tabBorderColor: "tabBorderColor",
  bgColor: "mainSurface"
};

TabsContainer.BorderedBox = BorderedBox;

export default TabsContainer;
