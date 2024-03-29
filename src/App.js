import {
  Navbar,
  Header,
  Frontend,
  Fullstack,
  Tech,
  Contact,
  About,
} from "./containers";
import "./App.css";

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <div className="gold_rim"></div>
      <Header />
      <About />

      <Frontend />

      <Fullstack />

      <Tech />

      <Contact />
    </div>
  );
};

export default App;
