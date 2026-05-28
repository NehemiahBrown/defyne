import heart from "../assets/heart.svg";
import recent from "../assets/recent.svg";
import sun from "../assets/sun.svg";
import moon from "../assets/moon.svg";

import { useState } from "react"

export default function HomeHeader({ view, setView }) {
const [isLightImg, setisLightImg] = useState(true)

function toggleImg(){
  setisLightImg(currentImg => !currentImg)
}

  return (
    <>
      <header className="flex justify-between items-center w-full bg-[var(--surface-color-light)] p-6 h-12">
        <div onClick={() => setView("home")}>
          <a className="text-xl cursor-pointer">de<span className="text-[var(--primary-color-light)]">fyne</span></a>
        </div>
        <div className="flex gap-3">
          <img
            className="w-8 border border-[var(--border-light)] rounded-lg p-1 cursor-pointer"
            src={heart}
            alt="Favorite a word"
            onClick={() => setView("saved")}
          />
          <img
            className="w-8 border border-[var(--border-light)] rounded-lg p-1 cursor-pointer"
            src={recent}
            alt="Recent searches"
            onClick={() => setView("recent")}
          />
          <img
            onClick={toggleImg}
            className="w-8 border border-[var(--border-light)] rounded-lg p-1 cursor-pointer"
            src={isLightImg ? `${sun}` : `${moon}`}
            alt="Dark mode"
          />
        </div>
      </header>
    </>
  );
}
