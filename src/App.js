import { useState } from "react";
import "./App.css";
import CardsView from "./components/CardsView";
import ListView from "./components/ListView";
import IconSwitch from "./components/IconSwitch";

const products = [
  {
    name: "Nike Metcon 2",
    price: "130",
    color: "red",
    img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/1.jpg",
  },
  {
    name: "Nike Metcon 2",
    price: "130",
    color: "green",
    img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/2.jpg",
  },
  {
    name: "Nike Metcon 2",
    price: "130",
    color: "blue",
    img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/3.jpg",
  },
  {
    name: "Nike Metcon 2",
    price: "130",
    color: "black",
    img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/4.jpg",
  },
  {
    name: "Nike free run",
    price: "170",
    color: "black",
    img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/7.jpg",
  },
  {
    name: "Nike Metcon 3",
    price: "150",
    color: "green",
    img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/5.jpg",
  },
];

function App() {
  const [viewType, setViewType] = useState("cards"); // Default view type

  const handleSwitch = () => {
    setViewType((prevType) => (prevType === "cards" ? "list" : "cards"));
  };

  return (
    <div className="store-container">
      <IconSwitch
        icon={viewType === "cards" ? "view_list" : "view_module"}
        onSwitch={handleSwitch}
      />
      {viewType === "cards" ? (
        <CardsView cards={products} />
      ) : (
        <ListView items={products} />
      )}
    </div>
  );
}

export default App;
