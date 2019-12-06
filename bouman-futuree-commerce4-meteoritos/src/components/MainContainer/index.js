import React from "react";
import styled from "styled-components";
import Produto from "../LojaProduto/Produto";
import FiltroDeProduto from "../FiltroDeProduto/index"
import LojaCarrinho from "../LojaCarrinho/index"
import ProdutoHeader from "./ProdutoHeader";

const MainContainer  = styled.div`
  /* border: 1px solid black; */
  width: 100%;
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

const ProdutoGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  justify-items: center;
  gap: 10px;
  margin-top: 13px;
`


export default class ProdutosContainer extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      
    }
  }
  

  render () { 
  const listaDeProdutosDoContainer = this.props.produtos.map((cadaProduto) => {
    return <Produto dadosProduto={cadaProduto}/>

  });


  return(
    <MainContainer>
      <FiltroDeProduto></FiltroDeProduto>
      <ContainerDeProdutos>
        <ProdutoHeader numero = {listaDeProdutosDoContainer.length} />
        <ProdutoGrid>
          {listaDeProdutosDoContainer}
        </ProdutoGrid>
      </ContainerDeProdutos>
      
      <LojaCarrinho>
        
      </LojaCarrinho>
    </MainContainer>
  )}
}



