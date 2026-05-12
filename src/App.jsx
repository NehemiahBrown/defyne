import { useState } from "react";
import { createRoot } from "react-dom/client";
import "./App.css";
import HomeHeader from "./components/HomeHeader.jsx";
import SearchBar from "./components/SearchBar.jsx";
import WordInfo from "./components/WordInfo.jsx";
import WordList from "./components/WordList.jsx";

function App() {
  return (
    <>
      <HomeHeader />
      <SearchBar />
      <WordInfo />
      <div className="flex">
        <WordList title="Recent" />
        <WordList title="Saved" />
      </div>
    </>
  );
}

export default App;
