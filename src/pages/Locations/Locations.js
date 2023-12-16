import React from 'react'

import { useState,useEffect } from 'react';
import {useFecth} from "../../hoocks/useFecth"
import Location from '../../components/location';
import NavBar from '../../components/NavBar';
import Pagination from '../../components/Pagination';
function Locations() {
    const [page, setPage] = useState(1);
  
    const [endpoint, setEndpoint] = useState(`location/?page=${page}`);
    const { data, loading, error } = useFecth(endpoint);
    const { results, info } = data;
    console.log(info);


    useEffect(() => {
      setEndpoint(`location/?page=${page}`) 
  }, [page])

  if (loading) <h1>Loading...</h1>
  if (error) <h1>error...</h1>
  return (
    <>
    <NavBar></NavBar>
    <h1>Location</h1>
    {results &&
        results.map((result) => (
          <Location key={result.id}  result={result}></Location>
        ))}
        <Pagination  info={info} setPage={setPage} page={page} ></Pagination>
    </>
  )
}

export default Locations