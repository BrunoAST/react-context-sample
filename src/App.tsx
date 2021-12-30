import Nav from "./components/Nav/Nav";
import Produtos from "./components/Produtos/Produtos";
import "./styles.css";
import { ProdutosProvider } from "./context/ProdutosContext";

export default function App() {
  return (
    <ProdutosProvider>
      <div className="App">
        <Nav />
        <Produtos />
      </div>
    </ProdutosProvider>
  );
}
