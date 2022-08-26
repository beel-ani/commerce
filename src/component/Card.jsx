const Card = () => {
  <div className="row">
    <div className="col-md-6">
      <h3>Lista de Pokemons</h3>

      <div className="d-flex justify-content-between">
        {data.length === 0 && (
          <button
            onClick={() => dispatch(obtenerPokemonesAccion())}
            className="btn btn-dark"
          >
            Get Pokemones
          </button>
        )}
        {next && (
          <button
            onClick={() => dispatch(siguientePokemonAccion())}
            className="btn btn-dark mr-2"
          >
            Siguiente
          </button>
        )}
        {previous && (
          <button
            onClick={() => dispatch(anteriorPokemonAccion())}
            className="btn btn-dark"
          >
            Anterior
          </button>
        )}
      </div>

      <ul className="list-group mt-3 text-uppercase">
        {data.map((item) => (
          <li className="list-group-item" key={item.title}>
            {item.title}
            <button
              className="btn btn-dark btn-sm float-right"
              onClick={() => dispatch(unPokeDetalleAccion(item.url))}
            >
              Detalle
            </button>
          </li>
        ))}
      </ul>
    </div>
    <div className="col-md-6">
      <Detalle />
    </div>
  </div>;
};
export default Card;
