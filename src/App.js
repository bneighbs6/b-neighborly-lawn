import './App.css';
import Header from './Components/Header';
import NavigationBar from './Components/NavigationBar';
import Footer from './Components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import Logo from './Components/Logo';
import HomePage from './Components/Pages/HomePage';
import RequestForm from './Components/RequestForm';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

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
          <Route path="/services"></Route>
          <Route path="/about"></Route>
          <Route path="/request-form" element={<RequestForm />}></Route>
        </Routes>

{/* Commented out the footer so I can see the rest of request form  */}
        {/* <div id="footer">
          <Footer />
        </div> */}
      </div>
    </Router>
  );
}

export default App;
