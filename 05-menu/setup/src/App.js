import React, { useState } from "react";
import Menu from "./Menu";
import Categories from "./Categories";
import data from "./data";

function App() {
  const [items, setItems] = useState(data);
  const [categories, setCategories] = useState([
    "All",
    ...new Set(items.map((item) => item.category)),
  ]);

  const filterItems = (filterString) => {
    if (filterString === "All") {
      // console.log("first");
      setItems(data);
      return;
    }
    // setItems(data);
    const newItems = data.filter((item) => item.category === filterString);
    // console.log(items);
    setItems(newItems);
  };
  // console.log(categories);
  return (
    <>
      <div className="nav">
        <h2>Our Menu</h2>
        <div className="border-line"></div>
      </div>
      <div className="button-container">
        {categories.map((category, index) => {
          return (
            <Categories
              category={category}
              items={items}
              key={index}
              filterItems={filterItems}
            />
          );
        })}
      </div>

      <div className="container-box">
        {items.map((item) => {
          const { title, price, desc, img, id } = item;
          return (
            <Menu title={title} price={price} desc={desc} img={img} key={id} />
          );
        })}
      </div>
    </>
  );
}

export default App;
