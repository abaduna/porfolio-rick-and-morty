import {
    BrowserRouter as Router,
    Route,
    Routes,
    Navigate,
  } from "react-router-dom";

import Characters from "../pages/Characters/Characters";
import Locations from "../pages/Locations/Locations";
import FavListPagues from "../pages/FavListPagues/FavListPagues";
import Home from "../pages/Home/Home";
  const RoutesPrincial =()=>{
    return(
        <Router>
            <Routes>
                
                  <Route path="/" element={<Home/>}/>
                  <Route path="/characters" element={<Characters/>}/>
                  <Route path="/locations" element={<Locations/>}/>   
                  <Route path="/listfavo" element={<FavListPagues/>}/> 
                   
                
                
                
                
                <Route
                path="*"
                element={<Navigate to="/" replace />} />
            </Routes>
        </Router>
    )
  }

export default RoutesPrincial