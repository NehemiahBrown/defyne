import play from "../assets/play.svg";
import heart from "../assets/heart.svg";
import "../App.css";

export default function WordInfo({ wordData, favoriteWord }) {
  const wordClasses = wordData.wordClasses;
  const antonyms = wordData.antonyms;
  const synonyms = wordData.synonyms;
  const audioUrl = wordData.pronounciationAudio;
  const word = wordData.word;

  const uniqueWordClassArray = [
    ...new Set(wordClasses.map((word) => word.partOfSpeech)),
  ].slice(0, 3);
  console.log(uniqueWordClassArray);

  function playPronounciation() {
    const pronounciation = new Audio(audioUrl);
    pronounciation.play();
  }

  return (
    <section className="bg-[var(--surface-color)] w-full min-w-0 my-8 p-4 border border-[var(--border)] rounded-lg">
      <div className="flex justify-between">
        <h1 className="text-[var(--primary-color)] text-4xl font-bold">
          {word}
        </h1>
        <button
          className="icon w-8 border border-[var(--border)] rounded-lg p-1 cursor-pointer hover:scale-115"
          onClick={favoriteWord}
        >
          <img src={heart} alt="Favorite a word." />
        </button>
      </div>
      <p className="mt-2 text-[var(--primary-text)]">
        {wordData.pronounciationText}
      </p>
      <div className="flex gap-2">
        {uniqueWordClassArray.map((partOfSpeech, index) => {
          let wordClassName = "";

          if (partOfSpeech === "noun") {
            wordClassName = "bg-[var(--wc-noun-bg)] text-[var(--wc-noun-text)]";
          } else if (partOfSpeech === "verb") {
            wordClassName = "bg-[var(--wc-verb-bg)] text-[var(--wc-verb-text)]";
          } else if (partOfSpeech === "adjective") {
            wordClassName = "bg-[var(--wc-adj-bg)] text-[var(--wc-adj-text)]";
          } else if (partOfSpeech === "adverb") {
            wordClassName = "bg-[var(--wc-adv-bg)] text-[var(--wc-adv-text)]";
          } else if (partOfSpeech === "interjection") {
            wordClassName = "bg-[var(--wc-int-bg)] text-[var(--wc-int-text)]";
          } else {
            wordClassName =
              "bg-[var(--wc-default-bg)] text-[var(--wc-default-text)]";
          }
          return (
            <span
              key={`${partOfSpeech} - ${index}`}
              className={`${wordClassName} inline-block font-bold py-1 px-3 rounded-full mt-4`}
            >
              {partOfSpeech}
            </span>
          );
        })}
      </div>

      {audioUrl && (
        <button
          onClick={playPronounciation}
          className="flex gap-2 px-3 py-2 mt-4 border border-[var(--border-medium)] rounded-lg hover:scale-115 cursor-pointer"
        >
          <img
            src={play}
            alt="Play pronunciation."
            className="icon w-3 font-bold"
          />
          <span className="text-[var(--primary-text)]">
            Play pronounciation
          </span>
        </button>
      )}

      <p className="mt-4 text-[var(--primary-text)]">{wordData.definition}</p>
      <p className="mt-2 text-[var(--primary-text)] italic font-bold">
        {wordData.sentence}
      </p>
      <div
        id="antonyms-synonyms"
        className=" flex flex-wrap justify-start gap-2 md:justify-start mt-4"
      >
        {synonyms?.slice(0, 2).map((word, index) => {
          return (
            <span
              key={`${word.synonym} - ${index}`}
              className="font-bold text-sm text-[var(--primary-color)] bg-[var(--secondary-text)]/30 py-1 px-3 rounded-lg border border-[var(--secondary-text)]"
            >
              {word}
            </span>
          );
        })}
        {antonyms?.slice(0, 2).map((word, index) => {
          return (
            <span
              key={`${word.antonym} - ${index}`}
              className="font-bold text-sm text-[var(--antonym)] bg-[var(--antonym)]/30 py-1 px-3 rounded-lg border border-[var(--antonym)]"
            >
              {word}
            </span>
          );
        })}
      </div>
    </section>
  );
}
