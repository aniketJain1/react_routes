import React, { useEffect, useState } from "react";
import { Link, Outlet, Route, Routes, useNavigate } from "react-router-dom";
import { Container, VStack } from "@chakra-ui/react";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import Shirts from "./Shirts";
import Jeans from "./Jeans";

function Products() {
  return (
    <>
      <VStack className="w-100">
        <Container maxW="100%" color="#262626" className="p-4 bg-light">
          <div>
            <h2>Products</h2>
          </div>

          <Tabs>
            <TabList>
              <Tab>
                <Link to="shirts">Shirts</Link>
              </Tab>
              <Tab>
                <Link to="jeans">Jeans</Link>
              </Tab>
            </TabList>
          </Tabs>

          <Routes>
            <Route index element={<Shirts />} />
            <Route path="shirts" element={<Shirts />} />
            <Route path="jeans" element={<Jeans />} />
          </Routes>
        </Container>
      </VStack>
    </>
  );
}

export default Products;
