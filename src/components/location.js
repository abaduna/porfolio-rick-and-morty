import React from 'react'
import Card from 'react-bootstrap/Card';

function Location({result}) {
    
  return (
    <Card>
        
        <Card.Body><h5>{result.name}</h5></Card.Body>
        <Card.Body>Dimension:{result.dimension}</Card.Body>
    </Card>
  )
}

export default Location