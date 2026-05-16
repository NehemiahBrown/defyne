export default function WordClassesSaved() {
  return (
    <section className="w-full">
      <hr className="border-[var(--border-light)] w-full" />
      <ul className="flex justify-start gap-3 my-4">
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
  );
}
