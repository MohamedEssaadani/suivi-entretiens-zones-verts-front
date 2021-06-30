import React, { useEffect, useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { listTypeZonesVerts } from "../actions/TypeZonesVertsActions";
import { createZoneVert, listZonesVerts } from "../actions/ZonesVertsActions";

function AddZoneVert({ showCreateForm, handleCloseCreateForm }) {
  const dispatch = useDispatch();

  const [nom, setNom] = useState("");
  const [adresse, setAdresse] = useState("");
  const [longitude, setLongitude] = useState(0);
  const [latitude, setLatitude] = useState(0);
  const [surface, setSurface] = useState(0);
  const [ville, setVille] = useState("");
  const [date, setDate] = useState(new Date());

  const { typeZoneVerts } = useSelector((state) => state.typeZoneVerts);

  useEffect(() => {
    dispatch(listTypeZonesVerts());
  }, [dispatch]);

  const handleSubmit = () => {
    const zoneVert = {
      nom,
      adresse,
      longitude,
      latitude,
      surface,
      ville,
      date,
      createdDate: new Date(),
    };
    dispatch(createZoneVert(zoneVert));
    dispatch(listZonesVerts());
    handleCloseCreateForm();
  };
  const handleSelectChange = (e) => {
    setVille(e.target.value);
  };

  return (
    <Modal show={showCreateForm} onHide={handleCloseCreateForm}>
      <Modal.Header closeButton>
        <Modal.Title>
          <i className="fas fa-chart-area"></i> Nouvelle zone vert
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
          <Form.Group controlId="adresse">
            <Form.Label>Adresse</Form.Label>
            <Form.Control
              type="text"
              placeholder="Saisi l'adresse ici"
              value={adresse}
              onChange={(e) => setAdresse(e.target.value)}
            ></Form.Control>
          </Form.Group>

          <Form.Group controlId="typeZone">
            <Form.Label>Type Zone</Form.Label>
            <Form.Control as="select" custom>
              {typeZoneVerts.map((type) => {
                return <option value={type.nom}>{type.nom}</option>;
              })}
            </Form.Control>
          </Form.Group>

          <Form.Group controlId="longitude">
            <Form.Label>Longitude</Form.Label>
            <Form.Control
              type="text"
              placeholder="Saisi longitude ici"
              value={longitude}
              onChange={(e) => setLongitude(e.target.value)}
            ></Form.Control>
          </Form.Group>
          <Form.Group controlId="latitude">
            <Form.Label>Latitude</Form.Label>
            <Form.Control
              type="text"
              placeholder="Entrer latitude ici"
              value={latitude}
              onChange={(e) => setLatitude(e.target.value)}
            ></Form.Control>
          </Form.Group>
          <Form.Group controlId="surface">
            <Form.Label>Surface</Form.Label>
            <Form.Control
              type="text"
              placeholder="Entrer le surface ici"
              value={surface}
              onChange={(e) => setSurface(e.target.value)}
            ></Form.Control>
          </Form.Group>
          <Form.Group controlId="anneeDemarage">
            <Form.Label>Année de démarage</Form.Label>
            <Form.Control
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            ></Form.Control>
          </Form.Group>
          <Form.Group controlId="ville">
            <Form.Label>Ville</Form.Label>
            <Form.Control
              as="select"
              value={ville}
              onChange={handleSelectChange}
              custom
            >
              <option value="Casablanca">Casablanca</option>
              <option value="El Jadida">El Jadida</option>
              <option value="Salé">Salé</option>
              <option value="Safi">Safi</option>
            </Form.Control>
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

export default AddZoneVert;
