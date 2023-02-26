import React, { ReactNode } from "react";
import Box from "./Box";

interface ContentProps {
  children: ReactNode;
}

function Content({ children }: ContentProps) {
  return <Box className="flex gap-x-[24px] w-full">{children}</Box>;
}

export default Content;
