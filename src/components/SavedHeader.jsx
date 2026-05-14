import leftArrow from "../assets/leftarrow.svg";
import search from "../assets/search.svg";
import sort from "../assets/sort.svg";

export default function SavedHeader() {
  return (
    <>
      <header className="flex justify-between items-center w-full my-4">
        <div className="flex justify-center items-center gap-2">
          <img
            className="w-8 border border-[var(--border-light)] rounded p-1"
            src={leftArrow}
          />
          <h1 className="font-bold">Saved words</h1>
        </div>
        <span className="border border-[var(--border-medium)] rounded-xl py-0.2 px-2 font-bold text-[var(--primary-color-light)] bg-[var(--secondary-text-light)]/30">
          12 words
        </span>
      </header>
      <hr className="border-[var(--border-light)] w-full" />
      <section className="flex w-full gap-2 bg-[var(--surface-color-light)] my-4  p-4 border border-[var(--border-light)] rounded-lg">
        <img src={search} alt="Search a saved word." />
        <input
          className="w-full bg-[var(--search-bar)] rounded border border[var(--secondary-light-text)] placeholder:text-[var(--secondary-text-light)] p-2"
          type="text"
          placeholder="Filter saved words"
        ></input>
        <img
          className="w-8 border border-[var(--border-light)] rounded p-1"
          src={sort}
          alt="Sort saved words."
        />
      </section>
      <hr className="border-[var(--border-light)] w-full" />
      <section className="w-full my-4">
        <ul className="flex justify-start gap-3">
          <li>
            <button className="border border-[var(--border-medium)] rounded-xl py-0.2 px-2 font-bold text-[var(--primary-color-light)] bg-[var(--secondary-text-light)]/30 ">
              All
            </button>
          </li>
          <li>
            <button className="border border-[var(--border-medium)] rounded-xl py-0.2 px-2 font-bold text-[var(--primary-color-light)] bg-[var(--secondary-text-light)]/30">
              Noun
            </button>
          </li>
          <li>
            <button className="border border-[var(--border-medium)] rounded-xl py-0.2 px-2 font-bold text-[var(--primary-color-light)] bg-[var(--secondary-text-light)]/30">
              Verb
            </button>
          </li>
          <li>
            <button className="border border-[var(--border-medium)] rounded-xl py-0.2 px-2 font-bold text-[var(--primary-color-light)] bg-[var(--secondary-text-light)]/30">
              Adjective
            </button>
          </li>
          <li>
            <button className="border border-[var(--border-medium)] rounded-xl py-0.2 px-2 font-bold text-[var(--primary-color-light)] bg-[var(--secondary-text-light)]/30">
              Adverb
            </button>
          </li>
        </ul>
      </section>
    </>
  );
}
