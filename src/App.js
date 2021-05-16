import "./App.css";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Picture from "./components/Picture";

function App() {
  return (
    <div>
      <Picture />
      <h1>Matthew Nguyen</h1>
      <p>React Developer based in Westminster, California</p>
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
