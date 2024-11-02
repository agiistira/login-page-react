import { Container } from "react-bootstrap";

function Footer() {
  return (
    <div>
      <footer className="bg-primary text-white py-3" fixed="bottom">
        <Container className="text-center">
          <p>&copy; 2024 Your Company. All Rights Reserved.</p>
        </Container>
      </footer>
    </div>
  );
}

export default Footer;
