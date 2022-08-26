export const obtenerPokemonsAction = () => async (dispatch, getState) => {
  try {
    const res = await axios.get(
      "https://api.giphy.com/v1/stickers/packs/3138/stickers?api_key=cCkJ3edGSV263qDVj8r1KUaulz4MR5Dz&limit=25&offset=0"
    );
    dispatch({
      type: GET_POKE_SUCCESS,
      payload: res.data.results,
    });
  } catch (error) {
    console.log(error);
  }
};
