import clock from "../assets/recent.svg";
import close from "../assets/close.svg";

export default function RecentWords({ recentWords }) {
  const currentTime = Date.now();
  return (
    <section className="w-full">
      <div>
        <h2 className="text-xs font-bold text-[var(--primary-color)]">TODAY</h2>

        {recentWords.map((wordObject, index) => {
          if (currentTime - wordObject.searchedAt < 86400000) {
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
                <img className="icon" src={close} alt="Delete the word." />
              </div>
            );
          }
        })}
      </div>

      <div>
        <h2 className="text-xs font-bold text-[var(--primary-color)]">
          YESTERDAY
        </h2>
        {recentWords.map((wordObject, index) => {
          if (
            currentTime - wordObject.searchedAt > 86400000 &&
            currentTime - wordObject.searchedAt < 172800000
          ) {
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
                <img className="icon" src={close} alt="Delete the word." />
              </div>
            );
          }
        })}
      </div>
      <div>
        <h2 className="text-xs font-bold text-[var(--primary-color)]">
          THIS WEEK
        </h2>
        {recentWords.map((wordObject, index) => {
          if (
            currentTime - wordObject.searchedAt > 172800000 &&
            currentTime - wordObject.searchedAt < 604800000
          ) {
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
                <img className="icon" src={close} alt="Delete the word." />
              </div>
            );
          }
        })}
      </div>
    </section>
  );
}
