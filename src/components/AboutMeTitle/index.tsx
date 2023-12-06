import { useEffect, useRef, useState } from "react";
import "./styles.css";

const Title = () => {
  const textContainerRef = useRef<HTMLDivElement>(null);
  const [isAnimated, SetIsAnimated] = useState(false);

  useEffect(() => {
    const textContainer = textContainerRef.current;

    if (!textContainer) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            SetIsAnimated(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 }
    );

    observer.observe(textContainer);
    
    return () => {
      if (textContainer) {
        observer.unobserve(textContainer)
      }
    }
  }, []);

  const textContainerClass = isAnimated
    ? "about-text-container animated"
    : "about-text-container";

  return (
    <div ref={textContainerRef} className="about-title-container">
      <div className={textContainerClass}>
        <h2 className="special-text">Machine learning Engineer</h2>
        <h2 className="special-text">Rust Developer</h2>
        <h2 className="special-text">Web-fullstack Engineer</h2>
        <h2 className="special-text">Computer Science</h2>
        <h2 className="special-text">I'm</h2>
      </div>
    </div>
  );
};

export default Title;
