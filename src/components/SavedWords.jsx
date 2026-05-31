import play from "../assets/playSaved.svg";
import heart from "../assets/blueheart.svg";

export default function SavedWords({ savedWords }) {
  function playPronounciation(audioUrl) {
    const pronounciation = new Audio(audioUrl);
    pronounciation.play();
  }

  function classColor(partOfSpeech) {
    switch (partOfSpeech) {
      case "noun":
        return "var(--wc-noun-text)";
      case "verb":
        return "var(--wc-verb-text)";
      case "adjective":
        return "var(--wc-adj-text)";
      case "adverb":
        return "var(--wc-adv-text)";
      default:
        return "var(--primary-color)";
    }
  }

  return (
    <>
      {savedWords.map((savedWord, index) => {
        const wordClasses = savedWord.wordClasses;
        const antonyms = savedWord.antonyms;
        const synonyms = savedWord.synonyms;
        const audioUrl = savedWord.pronounciationAudio;
        const pronounciation = savedWord.pronounciationText;
        const word = savedWord.word;
        const sentence = savedWord.sentence;
        const borderColor = classColor(wordClasses?.[0]?.partOfSpeech);

        return (
          <section
            key={`${word} - ${index}`}
            style={{ borderLeftColor: borderColor }}
            className={`bg-[var(--surface-color)] w-full my-4 p-4 border border-[var(--border)] border-l-3 rounded-lg`}
          >
            <div className="flex justify-between">
              <h2 className="text-2xl font-bold text-[var(--primary-color)]">
                {word}
              </h2>
              {audioUrl ? (
                <button onClick={() => playPronounciation(audioUrl)}>
                  <img
                    className="icon w-7 h-7 p-1.5 border rounded-full"
                    src={play}
                  />
                </button>
              ) : (
                <button
                  disabled
                  className="w-7 h-7 p-1.5 border rounded-full opacity-30 grayscale cursor-not-allowed"
                >
                  <img className="icon" src={play} />
                </button>
              )}
            </div>
            <div>
              <span className="text-sm text-[var(--primary-text)] inline-block font-bold bg-[var(--secondary-text)] py-1 px-3 rounded-full mt-2">
                {wordClasses?.[0].partOfSpeech}
              </span>
              {pronounciation ? (
                <p className="text-sm text-[var(--primary-text)] italic mt-1">
                  {pronounciation}
                </p>
              ) : (
                <p className="text-[var(--primary-text)] text-xs italic">
                  No pronounciation available
                </p>
              )}
            </div>
            <div className="flex justify-between align-center mt-4">
              <p className="text-[var(--primary-text)]">{sentence}</p>
              {synonyms.length > 0 || antonyms.length > 0 ? (
                <div className="flex gap-2">
                  {synonyms.length > 0 && (
                    <span className="text-[var(--primary-color)] font-bold text-xs text-[var(--primary-color)] bg-[var(--secondary-text)]/30 py-1 px-3 rounded-lg border border-[var(--secondary-text)]">
                      {synonyms?.[0]}
                    </span>
                  )}
                  {antonyms.length > 0 && (
                    <span className="text-[var(--antonym)] font-bold text-xs text-[var(--antonym)] bg-[var(--antonym)]/30 py-1 px-3 rounded-lg border border-[var(--antonym)]">
                      {antonyms?.[0]}
                    </span>
                  )}
                </div>
              ) : (
                <div className=" w-full flex items-center gap-2">
                  <div className="border border-[var(--border)] flex-1"></div>
                  <p className="text-[var(--primary-text)] text-xs italic">
                    No synonyms or antonyms available
                  </p>
                  <div className="border border-[var(--border)] flex-1"></div>
                </div>
              )}
            </div>
          </section>
        );
      })}
    </>
  );
}
