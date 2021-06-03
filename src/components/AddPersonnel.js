import React, { useState } from "react";
import { Button, DropdownButton, Form, Modal } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { createPersonnel, listPersonnels } from "../actions/PersonnelsActions";

function AddPersonnel({
  getPersonnels,
  showCreateForm,
  handleCloseCreateForm,
}) {
  const dispatch = useDispatch();
  const [nom, setNom] = useState("");
  const [prenom, setPrenom] = useState("");
  const [dateNaissance, setDateNaissance] = useState(new Date());
  const [motDePasse, setMotDePasse] = useState("");
  const [telephone, setTelephone] = useState("");
  const [cin, setCin] = useState("");
  const [dateEmbauche, setDateEmbauche] = useState(new Date());
  const [salaire, setSalaire] = useState(0);

  const handleSubmit = () => {
    const personnel = {
      nom,
      prenom,
      dateNaissance,
      motDePasse,
      telephone,
      cin,
      dateEmbauche,
      salaire,
      createdDate: new Date(),
    };
    dispatch(createPersonnel(personnel));
    dispatch(listPersonnels());
    handleCloseCreateForm();
  };

  return (
    <Modal show={showCreateForm} onHide={handleCloseCreateForm}>
      <Modal.Header closeButton>
        <Modal.Title>
          <i className="fas fa-user"></i> Nouveau Personnel
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="nom">
            <Form.Label>Nom</Form.Label>
            <Form.Control
              type="text"
              placeholder="Saisi le nom ici"
              value={nom}
              onChange={(e) => setNom(e.target.value)}
            ></Form.Control>
          </Form.Group>
          <Form.Group controlId="prenom">
            <Form.Label>Prénom</Form.Label>
            <Form.Control
              type="text"
              placeholder="Saisi le prénom ici"
              value={prenom}
              onChange={(e) => setPrenom(e.target.value)}
            ></Form.Control>
          </Form.Group>
          <Form.Group controlId="dateNaissance">
            <Form.Label>Date Naissance</Form.Label>
            <Form.Control
              type="date"
              value={dateNaissance}
              onChange={(e) => setDateNaissance(e.target.value)}
            ></Form.Control>
          </Form.Group>
          <Form.Group controlId="motDePasse">
            <Form.Label>Mot de passe</Form.Label>
            <Form.Control
              type="password"
              placeholder="Entrer le mot de passe ici"
              value={motDePasse}
              onChange={(e) => setMotDePasse(e.target.value)}
            ></Form.Control>
          </Form.Group>
          <Form.Group controlId="telephone">
            <Form.Label>Téléphone</Form.Label>
            <Form.Control
              type="text"
              placeholder="Entrer le téléphone ici"
              value={telephone}
              onChange={(e) => setTelephone(e.target.value)}
            ></Form.Control>
          </Form.Group>

          <Form.Group controlId="cin">
            <Form.Label>Cin</Form.Label>
            <Form.Control
              type="text"
              placeholder="Entrer le cin ici"
              value={cin}
              onChange={(e) => setCin(e.target.value)}
            ></Form.Control>
          </Form.Group>
          <Form.Group controlId="salaire">
            <Form.Label>Salaire</Form.Label>
            <Form.Control
              type="text"
              placeholder="Entrer le salaire ici"
              value={salaire}
              onChange={(e) => setSalaire(e.target.value)}
            ></Form.Control>
          </Form.Group>
          <Form.Group controlId="dateNaissance">
            <Form.Label>Date Embauche</Form.Label>
            <Form.Control
              type="date"
              value={dateEmbauche}
              onChange={(e) => setDateEmbauche(e.target.value)}
            ></Form.Control>
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleCloseCreateForm} block>
          <i className="fas fa-trash"></i> Fermer
        </Button>
        <Button type="submit" variant="primary" block onClick={handleSubmit}>
          <i className="fas fa-plus"></i> Ajouter
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default AddPersonnel;
