import "./components/css/App.css";

import { HashRouter, Switch, Route } from "react-router-dom";

import Navigationbar from "./components/Navbar";
import Home from "./components/Home";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

function App() {
  return (
    <HashRouter>
      <Navigationbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/projects" component={Projects} />
      </Switch>
      <Footer />
    </HashRouter>
  );
}

export default App;
