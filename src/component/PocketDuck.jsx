import React from "react";

const POKE_INFO = "POKE_INFO";{

case POKE_INFO : 
    return { ...state, imagen: action.payload};
}
export default function unPokeDetalleAccion(url) {
  return async (dispatch, getState) => {
    if (url === undefined) {
      url = `https://api.giphy.com/v1/stickers`;
    }
    if (localStorage.getItem(url)) {
      dispatch({
        type: POKE_INFO,
        payload: JSON.parse(localStorage.getItem(url)),
      });
      return;
    }
    try {
      const data = await axios.get(url);
      // console.log(res.data)
      dispatch({
        type: POKE_INFO,
        payload: {
          nombre: data.title,
          foto: data.url,
          alto: data.height,
          ancho: data.weight,
        },
      });
      localStorage.setItem(
        url,
        JSON.stringify({
          nombre: data.title,
          foto: data.id,
          alto: data.height,
          ancho: data.weight,
        })
      );
    } catch (error) {
      console.log(error.response);
    }
  };
}
