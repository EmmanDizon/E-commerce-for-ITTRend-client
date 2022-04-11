import { Steps, Button, message } from "antd";
import React from "react";
import {
  SnippetsOutlined,
  OrderedListOutlined,
  FileDoneOutlined,
} from "@ant-design/icons";

import Shipping from "../components/forms/stepForm/Shipping";
const { Step } = Steps;

const steps = [
  {
    title: "Shipping",
    content: <Shipping />,
    icon: <SnippetsOutlined />,
  },
  {
    title: "Confirm Order",
    content: "d-content",
    icon: <OrderedListOutlined />,
  },
  {
    title: "Payment",
    content: "Last-content",
    icon: <FileDoneOutlined />,
  },
];

const Checkout = () => {
  const [current, setCurrent] = React.useState(0);

  const next = () => {
    setCurrent(current + 1);
  };

  const prev = () => {
    setCurrent(current - 1);
  };

  return (
    <>
      <Steps current={current}>
        {steps.map((item) => (
          <Step key={item.title} title={item.title} icon={item.icon} />
        ))}
      </Steps>
      <div className="steps-content">{steps[current].content}</div>
      <div className="steps-action">
        {current < steps.length - 1 && (
          <Button type="primary" onClick={() => next()}>
            Next
          </Button>
        )}
        {current === steps.length - 1 && (
          <Button
            type="primary"
            onClick={() => message.success("Processing complete!")}
          >
            Done
          </Button>
        )}
        {current > 0 && (
          <Button style={{ margin: "0 8px" }} onClick={() => prev()}>
            Previous
          </Button>
        )}
      </div>
    </>
  );
};

export default Checkout;
