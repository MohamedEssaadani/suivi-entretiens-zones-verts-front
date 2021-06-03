import { Button } from "react-bootstrap"
import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Table } from "react-bootstrap"
import AddPersonnel from "./AddPersonnel"
import { listPersonnels } from "../actions/PersonnelsActions"
import Loader from "./Loader"
import Message from "./Message"

function Affectations() {
  const [showCreateForm, setShowCreateForm] = useState(false)

  const dispatch = useDispatch()

  const { loading, personnels, error } = useSelector(
    (state) => state.personnels
  )

  useEffect(() => {
    dispatch(listPersonnels())
  }, [dispatch])

  const handleCloseCreateForm = () => {
    setShowCreateForm(false)
  }

  return (
    <>
      <div className="container-fluid">
        <div className="d-sm-flex align-items-center justify-content-between mb-4">
          <h1 className="h3 mb-0 text-gray-800">
            {" "}
            <i className="fas fa-users"></i> Personnels
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
              <th>Prénom</th>
              <th>Salaire</th>
              <th>Télephone</th>
              <th>Cin</th>
              <th>
                <Button
                  className="btn btn-success"
                  onClick={() => setShowCreateForm(true)}
                >
                  <i className="fas fa-user-plus"></i>
                </Button>
              </th>
            </thead>
            <tbody>
              {personnels.map((personnel) => {
                return (
                  <tr key={personnels.indexOf(personnel)}>
                    <td>{personnel.nom}</td>
                    <td>{personnel.prenom}</td>
                    <td>{personnel.salaire}</td>
                    <td>{personnel.telephone}</td>
                    <td>{personnel.cin}</td>
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
                )
              })}
            </tbody>
          </Table>
        )}
      </div>

      <AddPersonnel
        showCreateForm={showCreateForm}
        handleCloseCreateForm={handleCloseCreateForm}
      />
    </>
  )
}

export default Affectations
