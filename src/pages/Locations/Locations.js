import React from 'react'

import { useState,useEffect } from 'react';
import {useFecth} from "../../hoocks/useFecth"
import Locatio from '../../components/Locatio';
import NavBar from '../../components/NavBar';
import Pagination from '../../components/Pagination';
function Locations() {
    const [page, setPage] = useState(1);
  
    const [endpoint, setEndpoint] = useState(`location/?page=${page}`);
    const { data, loading, error } = useFecth(endpoint);
    const { results, info } = data;
    console.log(results);
    useEffect(() => {
      setEndpoint(`location/?page=${page}`) 
  }, [page])
  if (loading) <h1>Cargando...</h1>
  if (error) <h1>error...</h1>
  return (
    <>
    <NavBar></NavBar>
    {results &&
        results.map((location) => (
          <Locatio key={location.id} result={data}></Locatio>
        ))}
        <Pagination  info={info} setPage={setPage} page={page} ></Pagination>
    </>
  )
}

export default Locations