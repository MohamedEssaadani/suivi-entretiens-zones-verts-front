import React, { useEffect } from "react";
import {
  Card,
  Button,
  DropdownButton,
  Form,
  Modal,
  Container,
} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { listPersonnels } from "../actions/PersonnelsActions";

function AssignTask() {
  const dispatch = useDispatch();

  const { personnels } = useSelector((state) => state.personnels);

  useEffect(() => {
    dispatch(listPersonnels());
  }, [dispatch]);

  const handleSubmit = () => {
    console.log("Assigned!");
  };
  return (
    <Container>
      <Button variant="secondary" className="mb-3">
        <i class="fas fa-arrow-left"></i> Retour
      </Button>
      <Card>
        <Card.Header>
          <h3>Affecter une tâche</h3>
        </Card.Header>
        <Card.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="personnel">
              <Form.Label>Personnel</Form.Label>
              <Form.Control as="select" custom>
                {personnels.map((personnel) => {
                  return <option value="Casablanca">Mohamed</option>;
                })}
              </Form.Control>
            </Form.Group>

            <Form.Group controlId="tache">
              <Form.Label>Tâche</Form.Label>
              <Form.Control as="select" custom>
                <option value="Casablanca">1</option>
                <option value="El Jadida">2</option>
                <option value="Salé">3</option>
              </Form.Control>
            </Form.Group>

            <Form.Group controlId="dateRealisation">
              <Form.Label>Date de réalisation</Form.Label>
              <Form.Control type="date"></Form.Control>
            </Form.Group>
          </Form>
        </Card.Body>
        <Card.Footer>
          <Button type="submit" variant="primary" block onClick={handleSubmit}>
            <i className="fas fa-check"></i> Affecter
          </Button>
        </Card.Footer>
      </Card>
    </Container>
  );
}

export default AssignTask;
