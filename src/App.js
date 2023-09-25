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
      <Header />
      <Frontend />
      <Fullstack />
      <Tech />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
