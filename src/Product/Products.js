import React from "react";
import { Link, Outlet } from "react-router-dom";

function Products() {
  return (
    <>
      <div>
        <h1>Products</h1>
      </div>
      <flex>
        <nav>
          
            <Link to="shirts">Shirts</Link> &nbsp;
            <Link to="jeans">Jeans</Link>
        </nav>
      </flex>

      <br></br>

      <Outlet />
    </>
  );
}

export default Products;