import "./App.css";
import { useState } from "react";

import HomeHeader from "./components/HomeHeader.jsx";
import SearchBar from "./components/SearchBar.jsx";
import WordInfo from "./components/WordInfo.jsx";
import WordList from "./components/WordList.jsx";

import SavedHeader from "./components/SavedHeader.jsx";
import SavedSearchBar from "./components/SavedSearchBar.jsx";
import WordClassesSaved from "./components/WordClassesSaved.jsx";
import SavedWords from "./components/SavedWords.jsx";

import RecentHeader from "./components/RecentHeader.jsx";
import RecentInfo from "./components/RecentInfo.jsx";
import RecentWords from "./components/RecentWords.jsx";

import recent from "./assets/recent.svg";
import heart from "./assets/heart.svg";

const recentWords = [];
const savedWords = [];

// Variables

function App() {
  const [homeSearchBar, setHomeSearchBar] = useState("");
  const [wordData, setWordData] = useState(null);

  async function searchWord(e) {
    e.preventDefault();
    const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${homeSearchBar}`;

    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }

      const result = await response.json();
      setWordData(result);
      console.log(result);
    } catch (error) {
      console.error(error.message);
    }
  }

  return (
    <>
      <HomeHeader />
      <main className="flex flex-col items-center w-full px-4">
        <SearchBar
          homeSearchBar={homeSearchBar}
          setHomeSearchBar={setHomeSearchBar}
          searchWord={searchWord}
        />
        <WordInfo wordData={wordData} />
        <div className="flex w-full gap-2">
          <WordList
            title="Recent"
            icon={recent}
            color="var(--primary-color-light)"
            words={recentWords}
          />
          <WordList
            title="Saved"
            icon={heart}
            color="var(--antonym-light)"
            words={savedWords}
          />
        </div>
      </main>

      <main className="flex flex-col items-center w-full px-4">
        <SavedHeader />
        <SavedSearchBar />
        <WordClassesSaved />
        <SavedWords
          word="ephemeral"
          wordClass="adjective"
          pronounciation="/ɪˈfɛm.ər.əl/"
          sentence="Lasting for a very short time; transitory in nature."
          synonym="translent"
          antonym="permanent"
        />
      </main>

      <main className="flex flex-col w-full px-4">
        <RecentHeader />
        <RecentInfo />
        <RecentWords />
      </main>
    </>
  );
}

export default App;
