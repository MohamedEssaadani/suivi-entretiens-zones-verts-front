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
import { listTaches } from "../actions/TachesActions";

function AssignTask() {
  const dispatch = useDispatch();

  const { personnels } = useSelector((state) => state.personnels);
  const { taches } = useSelector((state) => state.taches);

  useEffect(() => {
    dispatch(listTaches());
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
                  return <option value={personnel.nom}>{personnel.nom}</option>;
                })}
              </Form.Control>
            </Form.Group>

            <Form.Group controlId="tache">
              <Form.Label>Tache</Form.Label>
              <Form.Control as="select" custom>
                {taches.map((tache) => {
                  return <option value={tache.nom}>{tache.nom}</option>;
                })}
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
