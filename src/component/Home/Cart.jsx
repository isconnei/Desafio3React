import { useState } from "react";

export default function Cart({ pizza, onUpdate }) {
  // Estado local para la cantidad de esta pizza
  const [quantity, setQuantity] = useState(pizza.quantity);

  // Funciones para incrementar y decrementar la cantidad
  const handleIncrement = () => {
    const newQuantity = quantity + 1;
    setQuantity(newQuantity);
    onUpdate({ ...pizza, quantity: newQuantity }); // Actualiza la pizza con la nueva cantidad
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      const newQuantity = quantity - 1;
      setQuantity(newQuantity);
      onUpdate({ ...pizza, quantity: newQuantity }); // Actualiza la pizza con la nueva cantidad
    } else {
      // Cuando la cantidad llega a 0, eliminamos la pizza
      onUpdate({ ...pizza, quantity: 0 }); // Esto eliminará la pizza en el componente principal
    }
  };

  return (
    <div className="d-flex align-items-center mb-2 p-2 border rounded justify-content-between ms-4">
      <img
        src={pizza.img}
        alt={pizza.name}
        className="rounded"
        style={{ width: "50px", height: "50px", marginRight: "10px" }}
      />
      <div className="flex-grow-1 me-2">
        <p className="mb-0 fw-bold">{pizza.name}</p>
        <p className="mb-0 text-muted" style={{ fontSize: "0.9rem" }}>
          Precio: ${pizza.price.toLocaleString()}
        </p>
        <p className="mb-0 text-muted" style={{ fontSize: "0.8rem" }}>
          Ingredientes: {pizza.ingredients.join(", ")}
        </p>
      </div>

      <div
        className="d-flex align-items-center justify-content-left"
        style={{ width: "50%" }}
      >
        <button
          className="btn btn-outline-danger btn-sm px-2 py-1"
          onClick={handleDecrement}
        >
          -
        </button>
        <span className="mx-1">{quantity}</span>
        <button
          className="btn btn-outline-primary btn-sm px-2 py-1"
          onClick={handleIncrement}
        >
          +
        </button>
      </div>
    </div>
  );
}
