import React from "react";
import Box from "./Box";
import Image from "next/image";

interface SelectionItem {
  id: number;
  name: string;
  color: string;
  src: string;
  size: string;
}

const selection: SelectionItem[] = [
  {
    id: 1,
    name: "NFT Management",
    color: "bg-[#C0EEC0]",
    src: "/dashboard/nft-management.svg",
    size: "w-[60px] h-[74px]",
  },
  {
    id: 2,
    name: "Find Holders",
    color: "bg-[#FDF7D5]",
    src: "/dashboard/find-holders.svg",
    size: "w-[68px] h-[41px]",
  },
  {
    id: 3,
    name: "Airdrop",
    color: "bg-[#D5F3F8]",
    src: "/dashboard/airdrop.svg",
    size: "w-[66px] h-[66px]",
  },
  {
    id: 4,
    name: "Trade-in",
    color: "bg-[#EDDBF4]",
    src: "/dashboard/trade-in.svg",
    size: "w-[75px] h-[66px]",
  },
  {
    id: 5,
    name: "Sales",
    color: "bg-[#FCDCEF]",
    src: "/dashboard/sales.svg",
    size: "w-[61px] h-[61px]",
  },
];

function DashboardSelect() {
  return (
    <Box className="flex gap-x-[16px] items-center justify-center shadow-md bg-white">
      {selection.map((item) => (
        <div
          key={item.id}
          className="w-1/5 flex flex-col items-center cursor-pointer"
        >
          <div
            className={`${item.color} w-full aspect-[1.854] flex items-center justify-center rounded-lg`}
          >
            <div className={`${item.size} relative`}>
              <Image
                src={item.src}
                alt={item.name}
                fill
                className="object-contain"
              />
            </div>
          </div>
          <p className="font-bold pt-[8px] text-small">{item.name}</p>
        </div>
      ))}
    </Box>
  );
}

export default DashboardSelect;
