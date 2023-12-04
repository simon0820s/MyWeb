import "./styles.css";

const Nav = () => {
  return (
    <div className="nav-container">
      <video className="nav-video" autoPlay loop muted>
        <source src="public/nav-background-video.mp4" type="video/mp4" />
      </video>
      <div className="nav-title-container">
        <h2 className="nav-title">Sar</h2>
      </div>
    </div>
  );
};

export default Nav;
