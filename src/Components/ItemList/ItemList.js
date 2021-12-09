import classes from "./ItemList.module.css";
import Item from "./Item";

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
      {itens.map((item,id) => {
        return <><Item
          key={id}
          title={item.title}
          description={item.description}
          price={item.price}
        ></Item>
        <hr/></>
      })}
    </div>
  );
}

export default ItemList;
