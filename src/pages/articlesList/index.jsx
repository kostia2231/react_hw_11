import React from "react";
import { Link } from "react-router-dom";
import styles from "../../components/main.module.css";

const posts = [
  { id: 1, title: "Первая статья" },
  { id: 2, title: "Вторая статья" },
  { id: 3, title: "Третья статья" },
];

export default function ArticlesList() {
  return (
    <>
      <div>
        <ul className={styles.articlesList}>
          {posts.map((post) => (
            <li key={post.id}>
              <Link className={styles.link} to={`/article/${post.id}`}>
                {post.id}. {post.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
