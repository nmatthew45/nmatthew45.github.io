import "./css/Contact.css";
import resume from "../images/resume.pdf";
import Container from "react-bootstrap/Container";

function Contact() {
  return (
    <Container fluid style={{ textAlign: "center" }}>
      <div>
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
      </div>
    </Container>
  );
}

export default Contact;
