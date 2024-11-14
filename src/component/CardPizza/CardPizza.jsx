export default function CardPizza({ name, price, ingredients, img }) {
  return (
    <div className="col-md-4 mb-3">
      <div className="card">
        <img src={img} alt={name} className="card-img-top" />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">Precio: ${price}</p>
          <p className="card-text">Ingredientes:</p>
          <ul>
            {ingredients.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>
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
