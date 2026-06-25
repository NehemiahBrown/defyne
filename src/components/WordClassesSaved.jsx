import deleteSaved from "../assets/delete.svg";

export default function WordClassesSaved({
  savedWords,
  clearSavedWords,
  filterSavedWordClass,
}) {
  return (
    <section className="w-full">
      <hr className="border-[var(--border)] w-full" />
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
        <div>
          <ul className="flex flex-wrap gap-3 my-4">
            <li>
              <button
                value=""
                onClick={filterSavedWordClass}
                className="border border-[var(--border-medium)] rounded-xl py-[0.2rem] px-2 text-sm font-bold text-[var(--wc-default-text)] bg-[var(--wc-default-bg)] cursor-pointer"
              >
                All
              </button>
            </li>
            <li>
              <button
                value="noun"
                onClick={filterSavedWordClass}
                className="border border-[var(--border-medium)] rounded-xl py-[0.2rem] px-2 text-sm font-bold text-[var(--wc-noun-text)] bg-[var(--wc-noun-bg)] cursor-pointer"
              >
                Noun
              </button>
            </li>
            <li>
              <button
                value="verb"
                onClick={filterSavedWordClass}
                className="border border-[var(--border-medium)] rounded-xl py-[0.2rem] px-2 text-sm font-bold text-[var(--wc-verb-text)] bg-[var(--wc-verb-bg)] cursor-pointer"
              >
                Verb
              </button>
            </li>
            <li>
              <button
                value="adjective"
                onClick={filterSavedWordClass}
                className="border border-[var(--border-medium)] rounded-xl py-[0.2rem] px-2 text-sm font-bold text-[var(--wc-adj-text)] bg-[var(--wc-adj-bg)] cursor-pointer"
              >
                Adjective
              </button>
            </li>
            <li>
              <button
                value="adverb"
                onClick={filterSavedWordClass}
                className="border border-[var(--border-medium)] rounded-xl py-[0.2rem] px-2 text-sm font-bold text-[var(--wc-adv-text)] bg-[var(--wc-adv-bg)] cursor-pointer"
              >
                Adverb
              </button>
            </li>
          </ul>
        </div>
        <div className="w-full sm:w-auto sm:ml-auto">
          {savedWords.length > 0 && (
            <button
              onClick={clearSavedWords}
              className="flex items-center justify-center gap-1 w-full sm:w-auto whitespace-nowrap text-white font-bold bg-[var(--antonym)]/30 py-2 px-3 rounded-lg border border-[var(--antonym)] cursor-pointer"
            >
              <img src={deleteSaved} alt="Delete button." />
              Clear All
            </button>
          )}
        </div>
      </div>
    </section>
  );
}
