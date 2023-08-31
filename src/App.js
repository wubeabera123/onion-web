import React from "react";
import Navbar from "./components/Navbar";
import Frontinfo from "./components/Frontinfo";
import Upperfooter from "./components/Upperfooter";
import Casestudies from "./components/Casestudies";
import Services from "./components/Services";
import Clients from "./components/Clients";
import Address from "./components/Address";
import Footer from "./components/Footer";
function App() {
  return (
    <div>
       <Navbar/>
       <Frontinfo/>
       <Upperfooter/>
       <Casestudies/>
       <Services/>
       <Clients/>
       <Address/>
       <Footer/>
    </div>
  );
}

export default App;
