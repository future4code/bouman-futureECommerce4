import React from "react";
import styled from "styled-components";
import Produto from "../LojaProduto/Produto";
import FiltroDeProduto from "../FiltroDeProduto/index"
import LojaCarrinho from "../LojaCarrinho/index"

const MainContainer  = styled.div`
  border: 1px solid black;
  width: 99%;
  height: 650px;
  display: flex;
  
`;

const ContainerDeProdutos = styled.div `
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const ProdutoHeader = styled.div`
  height: 30px; 
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
`

const ProdutoGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 5px;
`

const listaDeProdutos = [

  {
    id:1,
    urlImagem: "http://www.sun.org/uploads/meteoriteimages/4/mainimage_Seymchan_-_357g_4.JPG",
    valor: 10000,
    nome: "Seymchan"
  },
  {
    id:2,
    urlImagem: "http://tierra.rediris.es/megacryometeors/feliz1.jpg",
    valor: 10000,
    nome: "megacryometeors"
  }
  ,
  {
    id:3,
    urlImagem: "https://upload.wikimedia.org/wikipedia/commons/5/5d/Santa_Rosa_meteorite%2C_main_mass.jpg",
    valor: 10000,
    nome: "Santa Rosa"
  },
  {
    id:4,
    urlImagem: "https://upload.wikimedia.org/wikipedia/commons/0/0b/Meteorito_Mar%C3%ADlia.jpg",
    valor: 10000,
    nome: "Meteorito Marília"
  },
  {
    id:5,
    urlImagem: "https://ogimg.infoglobo.com.br/in/23934277-c8c-d63/FT1086A/652/xmeteorito.jpg.pagespeed.ic.Yggigm2Af9.jpg",
    valor: 10000,
    nome: "X Meteorito"
  },

  {
    id:6,
    urlImagem: "http://1.bp.blogspot.com/-DqZwiQdbrxM/VOt_kye5ZwI/AAAAAAAAAyI/nwuvx1lDN9k/s1600/Meteorito-Fukang1.jpg",
    valor: 10000,
    nome: "Meteorito Fukang"
  },
  {
    id:7,
    urlImagem: "https://i.ebayimg.com/images/g/JP8AAOSwg7pbGVSL/s-l640.jpg",
    valor: 10000,
    nome: "Mosaico"
  },
  {
    id:8,
    urlImagem: "http://www.sun.org/uploads/meteoriteimages/62/mainimage_Seymchan_Slice_61.8g_4.jpg",
    valor: 10000,
    nome: "Seymchan Slice"
  }
]

class ProdutosContainer extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      nome: "",
      valor: ""
    }
  }

  render(){


    return(
      <MainContainer>
        <FiltroDeProduto></FiltroDeProduto>
        <ContainerDeProdutos>
          <ProdutoHeader>
            <p>Quantidade de Produtos: 8</p> 
            <select>
              <option>Preço: Crescente</option>
              <option>Preço: Decrescente</option>
            </select>
          </ProdutoHeader>
          <ProdutoGrid>
            <Produto></Produto>
            <Produto/>
            <Produto/>
            <Produto/>
            <Produto/>
            <Produto/>
            <Produto/>
            <Produto/>

          </ProdutoGrid>
        </ContainerDeProdutos>
        <LojaCarrinho></LojaCarrinho>
      </MainContainer>
    )
  }
}

export default ProdutosContainer;