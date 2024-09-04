import "./App.css";
import React from "react";
import Article from "./pages/article";
import ArticlesList from "./pages/articlesList";
import Main from "./pages/main";

function App() {
  return (
    <>
      <Main />
      <ArticlesList />
      <Article />
    </>
  );
}

export default App;
