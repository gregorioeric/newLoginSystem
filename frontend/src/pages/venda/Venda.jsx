import React, { useContext } from "react";
import Context from "../../context/Context";

const Venda = () => {
  const { addCart, valorTotal } = useContext(Context);
  console.log(addCart);

  return (
    <div>
      <div>Venda {valorTotal}</div>
      <div>
        <h1>Pedido</h1>
        {addCart.map((e, index) => (
          <div key={index}>
            <div>{e.produto_name}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Venda;
