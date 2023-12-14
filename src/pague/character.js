
import React, { useEffect, useState , useRef} from 'react';
import { useFetch } from "../hoocks/useFetch";
import PropTypes from "prop-types";
import CharacterComponent from '../Componets/Character/Character';
import { Row, Col } from 'react-bootstrap';




function Characters() {
  const [page, setPage] = useState(1);
  const [resultslist,setresultslist]= useState([])
  const [endpoint, setEndpoint] = useState(`character/?page=${page}`);
  const [data, loading, error] = useFetch(endpoint);
  const miDivRef = useRef(null);
  const { results, info } = data;
  // setresultslist((privList)=>privList,results)
 

  useEffect(() => {
    if (results && results.length > 0) {
      setresultslist((prevList) => [...prevList, ...results]);
    }
  }, [results]);
  useEffect(() => {
    const handleScroll = () => {
      if (
        miDivRef.current &&
        window.innerHeight + window.scrollY >= miDivRef.current.offsetTop
      ) {
        // Reached the bottom of the page, load more data
        setPage((prevPage) => prevPage + 1);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  useEffect(() => {
    // Update endpoint when page changes
    const temporizador=setTimeout(() => {
      setEndpoint(`character/?page=${page}`);
    }, 1500);
    return () => clearTimeout(temporizador);
  }, [page]);
  return (
    <>
      <Row>
        <h1>Rick & Morty</h1>
        {loading && <p>Loading...</p>}
        {error && <p>Something went wrong</p>}
        {resultslist &&
          resultslist.map((character) => (
            <CharacterComponent key={character.id} character={character}></CharacterComponent>
          ))}
      </Row>
      <div ref={miDivRef}></div>
    </>
  );
}

Characters.propTypes = {
  results: PropTypes.arrayOf(
    PropTypes.shape({
      // Define las PropTypes para los elementos dentro del array
    })
  ),
};

export default Characters;