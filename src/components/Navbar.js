import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import resume from "../images/resume.pdf";

import { Link } from "react-router-dom";

function Navigationbar() {
  return (
    <Navbar sticky="top" bg="dark" variant="dark">
      <Navbar.Brand href="/">Matthew Nguyen</Navbar.Brand>
      <Nav>
        <Nav.Item>
          <Nav.Link
            style={{ color: "white" }}
            target="_blank"
            rel="noreferrer"
            href={resume}
          >
            Resume
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link>
            <Link style={{ color: "white" }} to="/projects">
              Projects
            </Link>
          </Nav.Link>
        </Nav.Item>
      </Nav>
    </Navbar>
  );
}

export default Navigationbar;
