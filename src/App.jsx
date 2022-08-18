import { useEffect, useState } from "react";

import "./scss/app.scss";

import Header from "./components/header";
import Categories from "./components/categories";
import Sort from "./components/sort";
import PizzaBlock from "./components/pizza-block";

function App() {
  const [items, setItems] = useState([]);

  const getAllPizzas = () =>
    fetch("https://62fdd187b9e38585cd57025e.mockapi.io/Pizzas")
      .then((res) => res.json())
      .then((data) => data)
      .catch((e) => console.log(e));

  useEffect(() => {
    getAllPizzas().then((data) => setItems(data));
  }, []);

  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <div className="container">
          <div className="content__top">
            <Categories />
            <Sort />
          </div>
          <h2 className="content__title">Все пиццы</h2>
          <div className="content__items">
            {items.map((pizza) => (
              <PizzaBlock key={pizza.id} {...pizza} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
