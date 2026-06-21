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

import Footer from "./components/Footer.jsx";

import recent from "./assets/recent.svg";
import heart from "./assets/heart.svg";

// Variables

function App() {
  const [homeSearchBar, setHomeSearchBar] = useState("");
  const [savedSearchBar, setSavedSearchBar] = useState("");
  const [wordData, setWordData] = useState(null);
  const [recentWords, setRecentWords] = useState([]);
  const [savedWords, setSavedWords] = useState([]);
  const [view, setView] = useState("home");
  const [lightMode, setLightMode] = useState(true);
  const [selectedWordClass, setSelectedWordClass] = useState("");
  const [activeFilter, setActiveFilter] = useState("");

  let visibleSavedWords = savedWords;

  if (activeFilter === "search") {
    visibleSavedWords = savedWords.filter((savedWord) => {
      return savedWord.word
        .toLowerCase()
        .includes(savedSearchBar.toLowerCase());
    });
  }

  if (activeFilter === "class") {
    visibleSavedWords = savedWords.filter((savedWord) => {
      return savedWord.wordClasses[0]?.partOfSpeech === selectedWordClass;
    });
  }

  function filterSavedWordClass(e) {
    const buttonWordClass = e.target.value;

    if (buttonWordClass === "") {
      setSelectedWordClass("");
      setSavedSearchBar("");
      setActiveFilter("");
    } else {
      setSelectedWordClass(buttonWordClass);
      setSavedSearchBar("");
      setActiveFilter("class");
    }
  }

  function reverseSavedWords() {
    const reversed = [...savedWords];
    reversed.reverse();
    setSavedWords(reversed);
  }

  function toggleTheme() {
    setLightMode((mode) => !mode);
  }

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
      searchedAt: Date.now(),
    };
  }
  function favoriteWord() {
    setSavedWords((current) => {
      const storedSavedWord = current.some((item) => {
        return item.word.toLowerCase() === wordData.word.toLowerCase();
      });
      if (storedSavedWord) {
        return current;
      }

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

      setRecentWords((current) => {
        const filteredRecentWords = current.filter((item) => {
          return item.word.toLowerCase() !== usedWordData.word.toLowerCase();
        });
        return [usedWordData, ...filteredRecentWords];
      });

      setHomeSearchBar("");
    } catch (error) {
      console.error(error.message);
    }
  }

  function clearRecentWords() {
    setRecentWords([]);
  }

  return (
    <div
      className={`${lightMode ? "" : "dark"} flex flex-col flex-1 bg-[var(--background-color)] min-h-screen`}
    >
      <HomeHeader
        className="w-full"
        view={view}
        setView={setView}
        toggleTheme={toggleTheme}
      />

      <main className="flex flex-col flex-1 items-center px-4 w-full max-w-full bg-[var(--background-color)]">
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
            <div className="flex flex-col sm:flex-row w-full gap-2">
              <WordList
                title="Recent"
                icon={recent}
                color="var(--primary-color)"
                words={recentWords}
              />
              <WordList
                title="Saved"
                icon={heart}
                color="var(--antonym)"
                words={savedWords}
              />
            </div>
          </>
        )}

        {view === "saved" && (
          <>
            <SavedHeader savedWords={visibleSavedWords} />
            <SavedSearchBar
              savedSearchBar={savedSearchBar}
              setSavedSearchBar={setSavedSearchBar}
              reverseSavedWords={reverseSavedWords}
              setSelectedWordClass={setSelectedWordClass}
              setActiveFilter={setActiveFilter}
            />
            <WordClassesSaved filterSavedWordClass={filterSavedWordClass} />
            <SavedWords savedWords={visibleSavedWords} />
          </>
        )}
        {view === "recent" && (
          <>
            <RecentHeader recentWords={recentWords} />
            <RecentInfo
              recentWords={recentWords}
              clearRecentWords={clearRecentWords}
            />
            <RecentWords recentWords={recentWords} />
          </>
        )}
      </main>
      <Footer />
    </div>
  );
}

export default App;
