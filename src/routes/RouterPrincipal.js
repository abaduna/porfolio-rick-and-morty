import {
    BrowserRouter as Router,
    Route,
    Routes,
    Navigate,
  } from "react-router-dom";

import Characters from "../pages/Characters/Characters";
import Locations from "../pages/Locations/Locations";

  const RoutesPrincial =()=>{
    return(
        <Router>
            <Routes>
                
                  
                  <Route path="/characters" element={<Characters/>}/>
                  <Route path="/locations" element={<Locations/>}/>   
                
                   
                
                
                
                
                <Route
                path="*"
                element={<Navigate to="/" replace />} />
            </Routes>
        </Router>
    )
  }

export default RoutesPrincial