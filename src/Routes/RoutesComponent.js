import React from 'react'

import { Route, Routes, useNavigate } from "react-router-dom";
import Home from '../Home/Home';
import Products from '../Product/Products';
import Shirts from '../Product/Shirts';
import Jeans from '../Product/Jeans';
import About from '../About/About';
import Contact from '../Contact/Contact';
import Search from '../Search/Search';
import Users from '../Users/Users';
import UserDetails from '../Users/UserDetails';
import Admin from '../Admin/Admin';
import PageNotFound from '../PageNotFound';
import Validation1 from '../Validation/Validation1';
import FormikForm from '../FormikYupForm/FormikForm';
import FormikForm2 from '../FormikYupForm/FormikForm2';
import DetailsForm from '../ChakraForm/DetailsForm';

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
        <Route path="/" element={ <Home/>} />

        <Route path="/products" element={<Products />}>
          <Route index element={<Shirts/>}></Route>
          <Route path="shirts" element={<Shirts />} />
          <Route path="jeans" element={<Jeans/>} />
        </Route>

        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/search" element={<Search />} />

        <Route path="/users" element={<Users />}>
          <Route path=":id" element={<UserDetails />} />
          <Route path="admin" element={<Admin />} />
        </Route>

        <Route path="*" element={<PageNotFound/>} />
        {/* <Route path="/lazy" element={<LazyComponent />} /> */}
        <Route path="/validation1" element={<Validation1/>} />
        <Route path="/formikyup" element={<FormikForm />} />
        <Route path="/formikyup2" element={<FormikForm2 />} />
        <Route path="/detailsform" element={<DetailsForm />} />
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