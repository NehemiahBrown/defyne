import search from "../assets/search.svg";

export default function SearchBar({
  searchWord,
  homeSearchBar,
  setHomeSearchBar,
}) {
  return (
    <form
      onSubmit={searchWord}
      className="flex w-full gap-2 bg-[var(--surface-color)] mt-8 p-4 border border-[var(--border)] rounded-lg"
      id="homeSearchBar"
      name="homeSearchBar"
    >
      <img
        onClick={searchWord}
        className="icon cursor-pointer hover:scale-115 active:opacity-30"
        src={search}
        alt="Search a word."
      />
      <input
        type="text"
        placeholder="Search a word..."
        className="text-[var(--input-text)] w-full bg-[var(--search-bar)] rounded border border-[var(--secondary-text)] placeholder:text-[var(--secondary-text)] p-2"
        value={homeSearchBar}
        onChange={(e) => setHomeSearchBar(e.target.value)}
      ></input>
    </form>
  );
}
