import "./components/css/App.css";

import Navigationbar from "./components/Navbar";
import Home from "./components/Home";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="appStyle">
        <Navigationbar />
        <Switch>
          <Route exact path="/" component={Home} />
          {/* <Route path="/projects" component={Projects} /> */}
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
