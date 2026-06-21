import search from "../assets/search.svg";
import sort from "../assets/sort.svg";
import { Fragment } from "react";

export default function SavedSearchBar({
  savedSearchBar,
  setSavedSearchBar,
  reverseSavedWords,
  setSelectedWordClass,
  setActiveFilter,
}) {
  function handleSavedSearchChange(e) {
    setSavedSearchBar(e.target.value);
    setSelectedWordClass("");

    if (e.target.value === "") {
      setActiveFilter("");
    } else {
      setActiveFilter("search");
    }
  }

  return (
    <Fragment>
      <hr className="border-[var(--border)] w-full" />
      <form className="flex w-full gap-2 bg-[var(--surface-color)] my-4 p-4 border border-[var(--border)] rounded-lg">
        <img className="icon hover:scale-115 active:opacity-30 cursor-pointer" src={search} alt="Search a saved word." />
        <input
          className=" text-[var(--input-text)] w-full bg-[var(--search-bar)] rounded border border-[var(--secondary-text)] placeholder:text-[var(--secondary-text)] p-2"
          type="text"
          value={savedSearchBar}
          placeholder="Filter saved words"
          onChange={handleSavedSearchChange}
        ></input>
        <img
          className="icon w-8 border border-[var(--border)] rounded p-1 hover:scale-90 active:opacity-30 cursor-pointer"
          src={sort}
          alt="Sort saved words."
          onClick={reverseSavedWords}
        />
      </form>
    </Fragment>
  );
}
