import React from "react";
import { Container, Card, Form, Button } from "react-bootstrap";

function Login() {
  return (
    <Container>
      <Card>
        <Card.Header>
          <h3>S'Authentifier</h3>
        </Card.Header>
        <Card.Body>
          <Form>
            <Form.Group controlId="login">
              <Form.Label>Login: </Form.Label>
              <Form.Control
                type="text"
                placeholder="login"
                // value={adresse}
                // onChange={(e) => setAdresse(e.target.value)}
              ></Form.Control>
            </Form.Group>
            <Form.Group controlId="password">
              <Form.Label>Mot de passe: </Form.Label>
              <Form.Control
                type="password"
                placeholder="mot de passe"
                // value={adresse}
                // onChange={(e) => setAdresse(e.target.value)}
              ></Form.Control>
            </Form.Group>
          </Form>
        </Card.Body>
        <Card.Footer>
          <Button type="submit" variant="primary" block>
            <i className="fas fa-check"></i> Se Connecter
          </Button>
        </Card.Footer>
      </Card>
    </Container>
  );
}

export default Login;
