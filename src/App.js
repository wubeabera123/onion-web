import React from "react";
import Navbar from "./components/Navbar";
import Frontinfo from "./components/Frontinfo";
import Upperfooter from "./components/Upperfooter";
import Casestudies from "./components/Casestudies";
import Services from "./components/Services";
function App() {
  return (
    <div>
       <Navbar/>
       <Frontinfo/>
       <Upperfooter/>
       <Casestudies/>
       <Services/>
    </div>
  );
}

export default App;
