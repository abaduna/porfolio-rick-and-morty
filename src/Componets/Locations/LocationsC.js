import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Col } from 'react-bootstrap';

function LocationsC({locatin}) {

  return (
<div>
    <Card style={{ width: '100%' }} className='grid-item'>
         <Card.Body>
          <Card.Title>{locatin.name}</Card.Title>
          <Card.Text>
              Dimension:{locatin.dimension} whit name {locatin.name}<br/>
              <b>Created the {locatin.created}</b>
         </Card.Text>
      
        </Card.Body>
    </Card>        
</div>

  )
}
export default LocationsC