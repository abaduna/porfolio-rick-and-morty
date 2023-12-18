import React from 'react'

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {Col } from "react-bootstrap"
import {listFavContex} from "../contex/favList"


import { useContext } from "react";
function CharactComponent  ({result}) {

  const { addToFavorites } = useContext(listFavContex);



  const handleAddToFavorites = (result) => {
    addToFavorites(result );
  };
  return (
    <>
  <Col md={4} lg={4} sm={12} >
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={result.image} />
      <Card.Body>
        <Card.Title>{result.name}</Card.Title>
        <Card.Text>
        {result.dimension}
        </Card.Text>
        <Button variant="primary" onClick={() => handleAddToFavorites(result)} >Add</Button>
      </Card.Body>
    </Card>    
  </Col>

    </>
  )
}

export default CharactComponent