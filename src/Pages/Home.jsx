import { Container, Button, Row, Col } from "react-bootstrap";
import "../assets/home.css";
import Product from "./Product";
import Image from "../assets/img.jpg";

function Home() {
  return (
    <div>
      <div className="hero-section d-flex align-items-center">
        <Container>
          <Row>
            <Col md={6}>
              <h1>Build Your Dream Website</h1>
              <p>Explore modern web design and bring your ideas to life with our easy-to-use platform.</p>
              <Button variant="primary" size="lg" className="me-2">
                Get Started
              </Button>
              <Button variant="outline-primary" size="lg">
                Learn More
              </Button>
            </Col>
            <Col md={6}>
              <img src={Image} alt="Landing illustration" className="img-fluid" />
            </Col>
          </Row>
        </Container>
      </div>
      <Product />
    </div>
  );
}

export default Home;
