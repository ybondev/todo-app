import { React, useEffect, useState } from "react";

// CUSTOM CSS
import "./styles.scss";

// ASSETS
import undraw_chore_list from "./assets/undraw_chore_list_re_2lq8.svg";
import undraw_add_files_re_v09g from "./assets/undraw_add_files_re_v09g.svg";

const getLocalItems = () => {
  let list = localStorage.getItem("lists");

  if (list) {
    return JSON.parse(localStorage.getItem("lists"));
  } else {
    return [];
  }
};

function App() {
  const [inputValue, setValue] = useState("");
  const [items, setItems] = useState(getLocalItems());

  const HANDLE_VALUE = (e) => {
    setValue(e.target.value);
  };

  // ADD ITEM IN THE LIST
  const ADD_FUNCTION = () => {
    if (!inputValue) {
    } else {
      setItems([...items, inputValue]);
      setValue("");
    }
  };

  // REMOVE THE ITEM IN THE LIST
  const REMOVE_FUNCTION = (id) => {
    console.log(id);
    const updateditems = items.filter((x, idx) => {
      return idx != id;
    });
    setItems(updateditems);
  };

  useEffect(() => {
    // STORED IN LOCALSTORAGE
    localStorage.setItem("lists", JSON.stringify(items));
  }, [items]);
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <img
            src={undraw_chore_list}
            alt="undraw_chore_list"
            className="img-fluid"
          />
        </div>
        <div className="col-md-6">
          <h1 className="title">Simple todo list</h1>
          <form action="" onSubmit={ADD_FUNCTION}>
            <div className="form-floating mb-3">
              <input
                type="text"
                placeholder="Add items here..."
                id="floatingInput"
                className="form-control"
                onChange={HANDLE_VALUE}
              />
              <button>
                <img
                  src={undraw_add_files_re_v09g}
                  alt="undraw_add_files_re_v09g"
                  className="img-fluid"
                  onClick={ADD_FUNCTION}
                />
              </button>
              <label htmlFor="floatingInput">Add items here...</label>
            </div>
          </form>
          <div className="display-value mb-5">
            {!items.length ? (
              <p>you don't have any tasks yet</p>
            ) : (
              <>
                {items &&
                  items.map((x, idx) => {
                    return (
                      <div className="alert alert-primary" key={idx}>
                        {x}
                        <button
                          className="btn btn-danger"
                          onClick={() => REMOVE_FUNCTION(idx)}
                        >
                          x
                        </button>
                      </div>
                    );
                  })}
              </>
            )}
          </div>
          <div className="by text-muted">ybon.dev</div>
        </div>
      </div>
    </div>
  );
}

export default App;
