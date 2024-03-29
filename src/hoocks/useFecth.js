import {useCallback, useEffect,useReducer,useState} from "react"

import {API} from "../APi"
import { fetchReducer, initialState } from "../reducers/fetch"
import { FETCH_DATA } from "../actions/fetch"


export const useFecth =(endopoint)=>{
    
    
    const [state,dispatch]= useReducer(fetchReducer,initialState)

    const getData = useCallback(async () => {
        try {
          const { data } = await API.get(`${endopoint}`);
          dispatch({ type: FETCH_DATA.SET_DATA, payload: data });
        } catch (error) {
          console.error(error);
          dispatch({ type: FETCH_DATA.SET_ERROR });
        }
      }, [endopoint]);
  



    useEffect(()=>{
        getData()
    },[endopoint,getData])

    return state
}

