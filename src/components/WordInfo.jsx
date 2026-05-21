import play from "../assets/play.svg";
import "../App.css";

export default function WordInfo({ wordData }) {
  const wordClass = wordData?.[0]?.meanings;
  const antonyms = wordData?.[0]?.meanings?.[0]?.antonyms;
  const synonyms = wordData?.[0]?.meanings?.[0]?.synonyms;

  function playPronounciation() {
    const audioUrl = wordData?.[0]?.phonetics?.[0]?.audio;

    if (audioUrl) {
      const pronounciation = new Audio(audioUrl);
      pronounciation.play();
    } else {
      console.log("nooooo");
    }
  }

  return (
    <section className="bg-[var(--surface-color-light)] w-full my-8 p-4 border border-[var(--border-light)] rounded-lg">
      <h1 className="text-4xl font-bold">{wordData?.[0]?.word}</h1>
      <p className="text-[var(--soft-text-light)]">
        {wordData?.[0]?.phonetics?.[1]?.text}
      </p>
      <div className="flex gap-2">
        {wordClass?.slice(0, 3).map((word) => {
          let wordClassName = "";

          if (word.partOfSpeech === "noun") {
            wordClassName = "bg-[var(--wc-noun-bg)] text-[var(--wc-noun-text)]";
          } else if (word.partOfSpeech === "verb") {
            wordClassName = "bg-[var(--wc-verb-bg)] text-[var(--wc-verb-text)]";
          } else if (word.partOfSpeech === "adjective") {
            wordClassName = "bg-[var(--wc-adj-bg)] text-[var(--wc-adj-text)]";
          } else if (word.partOfSpeech === "adverb") {
            wordClassName = "bg-[var(--wc-adv-bg)] text-[var(--wc-adv-text)]";
          } else if (word.partOfSpeech === "interjection") {
            wordClassName = "bg-[var(--wc-int-bg)] text-[var(--wc-int-text)]";
          } else {
            wordClassName =
              "bg-[var(--wc-default-bg)] text-[var(--wc-default-text)]";
          }
          return (
            <span
              key={word.partOfSpeech}
              className={`${wordClassName} inline-block font-bold py-1 px-3 rounded-full mt-4`}
            >
              {word.partOfSpeech}
            </span>
          );
        })}
      </div>

      <button
        onClick={playPronounciation}
        className="flex gap-2 px-3 py-2 mt-4 border rounded-lg"
      >
        <img src={play} alt="Play pronunciation." className="w-3 font-bold" />
        <span>Play pronounciation</span>
      </button>
      <p className="mt-4">{wordClass?.[0]?.definitions?.[0]?.definition}</p>
      <p className="mt-2 italic font-bold text-[var(--soft-text-light)]">
        {wordClass?.[0]?.definitions?.[0]?.example}
      </p>
      <div
        id="antonyms-synonyms"
        className=" flex flex-wrap justify-start gap-2 md:justify-start mt-4"
      >
        {synonyms?.slice(0, 2).map((word) => {
          return (
            <span className="font-bold text-sm text-[var(--primary-color-light)] bg-[var(--secondary-text-light)]/30 py-1 px-3 rounded-lg border border-[var(--secondary-text-light)]">
              {word}
            </span>
          );
        })}
        {antonyms?.slice(0, 2).map((word) => {
          return (
            <span className="font-bold text-sm text-[var(--antonym-light)] bg-[var(--antonym-light)]/30 py-1 px-3 rounded-lg border border-[var(--antonym-light)]">
              {word}
            </span>
          );
        })}
      </div>
    </section>
  );
}
