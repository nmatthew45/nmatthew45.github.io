import "./css/Info.css";

import Container from "react-bootstrap/Container";

import Picture from "./Picture";
import Contact from "./Contact";


function Info() {
  return (
    <Container fluid>
      <Picture />
      <h1 className="myName">Matthew Nguyen</h1>
      <p className="myBio">A React Developer based in Westminster, California</p>
      <Contact />
    </Container>
  );
}

export default Info;
