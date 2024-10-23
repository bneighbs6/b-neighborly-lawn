import './App.css';
import NavigationBar from './Components/NavigationBar';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <header className="App-header bg-success text-center">
        <h1>Neighbors Lawn Service</h1>
      </header>

      <div id="nav-bar">
        <NavigationBar />
      </div>
    </div>
  );
}

export default App;
