import React, { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  className?: string;
}

function Button({ children, ...props }: ButtonProps) {
  return (
    <button
      className={`rounded-lg px-[16px] py-[8px] font-bold text-small ${props.className}`}
    >
      {children}
    </button>
  );
}

export default Button;
