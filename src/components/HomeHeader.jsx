import heart from "../assets/heart.svg";
import recent from "../assets/recent.svg";
import lightmode from "../assets/sun.svg";

export default function HomeHeader({ view, setView }) {
  return (
    <>
      <header className="flex justify-between items-center w-full bg-[var(--surface-color-light)] p-6 h-12">
        <div onClick={() => setView("home")}>
          <a className="text-xl">defyne.</a>
        </div>
        <div className="flex gap-3">
          <img
            className="w-8 border border-[var(--border-light)] rounded-lg p-1"
            src={heart}
            alt="Favorite a word"
            onClick={() => setView("saved")}
          />
          <img
            className="w-8 border border-[var(--border-light)] rounded-lg p-1"
            src={recent}
            alt="Recent searches"
            onClick={() => setView("recent")}
          />
          <img
            className="w-8 border border-[var(--border-light)] rounded-lg p-1"
            src={lightmode}
            alt="Light mode"
          />
        </div>
      </header>
    </>
  );
}
