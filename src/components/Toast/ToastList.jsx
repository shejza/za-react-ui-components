import React, { useState, useEffect } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { positionProp } from "./common";
import Toast from "./Toast";

const ToastList = ({ list, position, removeByID, containerPosition }) => {

  const deleteToast = (id) => {
    const toastListItem = list.findIndex((e) => e.id === id);
    removeByID(id, toastListItem);
  };

  return (
    <Container position={containerPosition || position}>
      {list.map((toast, i) => (
        <Toast
          key={i}
          {...toast}
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

  ${positionProp}
`;

ToastList.propTypes = {
  list: PropTypes.array.isRequired,
  position: PropTypes.string,
};

export default ToastList;
