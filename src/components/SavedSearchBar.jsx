import search from "../assets/search.svg";
import sort from "../assets/sort.svg";
import { Fragment } from "react";

export default function SavedSearchBar() {
  return (
    <Fragment>
      <hr className="border-[var(--border)] w-full" />
      <section className="flex w-full gap-2 bg-[var(--surface-color)] my-4 p-4 border border-[var(--border)] rounded-lg">
        <img className="icon" src={search} alt="Search a saved word." />
        <input
          className=" text-[var(--primary-text-dark)] w-full bg-[var(--search-bar)] rounded border border[var(--secondary-text)] placeholder:text-[var(--secondary-text)] p-2"
          type="text"
          placeholder="Filter saved words"
        ></input>
        <img
          className="icon w-8 border border-[var(--border)] rounded p-1 cursor-pointer"
          src={sort}
          alt="Sort saved words."
        />
      </section>
    </Fragment>
  );
}
