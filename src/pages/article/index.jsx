import React from "react";
import { useParams, Link } from "react-router-dom";
import styles from "../../components/main.module.css";

const articles = [
  { id: 1, title: "Первая статья", content: "Это текст первой статьи" },
  { id: 2, title: "Вторая статья", content: "Это текст второй статьи" },
  { id: 3, title: "Третья статья", content: "Это текст третьей статьи" },
];

export default function Article() {
  const { id } = useParams();
  const article = articles.find((article) => article.id === parseInt(id));

  return (
    <div className={styles.article}>
      <div>
        {article ? (
          <>
            <h1>{article.title}</h1>
            <p>{article.content}</p>
          </>
        ) : (
          <p>Post not found</p>
        )}
      </div>
      <Link to={"/articles"}>Назад</Link>
    </div>
  );
}
