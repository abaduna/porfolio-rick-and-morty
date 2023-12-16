import React, { useEffect, useState } from 'react'
import axios from "axios"

export const API = axios.create({
  baseURL: "https://rickandmortyapi.com/api/"
})



export default API