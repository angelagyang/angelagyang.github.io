import './App.css';
import Home from './components/home'
import NavBar from './components/navbar';
import 'react-bootstrap'; 
import Experience from './components/experience';
import About from './components/about';
import Contact from './components/contact';


function App() {
  return (
    <div className="Website">
      <NavBar></NavBar>
      <Home></Home>
      <About></About>
      
      <Experience></Experience>
      <Contact></Contact>
    </div>
  );
}

export default App;
