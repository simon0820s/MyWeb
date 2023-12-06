import PrincipalButton from "../../components/PrincipalButton";
import Title from "../../components/Title";
import "./styles.css";

const Home = () => {
  return (
    <div className="home-container">

      <video className="home-video" autoPlay loop muted>
        <source src="public/video/home-background-video.mp4" type="video/mp4" />
      </video>
        <div className="title-container">
          <Title>SAR.</Title>
          <PrincipalButton />
        </div>
    </div>
  );
};

export default Home;
