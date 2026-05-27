import play from "../assets/play.svg";
import heart from "../assets/heart.svg";
import "../App.css";

export default function WordInfo({ wordData, favoriteWord }) {
  const wordClasses = wordData.wordClasses;
  const antonyms = wordData.antonyms;
  const synonyms = wordData.synonyms;
  const audioUrl = wordData.pronounciationAudio;

  function playPronounciation() {
    const pronounciation = new Audio(wordData.pronounciationAudio);
    pronounciation.play();
  }

  return (
    <section className="bg-[var(--surface-color-light)] w-full min-w-0 my-8 p-4 border border-[var(--border-light)] rounded-lg">
      <div className="flex justify-between">
        <h1 className="text-4xl font-bold">{wordData.word}</h1>
        <img
          onClick={favoriteWord}
          className="w-8 border border-[var(--border-light)] rounded-lg p-1"
          src={heart}
          alt="Favorite a song."
        />
      </div>
      <p className="text-[var(--soft-text-light)]">
        {wordData.pronounciationText}
      </p>
      <div className="flex gap-2">
        {wordClasses?.slice(0, 3).map((word, index) => {
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
              key={`${word.partOfSpeech} - ${index}`}
              className={`${wordClassName} inline-block font-bold py-1 px-3 rounded-full mt-4`}
            >
              {word.partOfSpeech}
            </span>
          );
        })}
      </div>

      {audioUrl && (
        <button
          onClick={playPronounciation}
          className="flex gap-2 px-3 py-2 mt-4 border rounded-lg"
        >
          <img src={play} alt="Play pronunciation." className="w-3 font-bold" />
          <span>Play pronounciation</span>
        </button>
      )}
      <p className="mt-4">{wordData.definition}</p>
      <p className="mt-2 italic font-bold text-[var(--soft-text-light)]">
        {wordData.sentence}
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
