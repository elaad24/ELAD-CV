import "./App.css";
import NavBar from "./components/NavBar";
import Nav from "./components/nav2";
import Header from "./components/Header";
import Social from "./components/Social";
import Education from "./components/Education";
import Projects from "./components/Projects";
import Army from "./components/Army";
import Qualities from "./components/Qualities";
function App() {
  return (
    <div className="body d-flex  ">
      <Nav />
      <div className="main">
        <Header />
        <Social />
        <Education />
        <Projects />
        <Army />
        <Qualities />
      </div>
    </div>
  );
}

export default App;
