import AboutMeArticle from "../../components/AboutMeAricle";
import HorizontalSeparator from "../../components/HorizontalSeparator";
import Layout from "../../components/Layout";
import Title from "../../components/Title";
import "./styles.css";

const AboutMe = () => {
  return (
    <section id="about-me">
      <Layout>
        <Title fontSize="60px">I'm.</Title>
        <div className="about-me-article">
          <HorizontalSeparator />
          <AboutMeArticle />
        </div>
      </Layout>
    </section>
  );
};

export default AboutMe;
