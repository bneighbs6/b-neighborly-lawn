import './App.css';
import Header from './Components/Header';
import NavigationBar from './Components/NavigationBar';
import Footer from './Components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import Logo from './Components/Logo';

function App() {
  return (
    <div className="App">
      <div id="header">
        <Header />
      </div>

      <div id="logo">
        <Logo />
      </div>

      <div id="nav-bar">
        <NavigationBar />
      </div>

      <div id="footer">
        <Footer />
      </div>
    </div>
  );
}

export default App;
