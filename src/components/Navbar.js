import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import resume from "../images/resume.pdf";

function Navigationbar() {
  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand href="/">Matthew Nguyen</Navbar.Brand>
      <Nav>
        <Nav.Item>
          <Nav.Link target="_blank" rel="noreferrer" href={resume}>
            Resume
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/projects">Projects</Nav.Link>
        </Nav.Item>
      </Nav>
    </Navbar>
  );
}

export default Navigationbar;
