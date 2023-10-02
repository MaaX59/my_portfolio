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
      
      <Frontend />
      
      <Fullstack />
      
      <Tech />
      
      <Contact />
      
    </div>
  );
};

export default App;
