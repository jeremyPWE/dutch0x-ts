import React from "react";
import EventCard from "./EventCard";

function Events() {
  return (
    <div className="w-3/4">
      <h2 className="text-black/50">Events</h2>
      <div className="flex flex-col pt-[8px] gap-[24px]">
        <EventCard
          bgSrc="bg-[url('/events/brownie.png')]"
          loader="/loader.svg"
          bgColor="bg-[#3CAA2A]"
          progress="Harvest"
          progressBar="w-1/4"
          title="Manure"
          imgSrc="/events/brownie.png"
          check
          cancel
        />
        <EventCard
          bgSrc="bg-[url('/events/blue.png')]"
          loader="/finished.svg"
          bgColor="bg-[#28458F]"
          progress="It&lsquo;s Raining"
          progressBar="w-full"
          title="Water"
          imgSrc="/events/blue.png"
        />
      </div>
    </div>
  );
}

export default Events;
