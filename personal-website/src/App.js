import './App.css';
import Home from './components/home'
import NavBar from './components/navbar';
import 'react-bootstrap'; 

function App() {
  return (
    <div className="Website">
      <NavBar></NavBar>
      <Home></Home>
    </div>
  );
}

export default App;
