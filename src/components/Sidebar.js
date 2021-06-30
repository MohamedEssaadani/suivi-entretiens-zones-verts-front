import React from "react";
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <>
      <ul
        className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion"
        id="accordionSidebar"
      >
        <a
          className="sidebar-brand d-flex align-items-center justify-content-center"
          href="index.html"
        >
          <div className="sidebar-brand-icon rotate-n-15">
            <i className="fas fa-chart-area"></i>
          </div>
          <div className="sidebar-brand-text mx-3">Zones Verts</div>
        </a>

        <hr className="sidebar-divider my-0" />

        <li className="nav-item active">
          <Link className="nav-link" to="/dashboard">
            <i className="fas fa-fw fa-tachometer-alt"></i>
            <span>Tableau de board</span>
          </Link>
        </li>

        <hr className="sidebar-divider" />

        <div className="sidebar-heading">Zones Verts</div>
        {/* <li className="nav-item active">
          <Link className="nav-link" to="/types-zones">
            <i className="fas fa-chart-area"></i>
            <span>Types zones verts</span>
          </Link>
        </li> */}

        <li className="nav-item active">
          <Link className="nav-link" to="/zones-verts">
            <i className="fas fa-chart-area"></i>
            <span>Zones verts</span>
          </Link>
        </li>

        <hr className="sidebar-divider d-none d-md-block" />
        <div className="sidebar-heading">Personnels</div>
        <li className="nav-item active">
          <Link className="nav-link" to="/personnels">
            <i className="fas fa-users"></i>
            <span>Liste des personnels</span>
          </Link>
        </li>
        <li className="nav-item active">
          <Link className="nav-link" to="/affectations">
            <i className="fas fa-tasks"></i>
            <span>Affectations</span>
          </Link>
        </li>
      </ul>
    </>
  );
}

export default Sidebar;
