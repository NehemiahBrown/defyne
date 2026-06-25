import clock from "../assets/recent.svg";
import close from "../assets/close.svg";

export default function RecentWords({ recentWords, deleteRecentWord }) {
  const currentTime = Date.now();
  const todayWords = recentWords.filter((wordObject) => {
    return currentTime - wordObject.searchedAt < 86400000;
  });

  const yesterdayWords = recentWords.filter((wordObject) => {
    return (
      currentTime - wordObject.searchedAt > 86400000 &&
      currentTime - wordObject.searchedAt < 172800000
    );
  });

  const thisWeekWords = recentWords.filter((wordObject) => {
    return (
      currentTime - wordObject.searchedAt > 172800000 &&
      currentTime - wordObject.searchedAt < 604800000
    );
  });
  return (
    <section className="w-full">
      {todayWords.length > 0 && (
        <div>
          <h2 className="text-xs font-bold text-[var(--primary-color)]">
            TODAY
          </h2>
          {todayWords.map((wordObject, index) => {
            return (
              <div
                key={`${wordObject.word}-${index}`}
                id="recentContainer"
                className="flex w-full justify-between bg-[var(--surface-color)] my-4 p-4 border border-[var(--border)] rounded-lg"
              >
                <div id="imgWordContainer" className="flex items-center gap-3">
                  <div id="clockImg">
                    <img
                      className="icon w-8 border border-[var(--border)] rounded p-1"
                      src={clock}
                      alt="Recent word icon."
                    ></img>
                  </div>
                  <div id="wordWordClass">
                    <p className="text-[var(--primary-color)] font-bold text-xl">
                      {wordObject.word}
                    </p>
                    <p className="text-[var(--primary-text)] italic text-sm">
                      {wordObject.wordClasses?.[0]?.partOfSpeech}
                    </p>
                  </div>
                </div>
                <img
                  className="icon cursor-pointer"
                  src={close}
                  alt="Delete the word."
                  onClick={() => deleteRecentWord(wordObject.word)}
                />
              </div>
            );
          })}
        </div>
      )}

      {yesterdayWords.length > 0 && (
        <div>
          <h2 className="text-xs font-bold text-[var(--primary-color)]">
            YESTERDAY
          </h2>
          {yesterdayWords.map((wordObject, index) => {
            return (
              <div
                key={`${wordObject.word}-${index}`}
                id="recentContainer"
                className="flex w-full justify-between bg-[var(--surface-color)] my-4 p-4 border border-[var(--border)] rounded-lg"
              >
                <div id="imgWordContainer" className="flex items-center gap-3">
                  <div id="clockImg">
                    <img
                      className="icon w-8 border border-[var(--border)] rounded p-1"
                      src={clock}
                      alt="Recent word icon."
                    ></img>
                  </div>
                  <div id="wordWordClass">
                    <p className="text-[var(--primary-color)] font-bold text-xl">
                      {wordObject.word}
                    </p>
                    <p className="text-[var(--primary-text)] italic text-sm">
                      {wordObject.wordClasses?.[0]?.partOfSpeech}
                    </p>
                  </div>
                </div>
                <img
                  className="icon cursor-pointer"
                  src={close}
                  alt="Delete the word."
                  onClick={() => deleteRecentWord(wordObject.word)}
                />
              </div>
            );
          })}
        </div>
      )}
      {thisWeekWords.length > 0 && (
        <div>
          <h2 className="text-xs font-bold text-[var(--primary-color)]">
            THIS WEEK
          </h2>
          {thisWeekWords.map((wordObject, index) => {
            return (
              <div
                key={`${wordObject.word}-${index}`}
                id="recentContainer"
                className="flex w-full justify-between bg-[var(--surface-color)] my-4 p-4 border border-[var(--border)] rounded-lg"
              >
                <div id="imgWordContainer" className="flex items-center gap-3">
                  <div id="clockImg">
                    <img
                      className="icon w-8 border border-[var(--border)] rounded p-1"
                      src={clock}
                      alt="Recent word icon."
                    ></img>
                  </div>
                  <div id="wordWordClass">
                    <p className="text-[var(--primary-color)] font-bold text-xl">
                      {wordObject.word}
                    </p>
                    <p className="text-[var(--primary-text)] italic text-sm">
                      {wordObject.wordClasses?.[0]?.partOfSpeech}
                    </p>
                  </div>
                </div>
                <img
                  className="icon cursor-pointer"
                  src={close}
                  onClick={() => deleteRecentWord(wordObject.word)}
                  alt="Delete the word."
                />
              </div>
            );
          })}
        </div>
      )}
    </section>
  );
}
