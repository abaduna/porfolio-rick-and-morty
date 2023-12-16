import React from 'react'

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {Col } from "react-bootstrap"
function Charact({result}) {
  return (
    <>
  <Col md={6} lg={6} sm={12} >
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={result.image} />
      <Card.Body>
        <Card.Title>{result.name}</Card.Title>
        <Card.Text>
        {result.dimension}
        </Card.Text>
        <Button variant="primary">Agregar en english</Button>
      </Card.Body>
    </Card>    
  </Col>

    </>
  )
}

export default Charact