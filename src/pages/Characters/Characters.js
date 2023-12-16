import { useState,useEffect } from 'react';


import {Col, Row,Container } from "react-bootstrap"
import {useFecth} from "../../hoocks/useFecth"
import Location from '../../components/location';
import NavBar from '../../components/NavBar';
import Pagination from '../../components/Pagination';
import Charact from '../../components/Charact';
function Characters() {
  const [page, setPage] = useState(1);
  const [endpoint, setEndpoint] = useState(`character/?page=${page}`);
  const { data, loading, error } = useFecth(endpoint);
  const { results, info } = data;
  console.log(results);


  useEffect(() => {
    setEndpoint(`character/?page=${page}`) 
}, [page])
if (loading) <h1>Loading...</h1>
  if (error) <h1>error...</h1>
  return (
    <>
      <NavBar></NavBar>
      <h1>Charact</h1>
    <Container>
      <Row>
        
            {results?.map((result) => (
             <Charact key={result.id} id={result.id} result={result}></Charact>
             ))}

        </Row>
    </Container>


      
    </>
    
  )
}

export default Characters