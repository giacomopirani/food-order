import Header from "./components/Header";
import Meels from "./components/Meels";
import { CartContextProvider } from "./store/CardContext";

function App() {
  return (
    <CartContextProvider>
      <Header />
      <Meels />
    </CartContextProvider>
  );
}

export default App;
