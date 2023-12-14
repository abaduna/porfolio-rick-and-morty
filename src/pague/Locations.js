
import React, { useEffect, useState , useRef} from 'react';
import NavBar from "../Componets/NavBar/NavBar";
import { useFetch } from '../hoocks/useFetch';
import LocationsC from "../Componets/Locations/LocationsC"
import Pagination from 'react-bootstrap/Pagination';
function Locations() {
  const [page, setPage] = useState(1);
  const [resultslist, setResultsList] = useState([]);
  const [endpoint, setEndpoint] = useState(`location/?page=${page}`);
  const { data, loading, error } = useFetch(endpoint);
  const { results, info } = data;
  let items = [];
  

  useEffect(() => {
    for (let number = 1; number <= 7; number++) {
      items.push(
        <Pagination.Item
          key={number}
          active={number === page}  // Set active prop for the current page
          onClick={() => setPage(number)} // Update the page state
        >
          {number}
        </Pagination.Item>
      );
    }
    setResultsList((prev)=>prev,results)
    
  }, [page]);
  useEffect(() => {
    if (data) {
      // Your code that depends on data
      const { results, info } = data;
      // ...
    }
  }, [data, page]);
  return (
    <>
      <NavBar></NavBar>
      <div>Locations</div>
      {loading && <p>Loading...</p>}
      {error && <p>Something went wrong</p>}
      {results?.map((location) => (
          <LocationsC key={location.id} location={location} className='grid'>
           
          </LocationsC>
        ))}
      <Pagination>{items}</Pagination>
    </>
  );
}

export default Locations