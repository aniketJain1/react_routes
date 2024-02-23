import "./App.css";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import Home from "./Components/Home";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Navbar from "./Components/Navbar";
import PageNotFound from "./Components/PageNotFound";

function App() {
  const navigate = useNavigate();
  // const AboutNavBtn = () =>{
  // const navigate = useNavigate();
  // return(
  //   <button onClick={() => navigate('/about')}>About</button>
  // )
  // }

  // const NavigateTo = (url) => {
  //   navigate(url);
  // }

  // const NavigateToWhere = () => {
  //   let name = 'ra';
  //   if( name == 'raj'){
  //     navigate('/about');
  //   }
  //   else{
  //     navigate('/contact');
  //   }
  // }

  return (
    <>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<PageNotFound/>} />

        </Routes>
        {/* <AboutNavBtn/> */}

        {/* <button onClick={() => navigate('/about')}>About</button> */}
        
        {/* <button onClick={() => NavigateTo('/about')}>About</button>
        <button onClick={() => NavigateTo('/contact')}>Contact</button> */}

        {/* <button onClick={() => NavigateToWhere('/contact')}>Click Me</button> */}
        
        {/* <button onClick={() => navigate(-1)}>Go Back</button> */}
    </>
  );
}

export default App;
