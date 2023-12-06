import Title from "../Title";
import "./styles.css";

const AboutMeArticle = () => {
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
          <Title fontSize="40px">About me</Title>
          <div>
            <span className="vertical-bar"></span>
            <ul className="normal-text about-me-list">
              <li>* Seedling I’m currently learning React.js and Rust</li>
              <li>* All of my projects are available at https://github.com/simon0820s</li>
              <li>* Ask me about React, Next, ML, Blockchain, MongoDB</li>
              <li>* How to reach me simon0820s@gmail.com</li>
            </ul>
          </div>
        </div>
      </article>
    </div>
  );
};

export default AboutMeArticle;
