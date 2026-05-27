import "./App.css";
import { useState } from "react";

import HomeHeader from "./components/HomeHeader.jsx";
import SearchBar from "./components/SearchBar.jsx";
import WordInfo from "./components/WordInfo.jsx";
import WordList from "./components/WordList.jsx";
import WordPlaceholder from "./components/WordPlaceholder.jsx";

import SavedHeader from "./components/SavedHeader.jsx";
import SavedSearchBar from "./components/SavedSearchBar.jsx";
import WordClassesSaved from "./components/WordClassesSaved.jsx";
import SavedWords from "./components/SavedWords.jsx";

import RecentHeader from "./components/RecentHeader.jsx";
import RecentInfo from "./components/RecentInfo.jsx";
import RecentWords from "./components/RecentWords.jsx";

import recent from "./assets/recent.svg";
import heart from "./assets/heart.svg";

// Variables

function App() {
  const [homeSearchBar, setHomeSearchBar] = useState("");
  const [wordData, setWordData] = useState(null);
  const [recentWords, setRecentWords] = useState([]);
  const [savedWords, setSavedWords] = useState([]);
  const [view, setView] = useState("home");

  function createWordObject(apiData) {
    return {
      word: apiData?.[0]?.word,
      pronounciationText: apiData?.[0]?.phonetics?.[0]?.text,
      wordClasses: apiData?.[0]?.meanings || [],
      pronounciationAudio: apiData?.[0]?.phonetics?.[0]?.audio,
      definition: apiData?.[0]?.meanings?.[0]?.definitions?.[0]?.definition,
      sentence: apiData?.[0]?.meanings?.[0]?.definitions?.[0]?.example,
      synonyms: apiData?.[0]?.meanings?.[0]?.synonyms || [],
      antonyms: apiData?.[0]?.meanings?.[0]?.antonyms || [],
    };
  }
  function favoriteWord() {
    setSavedWords((current) => {
      return [...current, wordData];
    });
  }

  async function searchWord(e) {
    e.preventDefault();
    const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${homeSearchBar}`;

    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }

      const result = await response.json();
      const usedWordData = createWordObject(result);
      setWordData(usedWordData);
      console.log(usedWordData);
      setRecentWords((current) => {
        return [homeSearchBar.toLowerCase(), ...current];
      });
    } catch (error) {
      console.error(error.message);
    }
  }

  return (
    <>
      <main className="flex flex-col items-center w-full max-w-full">
        <HomeHeader className="w-full" view={view} setView={setView} />
        {view === "home" && (
          <>
            <SearchBar
              homeSearchBar={homeSearchBar}
              setHomeSearchBar={setHomeSearchBar}
              searchWord={searchWord}
            />
            {wordData ? (
              <WordInfo favoriteWord={favoriteWord} wordData={wordData} />
            ) : (
              <WordPlaceholder />
            )}
            <div className="flex  flex-col sm:flex-row w-full gap-2">
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
          </>
        )}

        {view === "saved" && (
          <>
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
          </>
        )}
        {view === "recent" && (
          <>
            <RecentHeader />
            <RecentInfo />
            <RecentWords />
          </>
        )}
      </main>
    </>
  );
}

export default App;
