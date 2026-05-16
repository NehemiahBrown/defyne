import play from "../assets/playSaved.svg";
import heart from "../assets/blueheart.svg";

export default function SavedWords({
  word,
  wordClass,
  pronounciation,
  sentence,
  synonym,
  antonym,
}) {
  return (
    <section className="bg-[var(--surface-color-light)] w-full my-4 p-4 border border-[var(--border-light)] border-l-[var(--primary-color-light)] border-l-3 rounded-lg">
      <div className="flex justify-between">
        <h2 className="text-xl font-bold">{word}</h2>
        <div className="flex gap-2">
          <img className="w-7 h-7 p-1.5 border rounded-full" src={play} />
          <img className="w-7 h-7 p-1.5 border rounded-full" src={heart} />
        </div>
      </div>
      <div>
        <span className="text-sm inline-block font-bold text-[var(--primary-color-light)] bg-[var(--secondary-text-light)] py-1 px-3 rounded-full mt-2">
          {wordClass}
        </span>
        <p className="text-sm italic mt-1">{pronounciation}</p>
      </div>
      <div className="flex justify-between align-center mt-4">
        <p className="">{sentence}</p>
        <div className="flex gap-2">
          <span className="font-bold text-xs text-[var(--primary-color-light)] bg-[var(--secondary-text-light)]/30 py-1 px-3 rounded-lg border border-[var(--secondary-text-light)]">
            {synonym}
          </span>
          <span className="font-bold text-xs text-[var(--antonym-light)] bg-[var(--antonym-light)]/30 py-1 px-3 rounded-lg border border-[var(--antonym-light)]">
            {antonym}
          </span>
        </div>
      </div>
    </section>
  );
}
