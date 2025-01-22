import React from "react";

type ButtonGroupProps = {
  children: React.ReactNode;
};

export const ButtonGroup = (props: ButtonGroupProps) => {
  return <div className="flex flex-row gap-2">{props.children}</div>;
};
