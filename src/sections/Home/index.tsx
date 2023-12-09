import PrincipalButton from "../../components/PrincipalButton";
import Title from "../../components/Title";
import "./styles.css";

const Home = () => {
  return (
    <section id="home">
      <div className="home-container">
        <video className="home-video" autoPlay loop muted>
          <source
            src="./video/home-background-video.mp4"
            type="video/mp4"
          />
        </video>
        <div className="title-container">
          <Title />
          <PrincipalButton />
        </div>
      </div>
    </section>
  );
};

export default Home;
