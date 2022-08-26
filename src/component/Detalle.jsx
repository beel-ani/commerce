import React from "react";

import { useDispatch, useSelector } from "react-redux";
import { unPokeDetalleAccion } from "../redux/pokeDucks";

const Detalle = () => {
  const dispatch = useDispatch();

  React.useEffect(() => {
    const obtenerInfo = () => {
      dispatch(unPokeDetalleAccion());
    };
    obtenerInfo();
  }, [dispatch]);

  const image = useSelector((store) => store.data.imagen);
  // console.log(pokemon)

  return image ? (
    <div className="card text-center text-uppercase">
      <div className="card-body">
        <img className="img-fluid" alt="" src={data.foto} />
        <div className="card-title">{data.nombre}</div>
        <p className="card-text">
          Alto: {data.alto} - Ancho: {data.ancho}
        </p>
      </div>
    </div>
  ) : null;
};

export default Detalle;
