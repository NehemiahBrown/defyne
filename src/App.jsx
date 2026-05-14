import "./App.css";
import HomeHeader from "./components/HomeHeader.jsx";
import SearchBar from "./components/SearchBar.jsx";
import WordInfo from "./components/WordInfo.jsx";
import WordList from "./components/WordList.jsx";
import recent from "./assets/recent.svg";
import heart from "./assets/heart.svg";

const recentWords = ["ephemeral", "serendipity", "translent"];
const savedWords = ["resilient", "eloquent", "enduring"];

function App() {
  return (
    <>
      <HomeHeader />
      <main className="flex flex-col items-center w-full px-4">
        <SearchBar />
        <WordInfo />
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
    </>
  );
}

export default App;
