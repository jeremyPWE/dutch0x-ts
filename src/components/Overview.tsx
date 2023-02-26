import React from "react";
import OverviewBox from "./OverviewBox";
import OverviewCard from "./OverviewCard";

function Overview() {
  return (
    <div className="w-1/4">
      <h2 className="text-black/50">Overview</h2>
      <div className="flex flex-col gap-y-[24px] pt-[8px]">
        <OverviewBox>
          <OverviewCard name="Wallet ballances" amount="0.489 ETH" />
        </OverviewBox>
        <OverviewBox title="NFTs">
          <OverviewCard name="NFT items" amount="187" />
          <OverviewCard name="Collections" amount="5" />
          <OverviewCard name="Minted" amount="39" />
        </OverviewBox>
        <OverviewBox title="Saved Searches">
          <OverviewCard name="Green apple" />
          <OverviewCard name="Christmas tree" />
        </OverviewBox>
        <OverviewBox title="Recent Activity">
          <OverviewCard name="Settings > Account" />
          <OverviewCard name="Sales reports" />
        </OverviewBox>
      </div>
    </div>
  );
}

export default Overview;
