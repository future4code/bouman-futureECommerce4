import React from "react";
import styled from "styled-components";
import Produto from "../LojaProduto/Produto";
import FiltroDeProduto from "../FiltroDeProduto/index"
import LojaCarrinho from "../LojaCarrinho/index"

const MainContainer = styled.div`
  /* border: 1px solid black; */
  width: 100%;
  height: 650px;
  display: flex;
  
`;

const ContainerDeProdutos = styled.div`
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
  padding: 10px 0;
  
`

const ProdutoGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  justify-items: center;
  gap: 10px;
  margin-top: 13px;
`
const Texto = styled.p`
  padding-left: 5px;
`
const Select = styled.select`
  margin-right: 5px;
`


class ProdutosContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    const listaDeProdutosDoContainer = this.props.produtos.map((cadaProduto) => {
      return <Produto dadosProduto={cadaProduto} />
    })

    // const ProdutosFiltrados = this.props.produtos.filter()

    return (
      <MainContainer>
        <FiltroDeProduto />
        <ContainerDeProdutos>
          <ProdutoHeader>
            <Texto>Quantidade de Produtos:</Texto>
            <Select>
              <option>Preço: Crescente</option>
              <option>Preço: Decrescente</option>
            </Select>
          </ProdutoHeader>

          <ProdutoGrid>
            {listaDeProdutosDoContainer}
          </ProdutoGrid>
        </ContainerDeProdutos>

        <LojaCarrinho>

        </LojaCarrinho>
      </MainContainer >
    )
  }
}


export default ProdutosContainer