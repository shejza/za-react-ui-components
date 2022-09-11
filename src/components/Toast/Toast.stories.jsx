import React, { useState } from "react";
import ToastList from "./ToastList";
import Button from "../Button/Button";
import Box from "../Box/Box";
import Grid from "../Grid/Grid";
import Text from "../Text/Text";

export default {
  title: "Toast",
  component: ToastList,
};

const BUTTON_PROPS = [
  {
    id: 1,
    type: "success",
    className: "success",
    label: "Success",
    backgroundColor: "#5cb85c",
  },
  {
    id: 2,
    type: "danger",
    className: "danger",
    label: "Danger",
    backgroundColor: "#d9534f",
  },
  {
    id: 3,
    type: "info",
    className: "info",
    label: "Info",
    backgroundColor: "#F0F1FF",
  },
  {
    id: 4,
    type: "warning",
    className: "warning",
    label: "Warning",
    backgroundColor: "#f0ad4e",
  },
  {
    id: 5,
    type: "celebratory",
    className: "celebratory",
    label: "Celebratory",
    backgroundColor: "purple",
  },
];

const MESSAGES = {
  success: "This is a success toast component",
  danger: "This is a error toast component",
  info: "This is an info toast component",
  warning: "This is a warning toast component",
  celebratory: "This is a celebratory toast component",
};

const Template = () => {
  const [list, setList] = useState([]);
  const [position, setPosition] = useState("Select Position");
  let [checkValue, setCheckValue] = useState(false);
  const [dismissTime, setAutoDeleteTime] = useState(0);

  const selectPosition = (e) => {
    setPosition(e.target.value);
    setList([]);
  };

  const showToast = (type) => {
    const id = Math.floor(Math.random() * 101 + 1);
    let toastProperties = {
      id,
      type,
      dismissTime,
    };

    if (MESSAGES[type]) {
      toastProperties.content = MESSAGES[type];
      toastProperties.btnText = "CTA";
    } else {
      setList([]);
    }

    toastProperties.content = <Text>{toastProperties.content}</Text>;

    setList([...list, toastProperties]);
  };

  const onCheckBoxChange = () => {
    checkValue = !checkValue;
    setCheckValue(checkValue);
    setList([]);
  };

  const onInputChange = (e) => {
    const time = parseInt(e.target.value, 10);
    setAutoDeleteTime(time);
  };

  const removeByID = (id, element) => {
    const newList = list.filter((item) => item.id !== id);
    setList(newList);
  };

  return (
    <Box className="app" height="900px">
      <div className="app-header">
        <p>React Toast Component</p>
        <Grid columns="repeat(4, 150px)" gap="1em">
          {BUTTON_PROPS.map((e) => (
            <Button
              key={e.id}
              bgColor={e.backgroundColor}
              disabled={position === "Select Position"}
              onClick={() => showToast(e.type)}
            >
              {e.label}
            </Button>
          ))}
        </Grid>

        <div className="select">
          <input id="auto" type="checkbox" name="checkbox" value={checkValue} onChange={onCheckBoxChange} />
          <label htmlFor="auto">Auto Dismiss</label>
        </div>
        <div className="select">
          <input
            className={`${!checkValue ? "disabled" : ""}`}
            type="text"
            name="checkbox"
            placeholder="Dismiss time Ex: 3000"
            autoComplete="false"
            onChange={onInputChange}
          />
        </div>
        <div className="select">
          <select name="position" value={position} onChange={selectPosition} className="position-select">
            <option>Select Position</option>
            <option value="top-right">Top Right</option>
            <option value="top-left">Top Left</option>
            <option value="bottom-left">Bottom Left</option>
            <option value="bottom-right">Bottom Right</option>
            <option value="bottom-center">Bottom Center</option>
          </select>
        </div>
      </div>

      <ToastList list={list} removeByID={removeByID} position={position} dismissTime={dismissTime} />
    </Box>
  );
};

export const Default = Template.bind({});

Default.args = {};
