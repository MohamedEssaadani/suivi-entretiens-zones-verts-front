import { Button } from "react-bootstrap";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Table } from "react-bootstrap";
import AddZoneVert from "./AddZoneVert";
import { listZonesVerts } from "../actions/ZonesVertsActions";
import Loader from "./Loader";
import Message from "./Message";

function ZonesVerts() {
  const [showCreateForm, setShowCreateForm] = useState(false);

  const dispatch = useDispatch();

  const { loading, zonesVerts, error } = useSelector(
    (state) => state.zonesVerts
  );

  useEffect(() => {
    dispatch(listZonesVerts());
  }, [dispatch]);

  const handleCloseCreateForm = () => {
    setShowCreateForm(false);
  };

  return (
    <>
      <div className="container-fluid">
        <div className="d-sm-flex align-items-center justify-content-between mb-4">
          <h1 className="h3 mb-0 text-gray-800">
            {" "}
            <i className="fas fa-chart-area"></i> Zones verts
          </h1>
        </div>
        {loading ? (
          <Loader />
        ) : error ? (
          <Message variant="danger" text={error} />
        ) : (
          <Table className="table-sm" striped hover bordered responsive>
            <thead>
              <th>Nom</th>
              <th>Type</th>
              <th>Ville</th>
              <th>Surface</th>
              <th>Annee démarage</th>
              <th>
                <Button
                  className="btn btn-success"
                  onClick={() => setShowCreateForm(true)}
                >
                  <i className="fas fa-plus"></i> Nouvelle Zone
                </Button>
              </th>
            </thead>
            <tbody>
              {zonesVerts.map((zone) => {
                return (
                  <tr
                    key={zonesVerts
                      .sort((a, b) => (a.createdDate < b.createdDate ? 1 : -1))
                      .indexOf(zone)}
                  >
                    <td>{zone.nom}</td>
                    <td>{zone.typeZone.nom}</td>
                    <td>{zone.ville}</td>
                    <td>{zone.surface}</td>
                    <td>{zone.anneeDemarage}</td>
                    <td>
                      <Button className="btn btn-primary">
                        <i className="fas fa-eye"></i>
                      </Button>{" "}
                      <Button className="btn btn-success">
                        <i className="fas fa-edit"></i>
                      </Button>{" "}
                      <Button className="btn btn-danger">
                        <i className="fas fa-trash"></i>
                      </Button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        )}
      </div>

      <AddZoneVert
        showCreateForm={showCreateForm}
        handleCloseCreateForm={handleCloseCreateForm}
      />
    </>
  );
}

export default ZonesVerts;
