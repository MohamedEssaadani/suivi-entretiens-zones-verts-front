import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Sidebar from "./components/Sidebar"
import ZonesVerts from "./components/ZonesVerts"
import PersonnelsList from "./components/PersonnelsList"
import AssignTask from "./components/AssignTask"

function App() {
  return (
    <Router>
      <div id="wrapper">
        <Sidebar />
        <div id="content-wrapper" className="d-flex flex-column">
          <div id="content">
            <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
              <button
                id="sidebarToggleTop"
                className="btn btn-link d-md-none rounded-circle mr-3"
              >
                <i className="fa fa-bars"></i>
              </button>
            </nav>
            <Switch>
              <Route path="/zones-verts" component={ZonesVerts} />
              <Route path="/types-zones" component={ZonesVerts} />
              <Route path="/personnels" component={PersonnelsList} />
              <Route path="/assign-task" component={AssignTask} />
            </Switch>
          </div>
        </div>
      </div>
    </Router>
  )
}

export default App
