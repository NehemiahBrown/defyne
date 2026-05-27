import search from "../assets/search.svg";
import sort from "../assets/sort.svg";
import { Fragment } from "react";

export default function SavedSearchBar() {
  return (
    <Fragment>
      <hr className="border-[var(--border-light)] w-full" />
      <section className="flex w-full gap-2 bg-[var(--surface-color-light)] my-4 p-4 border border-[var(--border-light)] rounded-lg">
        <img src={search} alt="Search a saved word." />
        <input
          className=" text-[var(--primary-text-dark)] w-full bg-[var(--search-bar)] rounded border border[var(--secondary-light-text)] placeholder:text-[var(--secondary-text-light)] p-2"
          type="text"
          placeholder="Filter saved words"
        ></input>
        <img
          className="w-8 border border-[var(--border-light)] rounded p-1"
          src={sort}
          alt="Sort saved words."
        />
      </section>
    </Fragment>
  );
}
