import { createContext, ReactNode, useContext, useState } from "react";
import { Produto } from "../types/Produto";

type ProdutosContextType = {
  produtos: Produto[];
  produtosAdicinadosNoCarrinho: Produto[];
  adicionarProdutoNoCarrinho: (prduto: Produto) => void;
  removerProdutoDoCarrinho: (index: number) => void;
};

export const ProdutosContext = createContext<ProdutosContextType>({
  produtos: [],
  produtosAdicinadosNoCarrinho: [],
  adicionarProdutoNoCarrinho: (produto: Produto) => {},
  removerProdutoDoCarrinho: (index: number) => {}
});

export const ProdutosProvider = ({ children }: { children: ReactNode }) => {
  const [produtosAdicinadosNoCarrinho, setProdutosAdicinadosNoCarrinho] = useState<Produto[]>([]);

  const [produtos] = useState<Produto[]>([
    {
      id: 2312,
      nome: "PS5",
      preco: 4500
    },
    {
      id: 3564,
      nome: "Death Stranding",
      preco: 200
    },
    {
      id: 1695,
      nome: "God of War",
      preco: 99
    },
    {
      id: 8473,
      nome: "Ghost of Tsushima",
      preco: 299
    },
    {
      id: 83432432,
      nome: "Fifa 21",
      preco: 500
    }
  ]);

  const adicionarProdutoNoCarrinho = (produto: Produto) => {
    setProdutosAdicinadosNoCarrinho([...produtosAdicinadosNoCarrinho, produto]);
  };

  const removerProdutoDoCarrinho = (index: number) => {
    produtos.splice(index, 1);
  };

  return (
    <ProdutosContext.Provider
      value={{
        produtos,
        produtosAdicinadosNoCarrinho,
        adicionarProdutoNoCarrinho,
        removerProdutoDoCarrinho
      }}
    >
      {children}
    </ProdutosContext.Provider>
  );
};

export const useProdutosContext = () => useContext(ProdutosContext);
