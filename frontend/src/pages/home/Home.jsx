import { useContext } from "react";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import Context from "../../context/Context";
import "./home.css";
import imgPizza from "/images/pizza.png";
import Loading from "../../components/Loading/Loading";

const Home = () => {
  const [data, setData] = useState(null);
  const [tipo, setTipo] = useState(null);
  const [bebida, setBebida] = useState(null);
  const [inputQtd, setInputQtd] = useState(1);
  const [quantidades, setQuantidades] = useState(0);
  const { addCart, setAddCart, valorTotal, setValorTotal } =
    useContext(Context);

  useEffect(() => {
    const getUsers = async () => {
      const req = await fetch("http://localhost:3000/produtos");
      const res = await req.json();
      const getTipo = res.results.filter((e) => e.produto_tipo === "Pizza");
      const getBebida = res.results.filter((e) => e.produto_tipo === "Bebida");
      setTipo(getTipo);
      setBebida(getBebida);
      setData(getTipo);
      // console.log(data.length);
    };
    getUsers();
  }, []);

  useEffect(() => {
    // console.log("addCart");
    // console.log(addCart);
    // console.log(valorTotal);

    sessionStorage.setItem("ShoppingCart", JSON.stringify(valorTotal));
    sessionStorage.setItem("Product", JSON.stringify(addCart));
  }, [addCart, valorTotal]);

  useEffect(() => {
    if (data) {
      const newArray = [];
      data.forEach((element, index) => {
        newArray.push(0);
      });
      setQuantidades(newArray);
    }
  }, [data]);

  useEffect(() => {
    console.log(quantidades);
  }, [quantidades]);

  const handleClickPizzas = () => {
    setData(tipo);
  };

  const handleClickBebidas = () => {
    setData(bebida);
  };

  const handleAddCart = (e, index) => {
    setValorTotal(valorTotal + (parseFloat(e.produto_valor) * quantidades[index]));

    e.quantidade = quantidades[index];

    setAddCart([...addCart, e])
  };

  const handleMinus = (index) => {
    if (quantidades[index] <= 0) {
      return null
    }
    quantidades[index] -= 1;


    setQuantidades([...quantidades]);
  };

  const handlePlus = (index) => {
    quantidades[index] += 1;

    setQuantidades([...quantidades]);
  };


  if (!data) {
    return (
      <main className="home">
        <div className="container container-home">
          <Loading />
        </div>
      </main>
    );
  }

  return (
    <main className="home">
      <div className="container container-home">
        <header>
          <nav className="nav-product">
            <a onClick={handleClickPizzas}>Pizzas</a>
            <a onClick={handleClickBebidas}>Bebidas</a>
          </nav>
        </header>
        <section>
          <div className="section-product">
            {data.map((e, index) => (
              <div key={e.produto_id} className="content-product">
                <div className="img-product">
                  <img src={imgPizza} alt="" />
                </div>
                <div className="title-product">
                  <h3>{e.produto_name}</h3>
                  <p>R$ {e.produto_valor}</p>
                </div>
                <div className="quantity-product">
                  <label htmlFor="quantity">Quantidade: </label>

                  <i onClick={() => handleMinus(index)} className="bx bx-minus"></i>
                  <span>{quantidades[index]}</span>
                  <i
                    onClick={() => handlePlus(index)}
                    className="bx bx-plus-medical"
                  ></i>
                </div>
                <div className="btn-addCart">
                  <button onClick={() => handleAddCart(e, index)}>Add Carrinho</button>
                </div>
              </div>
            ))}
          </div>
        </section>
        <NavLink to="/pedido">Finalizar Compra</NavLink>
      </div>
    </main>
  );
};

export default Home;
