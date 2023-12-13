import {useCallback, useEffect,useState} from "react"

import {API} from "../API"


export const useFetch =(endopoint)=>{
    const[loading,setLoading]=useState(false)
    const [data,setData] = useState({})
    const [error,setError] = useState(false)



    const getData =useCallback(async()=>{
        try {
            const {data} = await API.get(`${endopoint}`)
            setData(data)
        } catch (error) {
            console.error(error);
            setError(true)
        }
    },[])



    useEffect(()=>{
        getData()
    },[endopoint,getData])

    return [data,loading,error]
}

