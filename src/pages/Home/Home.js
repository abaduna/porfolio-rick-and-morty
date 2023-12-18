import React from 'react'
import { Container } from 'react-bootstrap'
import {Col,Row } from "react-bootstrap"
import {Link} from "react-router-dom"

function Home() {
  return (
    < >
        <Container>
            <h1 className='title-center pt-5'>Welocomen to the Website from Abaduna</h1>
            <Row className='pt-5'>
                <Col xl={6} lg={6} sm={12} className=' contenedor-centrado col' >
                     <h2 className='title-center'>Visit Rick and Morty's different locations</h2>
                     <Link  className='link-custom'  to="/locations">locations</Link>
                     
                </Col>
                <Col xl={6} lg={6} sm={12} className='contenedor-centrado col'>
                    <h2 className='title-center'>Visit Rick and Morty's different characters</h2>
                     
                     <Link className='link-custom' to="/characters">Characters</Link>
                </Col>
            </Row>
        </Container>
        

    
    
    </ >
  )
}

export default Home