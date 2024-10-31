import './App.css';
import Header from './Components/Header';
import NavigationBar from './Components/NavigationBar';
import Footer from './Components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import Logo from './Components/Logo';
import HomePage from './Components/Pages/HomePage';
import ServicePage from './Components/Pages/ServicePage';
import RequestForm from './Components/RequestForm';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import AboutPage from './Components/Pages/AboutPage';

function App() {
  return (
    <Router>
      <div className="App">
        <div id="header">
          <Header />
        </div>

        <div id="nav-bar">
          <NavigationBar />
        </div>

        <div id="logo">
          <Logo />
        </div>

        <Routes>
          <Route exact={true} path="/" element={<HomePage />}></Route>
          <Route path="/services" element={<ServicePage />}></Route>
          <Route path="/about" element={<AboutPage />}></Route>
          <Route path="/request-form" element={<RequestForm />}></Route>
        </Routes>

        <div id="footer">
          <Footer />
        </div>
        
      </div>
    </Router>
  );
}

export default App;
