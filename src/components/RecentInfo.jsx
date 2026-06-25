import deleteRecent from "../assets/delete.svg";
import { Fragment } from "react";

export default function RecentInfo({ recentWords, clearRecentWords }) {
  return (
    <Fragment>
      <hr className="border-[var(--border)] w-full" />
      <section className="flex w-full justify-between items-center p-4 bg-[var(--surface-color)] my-4  p-4 border border-[var(--border)] rounded-lg">
        <p className="text-[var(--primary-text)] flex-1">
          Search a word to build your history.
        </p>
        {recentWords.length > 0 && (
          <button
            onClick={clearRecentWords}
            className="flex gap-1 whitespace-nowrap shrink-0 text-white font-bold bg-[var(--antonym)]/30 py-1 px-3 rounded-lg border border-[var(--antonym)] cursor-pointer"
          >
            <img src={deleteRecent} alt="Delete button." />
            Clear All
          </button>
        )}
      </section>
    </Fragment>
  );
}
