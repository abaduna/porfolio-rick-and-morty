import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {Row, Col } from 'react-bootstrap';


function CharacterComponent({character}) {

  return (
    <Col md={6} sm={12}>
        <Card style={{ width: '18rem' }}>
            
          <Card.Img variant="top" src={character.image} />
          <Card.Body>
            <Card.Title>{character.name}</Card.Title>
            <Card.Text>
              es el tipo <b>{character.type}</b>
            </Card.Text>
            <Button variant="primary">Agregar a favoritos</Button>
          </Card.Body>
        </Card>

    </Col> )
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
