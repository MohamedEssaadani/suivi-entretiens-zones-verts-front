import React, { useEffect, useState } from "react";
import {
  Card,
  Button,
  DropdownButton,
  Form,
  Modal,
  Container,
} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { assignTask } from "../actions/AffectationsActions";
import { listPersonnels } from "../actions/PersonnelsActions";
import { listTaches } from "../actions/TachesActions";

function AssignTask({ history }) {
  const dispatch = useDispatch();
  const [personnel, setPersonnel] = useState(0);
  const [tache, setTache] = useState(0);
  const [dateRealisation, setDateRealisation] = useState(new Date());

  const { personnels } = useSelector((state) => state.personnels);
  const { taches } = useSelector((state) => state.taches);

  // const { affectation } = useSelector((state) => state.affectation);

  useEffect(() => {
    dispatch(listTaches());
    dispatch(listPersonnels());
  }, [dispatch]);

  const handleSubmit = () => {
    const affectation = {
      personnel: `${process.env.REACT_APP_URL}/personnels/${personnel}`,
      tache: `${process.env.REACT_APP_URL}/taches/${tache}`,
      dateRealisation,
      effectué: false,
    };

    dispatch(assignTask(affectation));
    //history.push("/affectations");
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
              <Form.Control
                as="select"
                custom
                onChange={(e) => setPersonnel(e.target.value)}
              >
                <option>---- Selectionner ---</option>
                {personnels.map((personnel) => {
                  return (
                    <option value={personnel.id} key={personnel.id}>
                      {personnel.nom} {personnel.prenom}
                    </option>
                  );
                })}
              </Form.Control>
            </Form.Group>

            <Form.Group controlId="tache">
              <Form.Label>Tache</Form.Label>
              <Form.Control
                as="select"
                custom
                onChange={(e) => setTache(e.target.value)}
              >
                <option>---- Selectionner ---</option>
                {taches.map((tache) => {
                  return (
                    <option value={tache.id} key={tache.id}>
                      {tache.nom}
                    </option>
                  );
                })}
              </Form.Control>
            </Form.Group>

            <Form.Group controlId="dateRealisation">
              <Form.Label>Date de réalisation</Form.Label>
              <Form.Control
                type="date"
                onChange={(e) => setDateRealisation(e.target.value)}
              ></Form.Control>
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
