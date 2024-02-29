import React from 'react'

import { Route, Routes, useNavigate } from "react-router-dom";
import Home from "./NavLinks/Home";
import About from "./NavLinks/About";
import Contact from "./NavLinks/Contact";
import PageNotFound from "./PageNotFound";
import Products from "./NavLinks/Products";
import Shirts from "./NavLinks/Shirts";
import Jeans from "./NavLinks/Jeans";
import Users from "./NavLinks/Users";
import UserDetails from "./NavLinks/UserDetails";
import Admin from "./NavLinks/Admin";
import Search from './NavLinks/Search';
import LazyComponent from './LazyC/LazyComponent';
import Validation1 from './Validation/Validation1';
import FormikForm from './FormikYup/FormikForm';
import FormikForm2 from './FormikYup/FormikForm2';


function RoutesComponent() {
    
  // const navigate = useNavigate();
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
        {/* <Route path="/lazy" element={<LazyComponent />} /> */}
        <Route path="/validation1" element={<Validation1 />} />
        <Route path="/formikyup" element={<FormikForm />} />
        <Route path="/formikyup2" element={<FormikForm2 />} />
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