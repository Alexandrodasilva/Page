import './App.css';
import Home from './components/home/Home';
import About from './components/about/About';
import Navbar from './components/navbar/Navbar';
import Contact from './components/contact/Contact';
function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Home></Home>
      <About></About>
      <Contact></Contact>
    </div>
  );
}
export default App;
