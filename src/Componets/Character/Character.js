import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {Row, Col } from 'react-bootstrap';


function CharacterComponent({}) {
  return (
    
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src="holder.js/100px180" />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>

  )
}

// Characters.PropTypes = {
//     Characters: PropTypes.arrayOf(
//         PropTypes.shape({
//             created:PropTypes.string,
//             gender: PropTypes.string,
//             id: PropTypes.number,
//             name: PropTypes.string,
//             spacies: PropTypes.string,
//             status: PropTypes.string,
//         }).isRequired
//     )
// }
export default CharacterComponent
