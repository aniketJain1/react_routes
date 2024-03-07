import { BrowserRouter } from "react-router-dom";
import "./App.css";
import NavbarC from "./Navbar/NavbarC.js";
import SidebarC from "./Navbar/SidebarC.js";
import RoutesComponent from "./Routes/RoutesComponent";
import { Flex } from "@chakra-ui/react";

function App() {
  return (
    <>
      <NavbarC />
      <Flex>
        <SidebarC />
          <RoutesComponent />
      </Flex>
    </>
  );
}

export default App;
