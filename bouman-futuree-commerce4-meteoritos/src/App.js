import React from 'react';
import './App.css';
import ProdutosContainer from './components/MainContainer/index'
import FiltradosPorPreco from './components/FiltroDeProduto/FiltradosPorPreco';

const listaDeProdutos = [
  {
    id:1,
    urlImagem: "http://www.sun.org/uploads/meteoriteimages/4/mainimage_Seymchan_-_357g_4.JPG",
    valor: 25,
    nome: "Seymchan"
  },
  {
    id:2,
    urlImagem: "http://tierra.rediris.es/megacryometeors/feliz1.jpg",
    valor: 500,
    nome: "Megacryometeors"
  },
  {
    id:3,
    urlImagem: "https://upload.wikimedia.org/wikipedia/commons/5/5d/Santa_Rosa_meteorite%2C_main_mass.jpg",
    valor: 450,
    nome: "Santa Rosa"
  },
  {
    id:4,
    urlImagem: "https://upload.wikimedia.org/wikipedia/commons/0/0b/Meteorito_Mar%C3%ADlia.jpg",
    valor: 100,
    nome: "Meteorito Marília"
  },
  {
    id:5,
    urlImagem: "https://ogimg.infoglobo.com.br/in/23934277-c8c-d63/FT1086A/652/xmeteorito.jpg.pagespeed.ic.Yggigm2Af9.jpg",
    valor: 10,
    nome: "Meteorito X"
  },
  {
    id:6,
    urlImagem: "http://1.bp.blogspot.com/-DqZwiQdbrxM/VOt_kye5ZwI/AAAAAAAAAyI/nwuvx1lDN9k/s1600/Meteorito-Fukang1.jpg",
    valor: 100000,
    nome: "Meteorito Fukang"
  },
  {
    id:7,
    urlImagem: "https://i.ebayimg.com/images/g/JP8AAOSwg7pbGVSL/s-l640.jpg",
    valor: 4567,
    nome: "Mosaico"
  },
  {
    id:8,
    urlImagem: "http://www.sun.org/uploads/meteoriteimages/62/mainimage_Seymchan_Slice_61.8g_4.jpg",
    valor: 1234,
    nome: "Seymchan Slice"
  }
]



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render(){
    return (
      <div>
        <ProdutosContainer produtos={listaDeProdutos}/>
        <FiltradosPorPreco 
          valor={listaDeProdutos}
          min={0}
          max={1000000}
        />
      </div>
    )
  }
}

export default App;
