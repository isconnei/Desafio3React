import { useState, useEffect } from "react";
import { pizzas as initialPizzas } from "../../pizzas";

export default function Cart() {
  const [listPizza, setListPizza] = useState(
    initialPizzas.map((pizza) => ({
      ...pizza,
      quantity: pizza.quantity || 1,
    }))
  );

  const [total, setTotal] = useState(0);

  useEffect(() => {
    const newTotal = listPizza.reduce((acc, pizza) => {
      return acc + pizza.quantity * pizza.price;
    }, 0);
    setTotal(newTotal);
  }, [listPizza]);

  const handleIncrement = (index) => {
    setListPizza((prevList) => {
      const updatedList = [...prevList];
      updatedList[index].quantity += 1;
      return updatedList;
    });
  };

  const handleDecrement = (index) => {
    setListPizza((prevList) => {
      const updatedList = [...prevList];
      if (updatedList[index].quantity > 1) {
        updatedList[index].quantity -= 1;
      } else {
        updatedList.splice(index, 1);
      }
      return updatedList;
    });
  };

  return (
    <div className="d-flex flex-column">
      {listPizza.map((pizza, index) => (
        <div
          key={index}
          className="d-flex align-items-center mb-2 p-2 border rounded justify-content-between ms-4"
        >
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
              onClick={() => handleDecrement(index)}
            >
              -
            </button>
            <span className="mx-1">{pizza.quantity}</span>
            <button
              className="btn btn-outline-primary btn-sm px-2 py-1"
              onClick={() => handleIncrement(index)}
            >
              +
            </button>
          </div>
        </div>
      ))}
      <div className="mt-3">
        <h4>Total: ${total.toLocaleString()}</h4>{" "}
      </div>
    </div>
  );
}
