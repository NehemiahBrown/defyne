import search from "../assets/search.svg";
import sort from "../assets/sort.svg";
import { Fragment } from "react";

export default function SavedSearchBar({
  savedSearchBar,
  setSavedSearchBar,
  reverseSavedWords,
}) {
  return (
    <Fragment>
      <hr className="border-[var(--border)] w-full" />
      <form className="flex w-full gap-2 bg-[var(--surface-color)] my-4 p-4 border border-[var(--border)] rounded-lg">
        <img className="icon" src={search} alt="Search a saved word." />
        <input
          className=" text-[var(--primary-text-dark)] w-full bg-[var(--search-bar)] rounded border border-[var(--secondary-text)] placeholder:text-[var(--secondary-text)] p-2"
          type="text"
          value={savedSearchBar}
          placeholder="Filter saved words"
          onChange={(e) => setSavedSearchBar(e.target.value)}
        ></input>
        <img
          className="icon w-8 border border-[var(--border)] rounded p-1 cursor-pointer"
          src={sort}
          alt="Sort saved words."
          onClick={reverseSavedWords}
        />
      </form>
    </Fragment>
  );
}
