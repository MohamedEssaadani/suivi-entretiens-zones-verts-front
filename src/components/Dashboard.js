import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { listPersonnelsTotal } from "../actions/PersonnelsActions";
import { listZonesVertsTotal } from "../actions/ZonesVertsActions";

function Dashboard() {
  const dispatch = useDispatch();

  const { totalPersonnels } = useSelector((state) => state.personnelsTotal);
  const { totalZonesVerts } = useSelector((state) => state.zoneVertsTotal);

  useEffect(() => {
    dispatch(listPersonnelsTotal());
    dispatch(listZonesVertsTotal());
  }, [dispatch]);
  return (
    <>
      <div class="container-fluid">
        <div class="d-sm-flex align-items-center justify-content-between mb-4">
          <h1 class="h3 mb-0 text-gray-800">
            <i className="fas fa-fw fa-tachometer-alt"></i>
            Dashboard
          </h1>
        </div>

        <div class="row">
          <div class="col-xl-3 col-md-6 mb-4">
            <div class="card border-left-success shadow h-100 py-2">
              <div class="card-body">
                <div class="row no-gutters align-items-center">
                  <div class="col mr-2">
                    <div class="text-xs font-weight-bold text-success text-uppercase mb-1">
                      Zones Verts
                    </div>
                    <div class="h5 mb-0 font-weight-bold text-gray-800">
                      {totalZonesVerts}
                    </div>
                  </div>
                  <div class="col-auto">
                    <i className="fas fa-chart-area"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="col-xl-3 col-md-6 mb-4">
            <div class="card border-left-primary shadow h-100 py-2">
              <div class="card-body">
                <div class="row no-gutters align-items-center">
                  <div class="col mr-2">
                    <div class="text-xs font-weight-bold text-primary text-uppercase mb-1">
                      Personnels
                    </div>
                    <div class="h5 mb-0 font-weight-bold text-gray-800">
                      {totalPersonnels}
                    </div>
                  </div>
                  <div class="col-auto">
                    <i className="fas fa-users"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="col-xl-3 col-md-6 mb-4">
            <div class="card border-left-danger shadow h-100 py-2">
              <div class="card-body">
                <div class="row no-gutters align-items-center">
                  <div class="col mr-2">
                    <div class="text-xs font-weight-bold text-danger text-uppercase mb-1">
                      Taches non effectué
                    </div>
                    <div class="row no-gutters align-items-center">
                      <div class="col-auto">
                        <div class="h5 mb-0 mr-3 font-weight-bold text-danger">
                          22
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-auto">
                    <i class="fas fa-clipboard-list fa-2x text-gray-300"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="col-xl-3 col-md-6 mb-4">
            <div class="card border-left-success shadow h-100 py-2">
              <div class="card-body">
                <div class="row no-gutters align-items-center">
                  <div class="col mr-2">
                    <div class="text-xs font-weight-bold text-success text-uppercase mb-1">
                      Taches effectué
                    </div>
                    <div class="h5 mb-0 font-weight-bold text-gray-800">18</div>
                  </div>
                  <div class="col-auto">
                    <i class="fas fa-clipboard-list fa-2x text-gray-300"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
