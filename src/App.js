import Header from "./Components/Header/Header";
import ItemList from "./Components/ItemList/ItemList";
import {CartContextProvider} from "./Context/cart-context";

function App() {
  return (
    <CartContextProvider>
      <Header />
      <ItemList />
    </CartContextProvider>
  );
}

export default App;
