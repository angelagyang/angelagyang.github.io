import './App.css';
import Intro from './components/intro'
import NavBar from './components/navbar';
import 'react-bootstrap'; 

function App() {
  return (
    <div className="Website">
      <NavBar></NavBar>
      <Intro></Intro>
    </div>
  );
}

export default App;
