import { useState, useEffect } from "react";
import Cart from "./Cart";
import Header from "./Header";
import { pizzas as initialPizzas } from "../../pizzas";

export default function Home() {
  const [listPizza, setListPizza] = useState(
    initialPizzas.map((pizza) => ({
      ...pizza,
      quantity: pizza.quantity || 1,
    }))
  );

  const [total, setTotal] = useState(0);

  const calculateTotal = () => {
    const newTotal = listPizza.reduce((acc, pizza) => {
      return acc + pizza.quantity * pizza.price;
    }, 0);
    setTotal(newTotal);
  };

  useEffect(() => {
    calculateTotal();
  }, [listPizza]);

  const handleUpdatePizza = (index, updatedPizza) => {
    if (updatedPizza.quantity === 0) {
      setListPizza((prevList) => prevList.filter((_, i) => i !== index));
    } else {
      setListPizza((prevList) => {
        const updatedList = [...prevList];
        updatedList[index] = updatedPizza;
        return updatedList;
      });
    }
  };

  return (
    <div id="home">
      <Header />
      <div className="row">
        {listPizza.map((pizza, index) => (
          <Cart
            key={index}
            pizza={pizza}
            onUpdate={(updatedPizza) => handleUpdatePizza(index, updatedPizza)}
          />
        ))}
      </div>

      <div className="mt-3">
        <h4>Total: ${total.toLocaleString()}</h4>
      </div>
    </div>
  );
}
