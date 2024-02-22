
import './App.css';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';
import Navbar from './Components/Navbar';

function App() {
  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About/>} />
      <Route path='/contact' element={<Contact/>} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
