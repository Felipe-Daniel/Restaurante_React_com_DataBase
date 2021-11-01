import classes from "./ItemList.module.css";

function ItemList() {
  const itens = [
    { title: "Suchi", description: "Finest fish and veggies", price: 22.99 },
    { title: "Schnitzel", description: "A german speciality", price: 16.5 },
    {
      title: " Barbeque Burger",
      description: "American, raw, meaty",
      price: 12.99,
    },
    {
      title: "Green Bowl",
      description: "Healthy... and green...",
      price: 18.99,
    },
  ];
  return (
    <div className={classes["item-list"]}>
      {itens.map(item, (item) => {
        <Item
          title={item.title}
          description={item.description}
          amount={item.amount}
        ></Item>;
      })}
    </div>
  );
}

export default ItemList;
