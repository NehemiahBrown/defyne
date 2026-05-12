import play from "../assets/play.svg";

export default function WordInfo() {
  return (
    <section className="bg-[var(--surface-color-light)] mt-6 p-4 m-4 rounded">
      <h1 className="text-4xl font-bold">ephemeral</h1>
      <p className="">/ɪˈfɛm.ər.əl/</p>

      <span className="inline-block font-bold text-[var(--primary-color-light)] bg-[var(--secondary-text-light)] py-1 px-3 rounded-full mt-4">
        adjective
      </span>

      <button className="flex gap-2 px-3 py-2 mt-4 border rounded-lg">
        <img src={play} alt="Play pronunciation." className="w-3 font-bold" />
        <span>Play pronounciation</span>
      </button>
      <p className="mt-4">
        Lasting for a very short time; transitory in nature.
      </p>
      <p className="mt-2 italic">
        "The ephemeral beauty of cherry blossoms draws crowds every spring."
      </p>
      <div
        id="antonyms-synonyms"
        className=" flex flex-wrap justify-around md:justify-start md:gap-2 mt-4"
      >
        <span className="font-bold text-sm text-[var(--primary-color-light)] bg-[var(--secondary-text-light)]/30 py-1 px-3 rounded-lg border border-[var(--secondary-text-light)]">
          translent
        </span>
        <span className="font-bold text-sm text-[var(--primary-color-light)] bg-[var(--secondary-text-light)]/30 py-1 px-3 rounded-lg border border-[var(--secondary-text-light)]">
          fleeting
        </span>
        <span className="font-bold text-sm text-[var(--antonym-light)] bg-[var(--antonym-light)]/30 py-1 px-3 rounded-lg border border-[var(--antonym-light)]">
          permanent
        </span>
        <span className="font-bold text-sm text-[var(--antonym-light)] bg-[var(--antonym-light)]/30 py-1 px-3 rounded-lg border border-[var(--antonym-light)]">
          enduring
        </span>
      </div>
    </section>
  );
}
