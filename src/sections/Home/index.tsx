import Layout from "../../components/Layout";
import Title from "../../components/Title";
import HomeArticle from "../../components/HomeArticle";
import "./styles.css";

const Home = () => {
  return (
    <div className="home-container">
      
      <video className="home-video" autoPlay loop muted>
        <source src="public/video/home-background-video.mp4" type="video/mp4" />
      </video>

      <div className="bass">
        <Layout>
          <Title>SAR.</Title>
          <HomeArticle />
        </Layout>
      </div>
    </div>
  );
};

export default Home;
