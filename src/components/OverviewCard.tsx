import React from "react";
import { Icon } from "@iconify/react";

interface OverviewCardProps {
  className?: string;
  name: string;
  amount?: string;
}

function OverviewCard({ ...props }: OverviewCardProps) {
  return (
    <div className={`w-full ${props.className} cursor-pointer`}>
      <div className="text-small flex justify-between items-center">
        <p className="text-black/60">{props.name}</p>
        <div className="flex items-center gap-x-[16px]">
          <p className="">{props.amount}</p>
          <Icon
            icon="ic:outline-keyboard-arrow-right"
            className="w-[16px] h-[16px]"
          />
        </div>
      </div>
    </div>
  );
}

export default OverviewCard;
