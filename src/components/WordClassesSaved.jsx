export default function WordClassesSaved({ filterSavedWordClass }) {
  return (
    <section className="w-full">
      <hr className="border-[var(--border)] w-full" />
      <ul className="flex justify-start gap-3 my-4">
        <li>
          <button
            value=""
            onClick={filterSavedWordClass}
            className="border border-[var(--border-medium)] rounded-xl py-[0.2rem] px-2 font-bold text-[var(--wc-default-text)] bg-[var(--wc-default-bg)] cursor-pointer"
          >
            All
          </button>
        </li>
        <li>
          <button
            value="noun"
            onClick={filterSavedWordClass}
            className="border border-[var(--border-medium)] rounded-xl py-[0.2rem] px-2 font-bold text-[var(--wc-noun-text)] bg-[var(--wc-noun-bg)] cursor-pointer"
          >
            Noun
          </button>
        </li>
        <li>
          <button
            value="verb"
            onClick={filterSavedWordClass}
            className="border border-[var(--border-medium)] rounded-xl py-[0.2rem] px-2 font-bold text-[var(--wc-verb-text)] bg-[var(--wc-verb-bg)] cursor-pointer"
          >
            Verb
          </button>
        </li>
        <li>
          <button
            value="adjective"
            onClick={filterSavedWordClass}
            className="border border-[var(--border-medium)] rounded-xl py-[0.2rem] px-2 font-bold text-[var(--wc-adj-text)] bg-[var(--wc-adj-bg)] cursor-pointer"
          >
            Adjective
          </button>
        </li>
        <li>
          <button
            value="adverb"
            onClick={filterSavedWordClass}
            className="border border-[var(--border-medium)] rounded-xl py-[0.2rem] px-2 font-bold text-[var(--wc-adv-text)] bg-[var(--wc-adv-bg)] cursor-pointer"
          >
            Adverb
          </button>
        </li>
      </ul>
    </section>
  );
}
