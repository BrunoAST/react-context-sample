import React from "react";
import "./Produto.css";
import { useProdutosContext } from '../../context/ProdutosContext';

const Produtos = () => {
  const { produtos, adicionarProdutoNoCarrinho } = useProdutosContext();

  const priceToBRL = (price: number) => {
    return price.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL"
    });
  };

  return (
    <ul className="list">
      {produtos.map((produto) => (
        <li className="item" key={produto.id}>
          <h3>{produto.nome}</h3>
          <p>{priceToBRL(produto.preco)}</p>
          <button
            className="button"
            onClick={() => adicionarProdutoNoCarrinho(produto)}
          >
            Adicionar no carrinho
          </button>
        </li>
      ))}
    </ul>
  );
};

export default Produtos;
