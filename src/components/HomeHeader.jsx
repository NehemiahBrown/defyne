import heart from "../assets/heart.svg";
import recent from "../assets/recent.svg";
import sun from "../assets/sun.svg";
import moon from "../assets/moon.svg";

import { useState } from "react";

export default function HomeHeader({ view, setView, toggleTheme }) {
  const [isLightImg, setisLightImg] = useState(true);

  function toggleImg() {
    setisLightImg((currentImg) => !currentImg);
  }

  return (
    <>
      <header className="flex justify-between items-center w-full bg-[var(--surface-color)] p-6 h-12">
        <div onClick={() => setView("home")}>
          <a className="text-xl text-[var(--primary-text)] cursor-pointer">
            de<span className="text-[var(--primary-color)]">fyne</span>
          </a>
        </div>
        <div className="flex gap-3">
          <img
            className="icon w-8 border border-[var(--border)] rounded-lg p-1 hover:scale-90 active:opacity-30 cursor-pointer"
            src={heart}
            alt="Favorite a word"
            onClick={() => setView("saved")}
          />
          <img
            className="icon w-8 border border-[var(--border)] rounded-lg p-1 hover:scale-90 active:opacity-30 cursor-pointer"
            src={recent}
            alt="Recent searches"
            onClick={() => setView("recent")}
          />
          <img
            onClickCapture={() => {
              toggleImg();
              toggleTheme();
            }}
            className="icon w-8 border border-[var(--border)] rounded-lg p-1 hover:scale-90 active:opacity-30 cursor-pointer"
            src={isLightImg ? `${sun}` : `${moon}`}
            alt="Dark mode"
          />
        </div>
      </header>
    </>
  );
}
