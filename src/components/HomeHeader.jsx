import heart from "../assets/heart.svg";
import recent from "../assets/recent.svg";
import lightmode from "../assets/sun.svg";

export default function HomeHeader() {
  return (
    <>
      <header className="flex justify-between items-center bg-[var(--surface-color-light)] p-6 h-12">
        <div>
          <a className="text-xl">defyne.</a>
        </div>
        <div className="flex gap-3">
          <img
            className="w-8 border border-[var(--border-light)] rounded-lg p-1"
            src={heart}
            alt="Favorite a word"
          />
          <img
            className="w-8 border border-[var(--border-light)] rounded-lg p-1"
            src={recent}
            alt="Recent searches"
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
