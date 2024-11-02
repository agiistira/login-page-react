import { Container, Row, Col, Card } from "react-bootstrap";

function Product() {
  const features = [
    { title: "Fast Performance", description: "Our platform is optimized for speed." },
    { title: "Responsive Design", description: "Looks great on any device." },
    { title: "Easy to Customize", description: "Modify content with ease." },
    { title: "Easy to Customize", description: "Modify content with ease." },
    { title: "Easy to Customize", description: "Modify content with ease." },
    { title: "Easy to Customize", description: "Modify content with ease." },
    { title: "Easy to Customize", description: "Modify content with ease." },
    { title: "Easy to Customize", description: "Modify content with ease." },
    { title: "Easy to Customize", description: "Modify content with ease." },
  ];

  return (
    <Container id="features" className="py-5">
      <h2 className="text-center mb-4">Our Features</h2>
      <Row>
        {features.map((feature, index) => (
          <Col md={4} key={index} className="mb-3">
            <Card>
              <Card.Body>
                <Card.Title>{feature.title}</Card.Title>
                <Card.Text>{feature.description}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Product;
