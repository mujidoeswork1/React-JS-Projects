import React from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
const List = ({ name, list, id, removeItem, editItem }) => {
  const edit = (id) => {
    editItem(id);
    // console.log("first");
  };
  const dlt = (id) => {
    removeItem(id);
  };
  return (
    <>
      <div className="text">
        <p className="name">{name}</p>
        <div className="icon">
          <FaEdit className="edit" onClick={() => edit(id)} />
          <FaTrash className="dlt" onClick={() => dlt(id)} />
        </div>
      </div>
    </>
  );
};

export default List;
