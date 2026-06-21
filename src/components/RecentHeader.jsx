import { Fragment } from "react";

export default function RecentHeader({ recentWords }) {
  return (
    <Fragment>
      <header className="flex justify-between items-center w-full my-4 w-full px-4">
        <div className="flex justify-center items-center gap-2">
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
