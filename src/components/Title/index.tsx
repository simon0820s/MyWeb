import { ReactNode } from "react";
import "./styles.css";

interface TitleProps {
  fontSize: string,
  children: ReactNode;
}

const Title: React.FC<TitleProps> = ({children, fontSize}) => {

  const titleStile: React.CSSProperties = {
    fontSize: fontSize
  }

  return (
    <div className="home-title-container">
      <h2 style={titleStile} className="home-title special-text">{children}</h2>
    </div>
  );
};

export default Title;
