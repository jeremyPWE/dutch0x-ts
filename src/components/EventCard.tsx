import React from "react";
import Image from "next/image";
import Box from "./Box";
import Button from "./Button";
import { Icon } from "@iconify/react";

interface EventCardProps {
  bgSrc: string;
  bgColor: string;
  loader: string;
  progress: string;
  title: string;
  progressBar: string;
  imgSrc: string;
  cancel?: boolean;
  check?: boolean;
}

function EventCard({
  bgSrc,
  bgColor,
  loader,
  progress,
  title,
  progressBar,
  imgSrc,
  cancel,
  check,
}: EventCardProps) {
  return (
    <div className="border border-black/10 rounded-lg w-full relative shadow-md">
      <div
        className={`absolute -z-10 inset-0 bg-cover bg-center bg-no-repeat ${bgSrc}`}
      />
      <div className="absolute -z-10 inset-0 bg-white bg-opacity-80" />
      <Box className="flex w-full justify-between">
        <div className="w-full">
          <div className="flex items-center gap-x-[8px] text-xxSmall">
            <div
              className={`flex items-center gap-x-[8px] px-[8px] py-[8px] rounded-r-lg ml-[-24px] pl-[24px] ${bgColor}`}
            >
              <div className="relative w-[20px] h-[20px]">
                <Image
                  src={loader}
                  alt="loader"
                  fill
                  className="object-cover"
                />
              </div>
              <p className="font-bold text-white">AIRDROP</p>
            </div>
            <div className="flex items-center gap-x-[8px] px-[8px] bg-black/10 py-[8px] rounded-lg">
              <Icon
                icon="material-symbols:calendar-today"
                className="w-[16px] h-[16px]"
              />
              <p className="font-bold">{progress}</p>
            </div>
            <div>
              <p className="flex items-center gap-x-[8px] px-[8px]">
                <Icon
                  icon="mdi:clock-time-three"
                  className="w-[16px] h-[16px] text-black/70"
                />
                <span className="font-bold">Started</span> 2022-09-13 08:57:15
              </p>
            </div>
          </div>
          <div className="pt-[16px] flex flex-col gap-y-[12px]">
            <div>
              <p className="text-small">🍎🍌🍍The Fruit Salad Game🍆🥦🥕</p>
              <div className="flex">
                <h2 className="text-[30px] font-bold">{title}</h2>
                <p className="pl-[10px] pt-[16px] text-xSmall">x 100</p>
              </div>
            </div>
            <div className="flex gap-x-[16px] text-xSmall">
              <p>Wallet Transactions:</p>
              <div className="flex gap-x-[4px]">
                <p className="font-bold">44</p>
                <p>Success</p>
              </div>
              <div className="flex gap-x-[4px]">
                <p className="font-bold">44</p>
                <p>Processing</p>
              </div>
              <div className="flex gap-x-[4px]">
                <p className="font-bold">44</p>
                <p>Failed</p>
              </div>
            </div>
            <div className="w-full h-[16px] bg-black/10 rounded-full">
              <div
                className={`${progressBar} rounded-full h-full bg-gradient-to-r from-[#FF6A00] to-[#FF2500]`}
              />
            </div>
          </div>
          <div className="flex pt-[16px] gap-x-[8px]">
            <Button className="bg-black text-white">More Details</Button>
            {cancel ? (
              <Button className="border border-black">Cancel</Button>
            ) : null}
            {check ? (
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="email-checkbox"
                  className="text-black focus:ring-0 m-[8px] rounded-sm"
                />
                <label htmlFor="email-checkbox text-small">
                  Receive report on email
                </label>
              </div>
            ) : null}
          </div>
        </div>
        <div className="relative w-[303px] h-[216px]">
          <Image src={imgSrc} alt={title} fill className="object-cover" />
        </div>
      </Box>
    </div>
  );
}

export default EventCard;
