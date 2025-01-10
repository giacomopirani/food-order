import Header from "./components/Header";
import Meels from "./components/Meels";
import Cart from "./components/UI/Cart";
import { CartContextProvider } from "./store/CardContext";
import { UserProgressContextProvider } from "./store/UserProgressContext";

function App() {
  return (
    <UserProgressContextProvider>
      <CartContextProvider>
        <Header />
        <Meels />
        <Cart />
      </CartContextProvider>
    </UserProgressContextProvider>
  );
}

export default App;
