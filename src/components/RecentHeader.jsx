import { Fragment } from "react";
import leftArrow from "../assets/leftarrow.svg";

export default function RecentHeader({ recentWords }) {
  return (
    <Fragment>
      <header className="flex justify-between items-center w-full my-4 w-full px-4">
        <div className="flex justify-center items-center gap-2">
          <img
            className="icon w-8 border border-[var(--border)] rounded p-1"
            src={leftArrow}
          />
          <h1 className="font-bold text-[var(--primary-color)]">
            Recent words
          </h1>
        </div>
        <span className="border border-[var(--border-medium)] rounded-xl py-0.2 px-2 font-bold text-[var(--primary-color)] bg-[var(--secondary-text)]/30">
          {`${recentWords.length} ${recentWords.length === 1 ? "Word" : "Words"}`}
        </span>
      </header>
    </Fragment>
  );
}
