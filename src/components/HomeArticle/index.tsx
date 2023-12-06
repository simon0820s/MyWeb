import Title from "../Title";
import "./styles.css";

const HomeArticle = () => {
  return (
    <div className="home-article-container">
      <article className="home-article">
        <p className="normal-text">
          Passionate web full-stack, machine learning and Rust developer;
          currently i'm studying
          <span className="special-text"> Computer science </span>at the
          National University of Colombia.
        </p>
        <div className="about-me-container">
          <Title>About me</Title>
          <div>
            <span className="vertical-bar"></span>
            <ul className="normal-text about-me-list">
              <li>*</li>
              <li>*</li>
              <li>*</li>
              <li>*</li>
            </ul>
          </div>
        </div>
      </article>
    </div>
  );
};

export default HomeArticle;
