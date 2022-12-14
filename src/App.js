import './App.css';
import Header from "./Header";
import Carga from './Carga';
import SearchPage from "./SearchPage";
import Producto from './Producto';
import NoMatch from './NoMatch';
import { mockdata } from "./constants/products";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from "react-router-dom";
import CONFIG from './config/config';
import { useState, useEffect } from 'react';

const USE_SERVER = CONFIG.use_server;

function App() {

  const [producto, setProducto] = useState(mockdata.products);
  const [mostrarCarga,setMostrarCarga] = useState(true);

  // function renderizando() {
  //   setTimeout(<Carga/>, CONFIG.loading_timeout_ms)
  // }

  const callServer = async (param) => {
    if (USE_SERVER) {
      try {
        const response = await fetch(`${CONFIG.server_url}`);
        const data = await response.json();
        //console.log(data);
        setProducto(data.products);
      } catch (error) {
        console.log(error);
        setProducto({ error: { description: error.message } });
      }
    } else {
      //console.log(mock1.users)
      setProducto(mockdata.products);
    }
  }
  useEffect(() => {
    setTimeout(()=>{
      setMostrarCarga(false);
    }, CONFIG.loading_timeout_ms);
  }, [])
  useEffect(() => {
    callServer();
  }, [])


  return (
    <div className="App">
      {/* { document.addEventListener("DOMContentLoaded", callServer() )} */}
      {/* {callServer()} */}
      <Header />
      <Carga mostrarCarga={mostrarCarga}/>
      <Routes>
        {/* <Route path="/" element={renderizando()} />  */}
        <Route path="/" element={producto && <SearchPage theproducts={producto} />} />
        <Route path="/products/:productId" element={<Producto productos={producto} />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>

      {/*productos && <SearchPage theproducts={productos}/> */}
    </div>
  );
}

export default App;
