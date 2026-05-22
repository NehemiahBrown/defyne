import search from "../assets/search.svg";
import dice from "../assets/dice.svg";

export default function SearchBar({
  searchWord,
  homeSearchBar,
  setHomeSearchBar,
}) {
  return (
    <form
      onSubmit={searchWord}
      className="flex w-full gap-2 bg-[var(--surface-color-light)] mt-8 p-4 border border-[var(--border-light)] rounded-lg"
      id="homeSearchBar"
      name="homeSearchBar"
    >
      <img
        onClick={searchWord}
        className="cursor-pointer hover:scale-115 active:scale-115"
        src={search}
        alt="Search a word."
      />
      <input
        type="text"
        placeholder="Search a word..."
        className="text-[var(--primary-text-dark)] w-full bg-[var(--search-bar)] rounded border border-[var(--secondary-light-text)] placeholder:text-[var(--secondary-text-light)] p-2"
        value={homeSearchBar}
        onChange={(e) => setHomeSearchBar(e.target.value)}
      ></input>
      <img
        src={dice}
        alt="Search a random word."
        className="cursor-pointer hover:scale-105 w-8 border border-[var(--border-light)] rounded p-1"
      />
    </form>
  );
}
