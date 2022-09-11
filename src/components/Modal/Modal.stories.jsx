import React, { useState } from "react";
import Modal from "./Modal";
import Button from "../Button/Button";
import Box from "../Box/Box";
import Text from "../Text/Text";

export default {
  title: "Modal",
  component: Modal,
};

const Template = (args) => {
  const [open, setOpen] = useState(false);
  const closeModal = () => setOpen(false);
  const openModal = () => setOpen(true);

  return (
    <div>
      <Button onClick={openModal}>Show the Modal</Button>
      <Modal open={open} onClose={closeModal} {...args}>
        <Box maxWidth="722px">
          <Text type="2.5" spacing="mb-2" bold>
            Are you sure you want to quit?
          </Text>
          <Text spacing="mb-5">Progress you made will not be saved.</Text>
          <Box flex justifyContent="space-evenly">
            <Button variant="secondary" grow="1" spacing="mr-6" size="lg" onClick={closeModal} bold>
              YES, I’M SURE
            </Button>
            <Button grow="1" size="lg" bold onClick={closeModal}>
              NO, KEEP EDITING
            </Button>
          </Box>
        </Box>
      </Modal>
    </div>
  );
};

export const Default = Template.bind({});

Default.args = {
  title: "this is the modal title",
  positionY: "0px",
  leaf: false,
  marginTop: "0",
  fullScreen: false,
  paddingBody: '2.5rem',
  borderRadiusX: '8px'
};

const Template2 = (args) => {
  const [open, setOpen] = useState(false);
  const closeModal = () => setOpen(false);
  const openModal = () => setOpen(true);

  const footerContent = (
    <Box bgColor="green" spacing="p-4" flex justifyContent="center">
      <Text>This is the footer of the modal</Text>
    </Box>
  );

  return (
    <div>
      <Button onClick={openModal}>Show the Modal</Button>
      <Modal open={open} onClose={closeModal} footerContent={footerContent} {...args}>
        <Box maxWidth="722px">
          <Text type="2.5" spacing="mb-2" bold>
            Are you sure you want to quit?
          </Text>
          <Text spacing="mb-5">Progress you made will not be saved.</Text>
          <Box flex justifyContent="space-evenly">
            <Button variant="secondary" grow="1" spacing="mr-6" size="lg" onClick={closeModal} bold>
              YES, I’M SURE
            </Button>
            <Button grow="1" size="lg" bold onClick={closeModal}>
              NO, KEEP EDITING
            </Button>
          </Box>
        </Box>
      </Modal>
    </div>
  );
};

const Template3 = (args) => {
  const [open, setOpen] = useState(false);
  const closeModal = () => setOpen(false);
  const openModal = () => setOpen(true);

  return (
    <div>
      <Button onClick={openModal}>Show the Modal</Button>
      <Modal open={open} onClose={closeModal} fullScreen={true} buttonCircle={true} headerLogo = {true} buttonCircle={true} paddingBody={'1.25rem 1.5rem 1.5rem 1.5rem'} {...args}>
        <Box bgColor="#3B5277" color="white" spacing='mt-4'>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
         
        </Box>
      </Modal>
    </div>
  );
};

export const Example1 = Template2.bind({});
export const Example2 = Template3.bind({});
Example1.args = {
  title: "This example has a footer",
};

Example2.args = {
  title: "This example has a full screen",
  positionY: "0px",
  leaf: true,
  marginTop: "0",
  fullScreen: true,
  paddingBody: '1.25rem 1.5rem 1.5rem 1.5rem',
  headerLogo: true,
  buttonCircle: true,
  borderRadiusX: '8px'
};

