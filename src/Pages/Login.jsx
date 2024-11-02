import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "../Styles/Login.css";
import formBackground from "../assets/form-bg.png";

function Login() {
  return (
    <div className="content">
      <Container className="formPage justify-content-center align-items-center" style={{ width: "500px" }}>
        <Row>
          <Col>
            <Form>
              <p className="tittle">SMK NEGERI 9 BATAM</p>
              <p>Silahkan Login dengan username dan password yang anda miliki</p>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control type="email" placeholder="Username" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="Password">
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>
              <Button variant="warning" type="submit">
                <p>LOGIN</p>
              </Button>
              <p className="license">Copyright SMK Negeri 9 Batam</p>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Login;
