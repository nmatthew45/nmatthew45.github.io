import "./App.css";
import picture from "./images/me.jpeg";
import Image from "react-bootstrap/Image";
import Contact from "./components/Contact";

function App() {
  return (
    <div>
      <div className="pictureDiv">
        <Image className="picture" src={picture} roundedCircle />
      </div>
      <h1>Matthew Nguyen</h1>
      <p>React Developer based in Westminster, California</p>
      <Contact />
    </div>
  );
}

export default App;
