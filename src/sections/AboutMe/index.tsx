import AboutMeArticle from "../../components/AboutMeAricle";
import HorizontalSeparator from "../../components/HorizontalSeparator";
import Layout from "../../components/Layout";
import AboutMeTitle from "../../components/AboutMeTitle";
import ContactMe from "../../components/ContactMe";
import "./styles.css";

const AboutMe = () => {
  return (
    <section id="about-me">
      <Layout>
        <div className="about-me-container">
          <div className="about-me-left">
            <div className="about-me-article">
              <AboutMeTitle />
              <HorizontalSeparator />
              <AboutMeArticle />
            </div>
            <ContactMe />
          </div>
          <div className="about-me-rigth">Im the rigth Section</div>
        </div>
      </Layout>
    </section>
  );
};

export default AboutMe;
