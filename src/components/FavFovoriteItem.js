import React from 'react'

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {Col } from "react-bootstrap"
import {listFavContex} from "../contex/favList"

function FavFovoriteItem({itemFav}) {
  return (
    <>
      <Col md={6} lg={6} sm={12} >
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={itemFav.image} />
      <Card.Body>
        <Card.Title>{itemFav.name}</Card.Title>
        <Card.Text>
        {itemFav.dimension}
        gender:{itemFav.gender}
        
        </Card.Text>
        <Card.Text>
        
        status:{itemFav.status}
        </Card.Text>
      </Card.Body>
    </Card>    
  </Col>
    </>
  )
}

export default FavFovoriteItem