
import React, { useEffect, useState , useRef} from 'react';
import NavBar from "../Componets/NavBar/NavBar";
import { useFetch } from '../hoocks/useFetch';
import LocationsC from "../Componets/Locations/LocationsC"
function Locations() {
  const [page, setPage] = useState(1);
  const [resultslist,setresultslist]= useState([])
  const [endpoint, setEndpoint] = useState(`location/?page=${page}`);
  const [data, loading, error] = useFetch(endpoint);
  const { results, info } = data;
  
  
 
  return (
    <>
    <NavBar></NavBar>
    <div>Locations</div>
    {loading && <p>Loading...</p>}
        {error && <p>Something went wrong</p>}
        {results &&
          results.map((locatin) => (
            <LocationsC key={locatin.id } locatin={locatin}  className='grid'></LocationsC>
          ))}
    </>
    
  )
}

export default Locations