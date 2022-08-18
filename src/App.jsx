import { useEffect, useState } from "react";

import "./scss/app.scss";

import Header from "./components/header";
import Categories from "./components/categories";
import Sort from "./components/sort";
import PizzaBlock from "./components/pizza-block";
import Skeleton from "./components/skeleton";

function App() {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getAllPizzas = () =>
    fetch("https://62fdd187b9e38585cd57025e.mockapi.io/Pizzas")
      .then((res) => res.json())
      .then((data) => data)
      .catch((e) => console.log(e));

  useEffect(() => {
    getAllPizzas().then((data) => {
      setItems(data);
      setIsLoading(false);
    });
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
            {isLoading
              ? [...Array(5)].map((value, index) => <Skeleton key={index} />)
              : items.map((pizza) => <PizzaBlock key={pizza.id} {...pizza} />)}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
