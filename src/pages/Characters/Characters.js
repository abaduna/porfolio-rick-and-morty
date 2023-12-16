import { useState,useEffect } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { Row,Container } from "react-bootstrap"
import {useFecth} from "../../hoocks/useFecth"
import {listFavContex} from "../../contex/favList"
import NavBar from '../../components/NavBar';

import CharactComponent  from '../../components/Charact';
function Characters() {
  const [page, setPage] = useState(1);
  const [endpoint, setEndpoint] = useState(`character/?page=${page}`);
  const { data, loading, error } = useFecth(endpoint);
  const [resultList, setResultList] = useState([]);
  const { results, info } = data;
  console.log(results);
  console.log(setResultList);

  
  useEffect(() => {
    // Concatenar los resultados actuales con los anteriores
    setResultList((prev) => [...prev, ...(results || [])]);
  }, [results]);


  useEffect(() => {
    setEndpoint(`character/?page=${page}`) 
    
}, [page])
const fetchMoreData = () => {
  // Fetch more data or update state here
  setPage(page + 1);
}
if (loading) <h1>Loading...</h1>
  if (error) <h1>error...</h1>
  return (
    <>
      <NavBar></NavBar>
      <h1>Charact</h1>
    <Container>
    <InfiniteScroll
          dataLength={resultList ? resultList.length : 0}
          next={fetchMoreData}
          hasMore={page < 42} // Actualiza este valor según tus necesidades
          loader={<h4>Loading...</h4>}
        >
      <Row>
        
            {resultList && resultList.map((result) => (
             <CharactComponent  key={result.id} id={result.id} result={result}></CharactComponent >
             ))}

        </Row>
        </InfiniteScroll>
    </Container>


      
    </>
    
  )
}

export default Characters