import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [data, setData] = useState(null);
  useEffect(() => {
    const getUsers = async () => {
      const req = await fetch("http://localhost:3000/users");
      const res = await req.json();
      setData(res);
    };
    getUsers();
  }, []);

  if (!data) {
    return <h2>aguarde...</h2>;
  }

  return (
    <>
      <div>{data.results[0].nome_user}</div>
    </>
  );
}

export default App;
