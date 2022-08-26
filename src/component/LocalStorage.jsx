export const obtenerPokemonesAccion = () => async (dispatch, getState) => {
  if (localStorage.getItem("offset=0")) {
    console.log("existe");
    dispatch({
      type: OBTENER_POKEMONES_EXITO,
      payload: JSON.parse(localStorage.getItem("offset=0")),
    });
  } else {
    console.log("no existe");
    try {
      const res = await axios.get(
        "https://api.giphy.com/v1/stickers/packs/3138/stickers?api_key=cCkJ3edGSV263qDVj8r1KUaulz4MR5Dz&limit=25&offset=0"
      );
      console.log(res.data);
      dispatch({
        type: OBTENER_POKEMONES_EXITO,
        payload: res.data,
      });
      localStorage.setItem("offset=0", JSON.stringify(res.data));
    } catch (error) {
      console.log(error);
    }
  }
};

export const siguientePokemonAccion = () => async (dispatch, getState) => {
  const { next } = getState().pokemones;

  if (localStorage.getItem(next)) {
    console.log("existe");
    dispatch({
      type: SIGUIENTE_POKEMONES_EXITO,
      payload: JSON.parse(localStorage.getItem(next)),
    });
  } else {
    console.log("no existe");
    try {
      const res = await axios.get(next);
      dispatch({
        type: SIGUIENTE_POKEMONES_EXITO,
        payload: res.data,
      });
      localStorage.setItem(next, JSON.stringify(res.data));
    } catch (error) {
      console.log(error);
    }
  }
};

export const anteriorPokemonAccion = () => async (dispatch, getState) => {
  const { previous } = getState().pokemones;

  if (localStorage.getItem(previous)) {
    console.log("existe");
    dispatch({
      type: SIGUIENTE_POKEMONES_EXITO,
      payload: JSON.parse(localStorage.getItem(previous)),
    });
  } else {
    console.log("no existe");
    try {
      const res = await axios.get(previous);
      dispatch({
        type: SIGUIENTE_POKEMONES_EXITO,
        payload: res.data,
      });
      localStorage.setItem(previous, JSON.stringify(res.data));
    } catch (error) {
      console.log(error);
    }
  }
};
