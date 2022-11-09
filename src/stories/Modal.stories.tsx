import React from "react";
import { Meta, Story } from "@storybook/react";
import { Modal, ModalProps } from "../components";

const meta: Meta = {
  title: "Modal",
  component: Modal,
  argTypes: {
    children: {
      control: {
        type: "ReactNode",
      },
    },
  },
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story<ModalProps> = (args) => <Modal {...args} />;

export const Default = Template.bind({});

Default.args = {};
