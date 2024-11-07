import './App.css';
import Header from './Components/Header';
import NavigationBar from './Components/NavigationBar';
import Footer from './Components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import Logo from './Components/Logo';
import HomePage from '../src/Pages/HomePage';
// import ServicePage from '../src/Pages/ServicePage';
// import RequestForm from './Components/RequestForm';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
// import AboutPage from '../src/Pages/AboutPage';

// TODO: Get rid of all routes and make this a single page site
// TODO: Fix spacing of Home Page Cards on a phone screen

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
        </Routes>

        <div id="footer">
          <Footer />
        </div>
        
      </div>
    </Router>
  );
}

export default App;
