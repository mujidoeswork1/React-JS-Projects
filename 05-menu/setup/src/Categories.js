import React from "react";

const Categories = ({ items, category, filterItems }) => {
  const handleClick = () => {
    filterItems(category);
  };
  return (
    <>
      <button onClick={handleClick}> {category}</button>
    </>
  );
};

export default Categories;
