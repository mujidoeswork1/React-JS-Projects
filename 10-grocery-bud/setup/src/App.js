import React, { useState, useEffect } from "react";
import List from "./List";
import Alert from "./Alert";

function App() {
  const [name, setName] = useState("");
  const [list, setList] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [alert, setAlert] = useState({ show: false, msg: "" });
  const [editId, setEditId] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && !isEditing) {
      let n = { id: new Date().getTime().toString(), name: name };
      setList([...list, n]);
      setAlert({ show: true, msg: "Item added" });
      setName("");
    } else if (name && isEditing) {
      setList(
        list.map((item) => {
          if (item.id === editId) {
            return { ...item, name };
          }
          return item;
        })
      );
      setAlert({ show: true, msg: "Item Edited Successfully" });
      setName("");
      setIsEditing(false);
      setEditId("");
    } else if (!name) {
      setAlert({ show: true, msg: "Please add something" });
    }
  };
  useEffect(() => {
    let s = setTimeout(() => {
      setAlert({ show: false, msg: "" });
    }, 2000);

    return () => clearTimeout(s);
  }, [alert.show]);

  const removeItem = (id) => {
    setList(
      list.filter((item) => {
        return item.id !== id;
      })
    );
    console.log(list);
  };
  const editItem = (id) => {
    let s = list.find((item) => item.id === id);
    setEditId(id);
    setIsEditing(true);
    setName(s.name);
    console.log("s");
  };
  const clearAll = () => {
    setList([]);
  };

  return (
    <>
      <div className="container">
        <div className="modal-container">
          {alert.show && <Alert {...alert} />}
        </div>
        <h1>Grocery bud</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-inner">
            <input
              type="text"
              name=""
              id=""
              placeholder="e.g. eggs"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <button className="btn">{isEditing ? "Edit" : "Submit"}</button>
          </div>
        </form>
        {list.length > 0 &&
          list.map((s, i) => {
            const { id, name } = s;
            return (
              <>
                <List
                  key={i}
                  name={name}
                  list={list}
                  id={id}
                  removeItem={removeItem}
                  editItem={editItem}
                />
              </>
            );
          })}
        {list.length > 0 && (
          <div className="bn">
            <button className="btn-clr" onClick={clearAll}>
              clear all
            </button>
          </div>
        )}
      </div>
    </>
  );
}

export default App;
