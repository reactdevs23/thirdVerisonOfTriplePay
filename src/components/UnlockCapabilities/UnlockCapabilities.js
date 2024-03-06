import React from "react";
import { TbArrowUpRight } from "react-icons/tb";
import classes from "./UnlockCapabilities.module.css";
import clsx from "clsx";
import { Text, SectionHeading, Highlight, Button } from "../common";

const UnlockCapabilities = () => {
  const capabilities = [
    {
      title: "Intelligent Budgeting",
      info: "Effortlessly create and customize budgets tailored to your financial goals, with intuitive tools that help you track spending and stay on target.",
    },
    {
      title: "Expense Tracking",
      info: "Seamlessly monitor your expenses in real-time, categorizing transactions for a clear overview of where your money is going and identifying areas for potential savings.",
    },
    {
      title: "Smart Alerts",
      info: "Receive personalized alerts and notifications to stay informed about upcoming bills, unusual spending patterns, or opportunities to optimize your financial habits.",
    },
    {
      title: "Investment Insights",
      info: "Gain valuable insights into investment opportunities, with access to real-time market data, personalized recommendations, and analysis to help you make informed decisions.",
    },
    {
      title: "Goal Setting",
      info: "Set and track progress towards your financial goals, whether it's saving for a vacation, a new home, or retirement, with interactive visuals and milestones to keep you motivated.",
    },
  ];
  return (
    <div className={classes.wrapper}>
      <div className={clsx("container", classes.container)}>
        <div className={classes.headingContainer}>
          <Text lg semiBold primaryDefault className={classes.badge}>
            Features
          </Text>{" "}
          <SectionHeading textCenter>
            Unlock Powerful Capabilities:
            <br />
            <Highlight>
              <strong>Explore Key Features</strong>
            </Highlight>
          </SectionHeading>
          <Text xl base800 textCenter>
            Discover the myriad functionalities and tools within TriplePay
            designed to simplify financial management.
          </Text>
        </div>
        <div className={classes.capabilities}>
          {capabilities.map((el, i) => (
            <div className={classes.card} key={i}>
              <Text base900 xl2 semiBold>
                {el.title}
              </Text>
              <Text md base600>
                {el.info}
              </Text>
            </div>
          ))}
        </div>

        <Button
          btnPrimary
          iconBtn
          size="lg"
          className={classes.button}
          onClick={() => {}}
        >
          Join Waiting List <TbArrowUpRight className={classes.arrow} />
        </Button>
      </div>
    </div>
  );
};

export default UnlockCapabilities;
