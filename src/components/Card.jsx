import React from "react";
import { useMemo } from "react";
import { snakeString } from "../helpers";

export default function Card({ title, timeframe }) {
  function handleCardHover(e) {
    const cards = document.querySelectorAll('[data-type="card"]');
    if (e.target.dataset.type === "ellipsis") return;
    cards.forEach((card) => card.classList.remove("active"));
    e.currentTarget.classList.add("active");
  }
  function handleCardMouseLeave(e) {
    e.currentTarget.classList.remove("active");
  }
  function handleEllipsisMouseLeave(e) {
    e.currentTarget.classList.remove("hover");
  }
  function handleEllipsisHover(e) {
    const card = e.currentTarget.parentElement.parentElement;
    e.currentTarget.classList.add("hover");
    card.classList.remove("active");
  }
  return (
    <div className="rounded-xl min-w-[250px]">
      <div
        className={`bg-${snakeString(
          title
        )} rounded-xl px-5 min-h-[100px] relative overflow-hidden`}
      >
        <img
          src={`./assets/images/icon-${snakeString(title)}.svg`}
          alt=""
          className="absolute right-5 w-24 top-10 -translate-y-1/2"
        />
      </div>
      <div
        data-type="card"
        onMouseOver={handleCardHover}
        onMouseLeave={handleCardMouseLeave}
        className="bg-blue-d text-white -translate-y-12 p-6 rounded-xl duration-200 ease-in-out cursor-pointer relative"
      >
        <div className="overlay absolute inset-0 rounded-xl duration-200 ease-in-out -z-10"></div>
        <div className="flex items-center justify-between z-10">
          <div className="text-heading font-bold">{title}</div>
          <div
            data-type="ellipsis"
            onMouseOver={handleEllipsisHover}
            onMouseLeave={handleEllipsisMouseLeave}
            className="py-4"
          >
            <img
              data-type="ellipsis"
              src="./assets/images/icon-ellipsis.svg"
              alt="ellipsis"
              className=""
            />
          </div>
        </div>
        <div className="flex items-center justify-between lg:flex-col lg:items-start">
          <div className="text-4xl font-light lg:text-6xl lg:mt-6">
            {timeframe.current}hrs
          </div>
          <div className="mt-3">Last Week - {timeframe.previous}hrs</div>
        </div>
      </div>
    </div>
  );
}
