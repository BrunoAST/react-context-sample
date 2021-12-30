import React, { ReactNode } from "react";
import { act, renderHook } from "@testing-library/react-hooks";
import { ProdutosProvider, useProdutosContext } from "./ProdutosContext";
import { Produto } from "../types/Produto";
import faker from "faker";

const produto: Produto = {
  nome: faker.commerce.productName(),
  preco: faker.datatype.number(),
  id: faker.datatype.number()
};

test("Deve adicionar um produto no carrinho", () => {
  const provider = ({ children }: { children: ReactNode }) => (
    <ProdutosProvider>{children}</ProdutosProvider>
  );
  const { result } = renderHook(() => useProdutosContext(), {
    wrapper: provider
  });
  act(() => result.current.adicionarProdutoNoCarrinho(produto));
  expect(result.current.produtosAdicinadosNoCarrinho).toEqual([produto]);
});
