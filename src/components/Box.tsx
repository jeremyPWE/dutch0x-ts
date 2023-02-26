import React, { ReactNode } from "react";

interface BoxProps {
  children: ReactNode;
  className?: string;
}

function Box({ children, ...props }: BoxProps) {
  return <div className={`p-[24px] ${props.className}`}>{children}</div>;
}

export default Box;
