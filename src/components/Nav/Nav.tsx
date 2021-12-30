import React from "react";
import { FaShoppingBag } from "@react-icons/all-files/fa/FaShoppingBag";
import "./Nav.css";
import { useProdutosContext } from '../../context/ProdutosContext';

function Nav() {
  const { produtosAdicinadosNoCarrinho } = useProdutosContext();

  return (
    <nav className="nav">
      <h1>Navbar</h1>
      <div className="carrinho">
        <span className="quantidade">
          {produtosAdicinadosNoCarrinho.length}
        </span>
        <FaShoppingBag size="2.5em" />
      </div>
    </nav>
  );
}

export default Nav;
