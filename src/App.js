import "./components/css/App.css";

import { BrowserRouter, Switch, Route } from "react-router-dom";

import Navigationbar from "./components/Navbar";
import Info from "./components/Info";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      <Navigationbar />
      <Switch>
        <Route exact path="/" component={Info} />
        <Route path="/projects" component={Projects} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
