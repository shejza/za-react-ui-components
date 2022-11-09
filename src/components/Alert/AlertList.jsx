import React, { useState, useEffect } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { positionProp } from "./common";
import Alert from "./Alert";

const AlertList = ({ list, position, removeByID, containerPosition }) => {

  const deleteToast = (id) => {
    const alertListItem = list.findIndex((e) => e.id === id);
    removeByID(id, alertListItem);
  };

  return (
    <Container position={containerPosition || position}>
      {list.map((alert, i) => (
        <Alert
          key={i}
          {...alert}
          position={position}
          onClick={deleteToast}
        />
      ))}
    </Container>
  );
};

const Container = styled.div`
  font-size: 14px;
  box-sizing: border-box;
  position: fixed;
  z-index: 999999;
  width: 100%;
  ${positionProp}
`;

AlertList.propTypes = {
  list: PropTypes.array.isRequired,
  position: PropTypes.string,
};

export default AlertList;
