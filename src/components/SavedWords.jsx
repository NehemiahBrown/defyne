import play from "../assets/playSaved.svg";
import heart from "../assets/blueheart.svg";

export default function SavedWords({ savedWords }) {
  function playPronounciation(audioUrl) {
    const pronounciation = new Audio(audioUrl);
    pronounciation.play();
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

        return (
          <section
            key={`${word} - ${index}`}
            className="bg-[var(--surface-color-light)] w-full my-4 p-4 border border-[var(--border-light)] border-l-[var(--primary-color-light)] border-l-3 rounded-lg"
          >
            <div className="flex justify-between">
              <h2 className="text-xl font-bold">{word}</h2>
              {audioUrl ? (
                <button onClick={() => playPronounciation(audioUrl)}>
                  <img
                    className="w-7 h-7 p-1.5 border rounded-full"
                    src={play}
                  />
                </button>
              ) : (
                <button
                  disabled
                  className="w-7 h-7 p-1.5 border rounded-full opacity-30 grayscale cursor-not-allowed"
                >
                  <img src={play} />
                </button>
              )}
            </div>
            <div>
              <span className="text-sm inline-block font-bold text-[var(--primary-color-light)] bg-[var(--secondary-text-light)] py-1 px-3 rounded-full mt-2">
                {wordClasses?.[0].partOfSpeech}
              </span>
              {pronounciation ? (
                <p className="text-sm italic mt-1">{pronounciation}</p>
              ) : (
                <p className="text-[var(--soft-text-light)] text-xs italic">
                  No pronounciation available
                </p>
              )}
            </div>
            <div className="flex justify-between align-center mt-4">
              <p className="">{sentence}</p>
              {synonyms.length > 0 || antonyms.length > 0 ? (
                <div className="flex gap-2">
                  {synonyms.length > 0 && (
                    <span className="font-bold text-xs text-[var(--primary-color-light)] bg-[var(--secondary-text-light)]/30 py-1 px-3 rounded-lg border border-[var(--secondary-text-light)]">
                      {synonyms?.[0]}
                    </span>
                  )}
                  {antonyms.length > 0 && (
                    <span className="font-bold text-xs text-[var(--antonym-light)] bg-[var(--antonym-light)]/30 py-1 px-3 rounded-lg border border-[var(--antonym-light)]">
                      {antonyms?.[0]}
                    </span>
                  )}
                </div>
              ) : (
                <div className=" w-full flex items-center gap-2">
                  <div className="border border-[var(--border-light)] flex-1"></div>
                  <p className="text-[var(--soft-text-light)] text-xs italic">
                    No synonyms or antonyms available
                  </p>
                  <div className="border border-[var(--border-light)] flex-1"></div>
                </div>
              )}
            </div>
          </section>
        );
      })}
    </>
  );
}
