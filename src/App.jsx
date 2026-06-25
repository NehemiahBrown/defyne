import "./App.css";
import { auth } from "./firebase";
import { signInAnonymously } from "firebase/auth";
import { db } from "./firebase";
import { doc, setDoc, getDoc } from "firebase/firestore";
import { useState, useEffect } from "react";

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
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [hasLoadedSavedWords, setHasLoadedSavedWords] = useState(false);
  const [hasLoadedRecentWords, setHasLoadedRecentWords] = useState(false);
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

  useEffect(() => {
    signInAnonymously(auth)
      .then((response) => {
        setUser(response.user);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error.message);
        setLoading(false);
      });
  }, []);

  if (activeFilter === "search") {
    visibleSavedWords = savedWords.filter((savedWord) => {
      return savedWord.word
        .toLowerCase()
        .includes(savedSearchBar.toLowerCase());
    });
  }

  if (activeFilter === "class") {
    visibleSavedWords = savedWords.filter((savedWord) => {
      return savedWord.wordClasses?.[0]?.partOfSpeech === selectedWordClass;
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
      word: apiData?.[0]?.word || null,
      pronounciationText: apiData?.[0]?.phonetics?.[0]?.text || null,
      wordClasses: apiData?.[0]?.meanings || null,
      pronounciationAudio: apiData?.[0]?.phonetics?.[0]?.audio || null,
      definition:
        apiData?.[0]?.meanings?.[0]?.definitions?.[0]?.definition || null,
      sentence: apiData?.[0]?.meanings?.[0]?.definitions?.[0]?.example || null,
      synonyms: apiData?.[0]?.meanings?.[0]?.synonyms || null,
      antonyms: apiData?.[0]?.meanings?.[0]?.antonyms || null,
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

  async function saveSavedWords() {
    if (!user) return;

    try {
      await setDoc(
        doc(db, "users", user.uid),
        { savedWords: savedWords },
        { merge: true },
      );
      console.log("Saved word");
    } catch (error) {
      console.log(error);
    }
  }

  async function saveRecentWords() {
    if (!user) return;
    try {
      await setDoc(
        doc(db, "users", user.uid),
        { recentWords: recentWords },
        { merge: true },
      );
      console.log("Recent word");
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    if (user && hasLoadedSavedWords) {
      saveSavedWords();
    }
  }, [savedWords, user, hasLoadedSavedWords]);

  useEffect(() => {
    if (user && hasLoadedRecentWords) {
      saveRecentWords();
    }
  }, [recentWords, user, hasLoadedRecentWords]);

  async function loadSavedWords() {
    if (!user) return;

    try {
      const docSnap = await getDoc(doc(db, "users", user.uid));

      if (docSnap.exists()) {
        setSavedWords(docSnap.data().savedWords || []);
        setHasLoadedSavedWords(true);
        console.log("Loaded saved words");
      } else {
        setHasLoadedSavedWords(true);
      }
    } catch (error) {
      console.log(error);
    }
  }

  async function loadRecentWords() {
    if (!user) return;

    try {
      const docSnap = await getDoc(doc(db, "users", user.uid));

      if (docSnap.exists()) {
        setRecentWords(docSnap.data().recentWords || []);
        setHasLoadedRecentWords(true);
        console.log("Loaded Recent words");
      } else {
        setHasLoadedRecentWords(true);
      }
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    if (user) {
      loadSavedWords();
      loadRecentWords();
    }
  }, [user]);

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
  function clearSavedWords() {
    setSavedWords([]);
  }

  function deleteRecentWord(word) {
    setRecentWords((current) => {
      return current.filter((wordObject) => {
        return wordObject.word !== word;
      });
    });
  }

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-[var(--background-color)]">
        <div className="animate-bounce text-7xl">📖</div>

        <h2 className="mt-6 text-2xl font-bold text-[var(--primary-color)]">
          Opening Defyne...
        </h2>

        <p className="mt-2 text-[var(--primary-text)]">
          Loading your dictionary
        </p>

        <div className="flex gap-2 mt-6">
          <span className="w-2 h-2 rounded-full bg-[var(--primary-color)] animate-pulse"></span>
          <span
            className="w-2 h-2 rounded-full bg-[var(--primary-color)] animate-pulse"
            style={{ animationDelay: "150ms" }}
          ></span>
          <span
            className="w-2 h-2 rounded-full bg-[var(--primary-color)] animate-pulse"
            style={{ animationDelay: "300ms" }}
          ></span>
        </div>
      </div>
    );
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
              <WordInfo
                favoriteWord={favoriteWord}
                wordData={wordData}
                lightMode={lightMode}
                savedWords={savedWords}
              />
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
            <WordClassesSaved
              savedWords={savedWords}
              clearSavedWords={clearSavedWords}
              filterSavedWordClass={filterSavedWordClass}
            />
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
            <RecentWords
              recentWords={recentWords}
              deleteRecentWord={deleteRecentWord}
            />
          </>
        )}
      </main>
      <Footer />
    </div>
  );
}

export default App;
