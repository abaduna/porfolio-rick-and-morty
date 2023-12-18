import React from 'react'
import {useContext} from "react"
import { listFavContex } from '../../contex/favList';
import CharactComponent from '../../components/Charact';
import NavBar from '../../components/NavBar';
import FavFovoriteItem from '../../components/FavFovoriteItem';
import { Row,Container } from "react-bootstrap"
function FavListPagues() {
    const { listFav } = useContext(listFavContex);
    console.log(listFav);
  return (
    <>
    <NavBar></NavBar>
    <h1 className='title-center'>The favorit list</h1>
    <Container>
       <Row>
          {listFav?.map((itemFav) => <FavFovoriteItem key={itemFav.id} id={itemFav.id} itemFav={itemFav}></FavFovoriteItem>)}
       </Row>
         
    </Container>

    </>
  )
}

export default FavListPagues