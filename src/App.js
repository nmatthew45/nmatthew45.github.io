import "./components/css/App.css";

import Navigationbar from "./components/Navbar";
import Home from "./components/Home";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="appStyle">
        <Navigationbar />
        <Routes>
          <Route exact path="/" element={<Home/>} />
          {/* <Route path="/projects" component={Projects} /> */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
