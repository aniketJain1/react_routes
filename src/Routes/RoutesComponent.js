import React from 'react'

import { Route, Routes, useNavigate } from "react-router-dom";
import Home from '../Home/Home';
import Products from '../Product/Products';
// import Shirts from '../Product/Shirts';
// import Jeans from '../Product/Jeans';
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
import ImageDemo from '../Images/ImageDemo';
import CardsBs from '../Cards/CardsBs';
import ReducerC from '../useReducer/ReducerC'
import Create from '../Crud/Create';
import Read from '../Crud/Read';
import Registration from '../login_registration/registration';

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
        <Route path="/registration" element={ <Registration/>} />

        <Route path="/products/*" element={<Products />} />
        {/* <Route path="/products" element={<Products />}>
          <Route index element={<Shirts/>}></Route>
          <Route path="shirts" element={<Shirts />} />
          <Route path="jeans" element={<Jeans/>} />
        </Route> */}

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
        <Route path="/image" element={<ImageDemo />} />
        <Route path="/cards" element={<CardsBs />} />
        <Route path="/reducer" element={<ReducerC />} />
        <Route path="/create" element={<Create />} />
        <Route path="/read" element={<Read />} />
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