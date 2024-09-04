import "./App.css";
import styles from "./components/main.module.css";
import React from "react";
import Article from "./pages/article";
import ArticlesList from "./pages/articlesList";
import Main from "./pages/main";
import { Routes, Route, NavLink } from "react-router-dom";
import Footer from "./components/footer";

function App() {
  return (
    <>
      <div className={styles.mainWrapper}>
        <div className={styles.navBar}>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "active-link" : "link")}
          >
            Главная
          </NavLink>
          <NavLink
            to="/articles"
            className={({ isActive }) => (isActive ? "active-link" : "link")}
          >
            Статьи
          </NavLink>
        </div>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/articles" element={<ArticlesList />} />
          <Route path="/article/:id" element={<Article />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
