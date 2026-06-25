import deleteRecent from "../assets/delete.svg";
import { Fragment } from "react";

export default function RecentInfo({ recentWords, clearRecentWords }) {
  return (
    <Fragment>
      <hr className="border-[var(--border)] w-full" />
      <section className="w-full p-4 bg-[var(--surface-color)] my-4 border border-[var(--border)] rounded-lg">
        <p className="text-center text-[var(--primary-text)] mb-4">
          Search a word to build your history.
        </p>

        {recentWords.length > 0 && (
          <button
            onClick={clearRecentWords}
            className="w-full flex justify-center items-center gap-1 text-white font-bold bg-[var(--antonym)]/30 py-2 rounded-lg border border-[var(--antonym)] cursor-pointer"
          >
            <img src={deleteRecent} alt="Delete button." />
            Clear All
          </button>
        )}
      </section>
    </Fragment>
  );
}
