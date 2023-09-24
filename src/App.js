import {
  Navbar,
  Header,
  Frontend,
  Fullstack,
  Contact,
  Footer
} from "./containers";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Frontend />
      <Fullstack />
      <Contact />
      <Navbar />
      <Footer />
    </div>
  );
};

export default App;
