import {
  Navbar,
  Header,
  Frontend,
  Fullstack,
  Tech,
  Contact,
  Footer
} from "./containers";
import "./App.css";

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <div className="gold_rim"></div>
      <Header />
      <div className="gold_rim"></div>
      <Frontend />
      <div className="gold_rim"></div>
      <Fullstack />
      <div className="gold_rim"></div>
      <Tech />
      <div className="gold_rim"></div>
      <Contact />
      <div className="gold_rim"></div>
      <Footer />
    </div>
  );
};

export default App;
