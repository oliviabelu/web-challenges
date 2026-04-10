import "./styles.css";

function Article() {
  return (
    <article>
      <h2 className="article__title">My newest Article</h2>
      <label htmlFor="my-input"></label>
      <input id="my-input"></input>
      <a
        href="https://de.wikipedia.org/wiki/10._April"
        className="article__link"
      >
        Was ist heute passiert?
      </a>
    </article>
  );
}

export default function App() {
  return Article();
}
