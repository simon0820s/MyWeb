import AboutMeArticle from "../../components/AboutMeAricle";
import Layout from "../../components/Layout";
import Title from "../../components/Title";
import "./styles.css";

const AboutMe = () => {
  return (
    <section id="about-me">
      <Layout>
        <Title fontSize="60px">I'm.</Title>
        <AboutMeArticle />
      </Layout>
    </section>
  );
};

export default AboutMe;
