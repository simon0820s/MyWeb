import "./styles.css";

const Nav = () => {
  return (
    <div className="nav-container">
      <video className="nav-video" autoPlay loop muted>
        <source src="public/nav-background-video.mp4" type="video/mp4" />
      </video>
      <h2 className="nav-title">Sar</h2>
    </div>
  );
};

export default Nav;
