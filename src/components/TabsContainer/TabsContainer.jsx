import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { breakpoints } from "../../constants";
import Box from "../Box/Box";
import Text from "../Text/Text";

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
          spacing={spacing}>
          {header}
        </TabOption>
      );
    });

    useEffect(() => {
      setSelected(selectedIndex);
    }, [selectedIndex]);

    return (
      <Box className={className} {...props}>
        <BorderedBox flex spacing={headerSpacing} gap={gapTabs}>
          {headerlist}
          {extraHeaderElement}
        </BorderedBox>
        <TabClass {...tabProps} />
      </Box>
    );
  }
)``;

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

  @media ${breakpoints.tablet} {
    padding: 5px 10px !important;
    font-size: 16px;
    line-height: 24px;
    font-family: "Proxima Nova";
  };

  @media ${breakpoints.mobile} {
    white-space: nowrap;

    &:first-child {
      margin-left: 16px;
    }
  }
`;

const BorderedBox = styled(Box)`
  gap: 2.5rem;

  @media ${breakpoints.mobile} {
    overflow-x: auto;
    padding-bottom: 10px;
  }
`;

TabsContainer.defaultProps = {
  selectedIndex: 0,
  headers: [],
  tabClasses: [],
};

TabsContainer.BorderedBox = BorderedBox;

export default TabsContainer;
