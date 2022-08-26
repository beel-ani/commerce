import React from "react";

// hooks react redux
import { useDispatch, useSelector } from "react-redux";

// importamos la acción
import { obtenerPokeAction } from "../redux/pokeDucks";

const Data = () => {
  // declaramos displach para llamar a la acción o acciones
  const dispatch = useDispatch();

  // crearmos el state utilizando nuestra tienda
  // store.pokemones lo sacamos de la tienda
  const data = useSelector((store) => store.data.array);

  return (
    <div>
      <h1>Compras</h1>
      <button onClick={() => dispatch(obtenerPokeAction())}>Obtener</button>
      <ul>
        {data.map((item) => (
          <>
            <li key={item.name}>{item.name}</li>
            <div className="container mt-3">
              <img src={images.url}>{images.url}</img>
            </div>
          </>
        ))}
      </ul>
    </div>
  );
};

export default Data;
