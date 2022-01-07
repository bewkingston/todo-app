import classNames from "classnames";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

import styles from  '../styles/Home.module.css'

const Home = () => {
  const [todoItem, setTodoItem] = useState("");
  const [items, setItems] = useState([
    {
      id: "1234",
      message: "Buy Milk",
      done: false,
    },
  ]);

  console.log(styles);
 

  const handleEnter = (e) => {
    if (e.key === 'Enter') {
      handleAdd();
    }
  };

  const handleAdd = () => {
    if (todoItem) {
      setItems([
        {
          id: uuidv4(),
          message: todoItem,
          done: false,
        },
        ...items,
      ]);

      setTodoItem(" ");
    }
  };

  const handleToggle = (id) => {
    const _items = items.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          done: !item.done,
        };
      }
      return item;
    });

    setItems(_items);
  };

  return (
    <div className="w-3/4 mx-auto text-center">
      <div className="pt-12">
        <h1 className="text-5xl">Todo App</h1>
      </div>
      <div className="pt-12">
        <input
          type="text"
          value={todoItem}
          className="w-full text-gray-900 py-2 text-center rounded"
          onChange={(e) => setTodoItem(e.target.value)}
          onKeyDown={handleEnter}
        />
        <button type="button"
        className=" m-2 p-6 py-2  bg-cyan-500 hover:bg-cyan-600 rounded "
         onClick={handleAdd}>
          ADD
        </button>
      </div>

      <ul className="pt-2">
        {items
          .filter(({ done }) => !done)
          .map(({ id, message }) => (
            <li
              key={id}
              onClick={() => handleToggle(id)}
              className={classNames(styles.item)}
            >
              {message}
            </li>
          ))}

        {items
          .filter(({ done }) => done)
          .map(({ id, message }) => (
            <li
              key={id}
              onClick={() => handleToggle(id)}
              className={classNames(styles.item, styles.done)}
            >
              {message}
            </li>
          ))}
      </ul>
    </div>
  );
};
export default Home;
