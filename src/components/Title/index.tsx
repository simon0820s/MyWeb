import "./styles.css";

const Title = ({children}) => {
  return (
    <div className="home-title-container">
      <h2 className="home-title special-text">{children}</h2>
    </div>
  );
};

export default Title;
