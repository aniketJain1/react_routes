import React from 'react'

import { Route, Routes, useNavigate } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import PageNotFound from "./PageNotFound";
import Products from "./Products";
import Shirts from "./Shirts";
import Jeans from "./Jeans";
import Users from "./Users";
import UserDetails from "./UserDetails";
import Admin from "./Admin";
import Search from './Search';
import LazyComponent from './LazyC/LazyComponent';


function RoutesComponent() {
    
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
        <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/products" element={<Products />}>
          <Route index element={<Shirts />}></Route>
          <Route path="shirts" element={<Shirts />} />
          <Route path="jeans" element={<Jeans />} />
        </Route>

        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/search" element={<Search />} />

        <Route path="/users" element={<Users />}>
          <Route path=":id" element={<UserDetails />} />
          <Route path="admin" element={<Admin />} />
        </Route>

        <Route path="*" element={<PageNotFound />} />
        <Route path="/lazy" element={<LazyComponent />} />
      </Routes>

      {/* <AboutNavBtn/> */}

      {/* <button onClick={() => navigate('/about')}>About</button> */}

      {/* <button onClick={() => NavigateTo('/about')}>About</button>
        <button onClick={() => NavigateTo('/contact')}>Contact</button> */}

      {/* <button onClick={() => NavigateToWhere('/contact')}>Click Me</button> */}

      {/* <button onClick={() => navigate(-1)}>Go Back</button> */}
    </>
  )
}

export default RoutesComponent;