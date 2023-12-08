import AboutMe from "./sections/AboutMe";
import AboutMyCode from "./sections/AboutMyCode";
import Home from "./sections/Home";

const App = () => {
  return (
    <div className="container">
      <Home />
      <AboutMe />
      <AboutMyCode /> 
    </div>
  );
};

export default App;
