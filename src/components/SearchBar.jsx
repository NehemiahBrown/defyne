import search from "../assets/search.svg";
import dice from "../assets/dice.svg";

export default function SearchBar() {
  return (
    <div className="flex w-full gap-2 bg-[var(--surface-color-light)] mt-8 p-4 border border-[var(--border-light)] rounded-lg">
      <img src={search} alt="Search a word." />
      <input
        type="text"
        placeholder="Search a word..."
        className="w-full bg-[var(--search-bar)] rounded border border[var(--secondary-light-text)] placeholder:text-[var(--secondary-text-light)] p-2"
      ></input>
      <img
        src={dice}
        alt="Search a random word."
        className="w-8 border border-[var(--border-light)] rounded p-1"
      />
    </div>
  );
}
