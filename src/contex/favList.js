import React, { createContext, useContext, useState } from 'react'

export const listFavContex = createContext()

const {Provider} = listFavContex

export const ListFavProvider =({children})=>{
    const [listFav,SetListFav] = useState([])
    const addToFavorites  = (personaje) => {
        console.log(personaje);
        console.log(listFav);
        const listaCarito = [...listFav,personaje]
        SetListFav(listaCarito);
        console.log(listFav);
      }
      return (
        <Provider value={{ useAddrListFav,listFav  }}>
             {children}
        </Provider>
       

    )
}