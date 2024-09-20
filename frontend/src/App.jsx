import { Route, Routes } from "react-router-dom";
import "./App.css";
import "boxicons";
import Layout from "./components/Layout/Layout";
import Pizzas from "./pages/pizzas/Pizzas";
import Contact from "./pages/contact/Contact";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Venda from "./pages/venda/Venda";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/pizzas" element={<Pizzas />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/pedido" element={<Venda />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
