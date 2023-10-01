import {
  Navbar,
  Header,
  Frontend,
  Fullstack,
  Tech,
  Contact
  
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
      
    </div>
  );
};

export default App;
