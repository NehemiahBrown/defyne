import clock from "../assets/recent.svg";
import close from "../assets/close.svg";

export default function RecentWords({ recentWords }) {
  const currentTime = Date.now();
  return (
    <section className="w-full">
      <div>
        <h2 className="text-xs font-bold text-[var(--soft-text-light)]">
          TODAY
        </h2>

        {recentWords.map((wordObject, index) => {
          if (currentTime - wordObject.searchedAt < 86400000) {
            return (
              <div
                key={`${wordObject.word}-${index}`}
                id="recentContainer"
                className="flex w-full justify-between bg-[var(--surface-color-light)] my-4 p-4 border border-[var(--border-light)] rounded-lg"
              >
                <div id="imgWordContainer" className="flex items-center gap-3">
                  <div id="clockImg">
                    <img
                      className="w-8 border border-[var(--border-light)] rounded p-1"
                      src={clock}
                      alt="Recent word icon."
                    ></img>
                  </div>
                  <div id="wordWordClass">
                    <p className="font-bold text-xl">{wordObject.word}</p>
                    <p className="italic text-sm">
                      {wordObject.wordClasses?.[0]?.partOfSpeech}
                    </p>
                  </div>
                </div>
                <img src={close} alt="Delete the word." />
              </div>
            );
          }
        })}
      </div>
      <div>
        <h2 className="text-xs font-bold text-[var(--soft-text-light)]">
          YESTERDAY
        </h2>
      </div>
      <div>
        <h2 className="text-xs font-bold text-[var(--soft-text-light)]">
          THIS WEEK
        </h2>
      </div>
    </section>
  );
}
