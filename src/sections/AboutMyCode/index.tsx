import Layout from "../../components/Layout";
import "./styles.css";

const AboutMyCode = () => {
  return (
    <section id="about-my-code">
      <Layout>
        <article className="about-my-code-article">
          <h2 className="title special-text">About my code</h2>
          <span />
          <p className="normal-text code-article-text">
            I have experience in programming, artificial intelligence, front-end
            and back-end. I strive to write clear and easy-to-maintain code,
            always aiming for excellence and adaptability in my projects.
          </p>
          <a href="https://github.com/simon0820s" className="git-button" target="_blank" title="GitHub">
            Look at my code
          </a>
        </article>
        <div className="my-photo-container">
          <img src="./img/myPhotoBackground.jpeg" alt="my-photo-background"  className="my-photo-background"/>
          <img src="./img/myPhotoBody.png" alt="my-photo-body" className="my-photo-body" />
        </div>
      </Layout>
    </section>
  );
};

export default AboutMyCode;
