import React, { ReactNode } from "react";

interface OverviewBoxProps {
  title?: string;
  children: ReactNode;
}

function OverviewBox({ children, title }: OverviewBoxProps) {
  return (
    <div className="w-full rounded-lg border border-black/10 py-[12px] pl-[24px] pr-[16px] flex flex-col gap-y-[24px] shadow-md bg-white">
      {title ? <h3 className="text-regular">{title}</h3> : null}
      {children}
    </div>
  );
}

export default OverviewBox;
