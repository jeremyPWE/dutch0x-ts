import React from "react";
import Box from "./Box";
import Image from "next/image";
import Link from "next/link";
import { Icon } from "@iconify/react";

function Navbar() {
  return (
    <nav>
      <Box className="flex items-center gap-x-[32px] bg-white">
        <Link href="/" passHref>
          <div className="relative w-[145px] h-[36px]">
            <Image
              src="/logo.svg"
              alt="dutch0x-logo"
              fill
              className="object-contain"
            />
          </div>
        </Link>
        <ul className="flex gap-x-[32px] text-small text-black/60 mt-[16px]">
          <li className="font-bold text-black flex flex-col items-center">
            <Link href="/" passHref>
              Dashboard
            </Link>
            <div className="rounded-full w-[5px] h-[5px] bg-[#FF4800] " />
          </li>
          <li>
            <Link href="/" passHref>
              Create
            </Link>
          </li>
          <li className="flex flex-col">
            <Link href="/" passHref>
              Marketplace
            </Link>
            <p className="text-[#FF4800] text-xxSmall mt-[-4px]">Coming soon</p>
          </li>
          <li>
            <Link href="/" passHref>
              Learn
            </Link>
          </li>
        </ul>
        <div className="text-small border border-black/20 rounded-lg p-[6px] flex items-center gap-x-[10px] w-full">
          <Icon
            icon="radix-icons:magnifying-glass"
            className="w-[20px] h-[20px]"
          />
          <input
            type="text"
            placeholder="Find Holders"
            className="w-full border-none text-small p-0"
          />
          <div className="bg-black/20 rounded-sm px-[9px]">/</div>
        </div>
        <div className="bg-[#3CAA2A]/20 text-[#3CAA2A] py-[4px] px-[8px] flex items-center font-bold gap-x-[4px] rounded-[4px] text-xxSmall">
          <div className="rounded-full w-[7px] h-[7px] bg-[#3CAA2A]" />
          STATUS
        </div>
        <Icon
          icon="carbon:notification-filled"
          className="w-[24px] h-[24px] cursor-pointer"
        />
        <div className="relative w-[24px] h-[24px] cursor-pointer">
          <Image
            src="/message.svg"
            alt="message-icon"
            fill
            className="object-contain"
          />
        </div>
        <Icon icon="mdi:user" className="w-[24px] h-[24px] cursor-pointer" />
      </Box>
    </nav>
  );
}

export default Navbar;
