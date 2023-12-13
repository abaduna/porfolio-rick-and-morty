
import React, { useEffect, useState } from 'react';
import { useFetch } from "../hoocks/useFetch";
import PropTypes from "prop-types";
import CharacterComponent from '../Componets/Character/Character';
import { Row, Col } from 'react-bootstrap';

function Characters() {
  const [endpoint, setEndpoint] = useState("character");
  const [data, loading, error] = useFetch(endpoint);
  console.log(data);
  const { results,info } = data;

  return (
    <Row>
        {results.map(()=>{
       <Col md={4} sm={12}>
        <CharacterComponent ></CharacterComponent>
      </Col>    
        })}
 
    </Row>
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