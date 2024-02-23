import React from "react";
import { Link, Outlet } from "react-router-dom";

function Products() {
  return (
    <>
      <div>
        <h1>Products</h1>
      </div>
      
      <nav>
        <h2>
          <Link to="shirts">Shirts</Link>
        </h2>
        <h2>
          <Link to="jeans">Jeans</Link>
        </h2>
      </nav>

      <Outlet />
    </>
  );
}

export default Products;
