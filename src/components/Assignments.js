import { Button, FormCheck } from "react-bootstrap";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Table } from "react-bootstrap";
import AddPersonnel from "./AddPersonnel";
import { getPersonnelById, listPersonnels } from "../actions/PersonnelsActions";
import Loader from "./Loader";
import Message from "./Message";
import { Link } from "react-router-dom";
import { assignmentsList } from "../actions/AffectationsActions";

function Assignments() {
  const dispatch = useDispatch();

  const { loading, assignments, error } = useSelector(
    (state) => state.assignments
  );

  useEffect(() => {
    dispatch(assignmentsList());
  }, [dispatch]);

  return (
    <>
      <div className="container-fluid">
        <div className="d-sm-flex align-items-center justify-content-between mb-4">
          <h1 className="h3 mb-0 text-gray-800">
            <i className="fas fa-users"></i> Affectations
          </h1>
        </div>
        {loading ? (
          <Loader />
        ) : error ? (
          <Message variant="danger" text={error} />
        ) : (
          <Table className="table-sm" striped hover bordered responsive>
            <thead>
              <th>Oeuvrier</th>
              <th>Tâche</th>
              <th>Date Réalisation</th>
              <th>Effectué</th>
              <th>
                <Link className="btn btn-success" to="/affecter-tache">
                  <i className="fas fa-user-plus"></i> Affecter une tâche
                </Link>
              </th>
            </thead>
            <tbody>
              {assignments.map((assignment) => {
                return (
                  <tr key={assignments.indexOf(assignment)}>
                    <td>{assignment.nom}</td>
                    <td>{assignment.prenom}</td>
                    <td>{assignment.dateRealisation}</td>
                    <td>
                      <FormCheck value={assignment.effectué}></FormCheck>
                    </td>
                    {/* <td>
                      <Button className="btn btn-primary">
                        <i className="fas fa-eye"></i>
                      </Button>{" "}
                      <Button className="btn btn-success">
                        <i className="fas fa-edit"></i>
                      </Button>{" "}
                      <Button className="btn btn-danger">
                        <i className="fas fa-trash"></i>
                      </Button>
                    </td> */}
                  </tr>
                );
              })}
            </tbody>
          </Table>
        )}
      </div>
    </>
  );
}

export default Assignments;
