import React from "react";
import { useState } from "react";
import Timeframe from "./Timeframe";
export default function Profile({ timeframes, setTimeFrames }) {
  function handleActivate(selectedTime) {
    const nextTimeFrames = timeframes.map((timeframe) => {
      if (timeframe.timeframe === selectedTime) {
        return {
          ...timeframe,
          active: true,
        };
      } else {
        return {
          ...timeframe,
          active: false,
        };
      }
    });
    setTimeFrames(nextTimeFrames);
  }
  return (
    <>
      <div className="bg-blue text-blue-pale z-10 p-8 rounded-xl flex-1 flex items-center lg:flex-col lg:items-start">
        <div className="mr-5 lg:m-0">
          <img
            src="./assets/images/image-jeremy.png"
            alt="person"
            className="w-20 border-[3px] rounded-full"
          />
        </div>
        <div className="-space-y-1 lg:space-y-0 lg:mt-8">
          <p>Report for</p>
          <h2 className="text-[27px] font-normal lg:text-5xl lg:leading-[50px] lg:max-w-[5ch]">
            Jeremy Robson
          </h2>
        </div>
      </div>
      <div className="bg-blue-d text-blue-pale font-normal text-heading rounded-xl -translate-y-12 flex flex-col">
        <ul className="p-8 pt-16 pb-6 flex items-center justify-between lg:pt-20 lg:pb-8 lg:space-y-3 lg:flex-col lg:items-start">
          {timeframes.map(({ timeframe, active }) => (
            <Timeframe
              key={timeframe}
              timeframe={timeframe}
              active={active}
              onActivateTimeFrame={() => handleActivate(timeframe)}
            />
          ))}
        </ul>
      </div>
    </>
  );
}
