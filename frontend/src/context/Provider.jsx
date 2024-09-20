import { useState } from "react";
import Context from "./Context";

function Provider({ children }) {
  const [addCart, setAddCart] = useState(() => {
    const storedProduct = sessionStorage.getItem("Product");

    return storedProduct ? JSON.parse(storedProduct) : [];
  });
  // console.log(addCart);
  const [valorTotal, setValorTotal] = useState(() => {
    const storedValor = sessionStorage.getItem("ShoppingCart");
    return storedValor ? parseInt(storedValor) : 0;
  });

  const contextValue = {
    addCart,
    setAddCart,
    valorTotal,
    setValorTotal,
  };

  return <Context.Provider value={contextValue}>{children}</Context.Provider>;
}

export default Provider;
