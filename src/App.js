import "./App.css";
import Header from "./Components/Header";
import NavigationBar from "./Components/NavigationBar";
import Footer from "./Components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import Logo from "./Components/Logo";
import HomePage from "../src/Pages/HomePage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ServicePage from "./Pages/ServicePage";
import AboutPage from "./Pages/AboutPage";
import RequestForm from "./Components/RequestForm";

function App() {
  return (
    <Router>
      <div className="App">
        <div id="header">
          <Header />
        </div>

        {/* <div id="nav-bar">
          <NavigationBar />
        </div> */}

        {/* <div id="logo">
          <Logo />
        </div> */}

        <Routes>
          <Route exact={true} path="/" element={<HomePage />}></Route>
          <Route path="/request-form" element={<RequestForm />}></Route>
          <Route path="/services" element={<ServicePage />}></Route>
          <Route path="/about" element={<AboutPage />}></Route> 
        </Routes>

        <br></br>

        <div id="footer">
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;
