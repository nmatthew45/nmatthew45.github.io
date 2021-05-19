import Container from "react-bootstrap/Container";

import Picture from "./Picture";
import About from "./About";
import Contact from "./Contact";

function Home() {
  return (
    <Container fluid style={{ flex: "1" }}>
      <Picture />
      <About />
      <Contact />
    </Container>
  );
}

export default Home;
