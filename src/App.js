import Navbar from "./component/NavBar/navbar";
import Landing from "./component/landing page/landing";
import About from "./component/about/about";
import Skill from "./component/skill/skill";
import Project from "./component/project/project";
import Contact from "./component/contact/contact";
import Footer from "./component/footer/footer";
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Landing/>
      <About/>
      <Skill/>
      <Project/>
      <Contact/>
       <Footer/>
    </div>
  );
}

export default App;
