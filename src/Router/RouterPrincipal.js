import {
    BrowserRouter as Router,
    Route,
    Routes,
    Navigate,
  } from "react-router-dom";

import Characters from "./../pague/character";
import Locations from "../pague/Locations";
import Home from "../pague/Home"
  const RoutesPrincial =()=>{
    return(
        <Router>
            <Routes>
                
                  <Route path="/" element={<Home/>}/>
                  <Route path="/Characters" element={<Characters/>}/>
                  <Route path="/locations" element={<Locations/>}/>   
                
                   
                
                
                
                
                <Route
                path="*"
                element={<Navigate to="/" replace />} />
            </Routes>
        </Router>
    )
  }

export default RoutesPrincial