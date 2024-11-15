import { useState } from "react";
import CardPizza from "../CardPizza/CardPizza";
import Cart from "./Cart";
import Header from "./Header";
import { pizzas as initialPizzas } from "../../pizzas";

export default function Home() {
  const [listPizza, setListPizza] = useState(initialPizzas);

  return (
    <div id="home">
      <Header />
      <div className="row">
        {listPizza.map((pizza, index) => (
          <CardPizza key={index} pizza={pizza} />
        ))}
      </div>
    </div>
  );
}
