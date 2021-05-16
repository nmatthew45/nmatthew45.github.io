import "./App.css";
import resume from "./images/resume.pdf";
import picture from "./images/me.jpeg";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import Image from "react-bootstrap/Image";

function App() {
  return (
    <div>
      <div className="pictureDiv">
        <Image className="picture" src={picture} roundedCircle />
      </div>
      <h1>Matthew Nguyen</h1>
      <p>React Developer based in Westminster, California</p>
      <Container className="resumeButton" fluid>
        <a href={resume}>
          <i class="fas fa-file contactIcon"></i>
        </a>
        <a href="mailto:nmatthew45@gmail.com">
          <i class="fas fa-envelope contactIcon"></i>
        </a>
        <a href="https://www.github.com/nmatthew45">
          <i class="fab fa-github contactIcon"></i>
        </a>
        <a href="https://www.linkedin.com/in/matthewn45/">
          <i class="fab fa-linkedin-in contactIcon"></i>
        </a>
      </Container>
    </div>
  );
}

export default App;
