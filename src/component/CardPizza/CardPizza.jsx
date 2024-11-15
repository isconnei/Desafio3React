export default function CardPizza({ pizza }) {
  return (
    <div className="col-md-4 mb-3">
      <div className="card">
        <img src={pizza.img} alt={pizza.name} className="card-img-top" />
        <div className="card-body">
          <h5 className="card-title">{pizza.name}</h5>
          <p className="card-text">Precio: ${pizza.price}</p>
          <p className="card-text">Ingredientes:</p>
          <ul>{pizza.ingredients.join(", ")}</ul>
          <div className="d-flex justify-content-between">
            <a href="#" className="btn btn-primary">
              Ver más
            </a>
            <a href="#" className="btn btn-success">
              Añadir
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
