import classes from "./ItemList.module.css";
import Item from "./Item";
import React, { useState } from 'react';


function ItemList() {
  const [items, setItems] = useState([]);
  fetch("https://teste-7caab-default-rtdb.firebaseio.com/items.json")
    .then((data) => {
      return data.json();
    })
    .then((data) => {
      const loadedItems = [];
      for (const key in data) {
        loadedItems.push({
          id: key,
          title: data[key].title,
          description: data[key].description,
          price: data[key].price,
        })};
      setItems(loadedItems);
    });
  return (
    <div className={classes["item-list"]}>
      {items.map((item) => {
        return (
          <>
            <Item
              key={item.id}
              title={item.title}
              description={item.description}
              price={item.price}
            ></Item>
            <hr />
          </>
        );
      })}
    </div>
  );
}

export default ItemList;
