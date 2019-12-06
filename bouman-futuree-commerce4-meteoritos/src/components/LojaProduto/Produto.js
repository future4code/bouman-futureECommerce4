import React from 'react';
import styled from 'styled-components';


// Estilização

const ProdutoContainer = styled.div`
  width: 40vw;
  height: 250px;
  border: 1px dotted orange;
  min-width: 100px;
  max-width: 150px;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: flex-start;
  padding: 5px;
  margin: 5px;
`;

const ProdutoImage = styled.img `
  width: 100%;
  height: 130px;
`;

const PNome = styled.p `
  align-self: center;
  margin-top: 10px;
`;

const PValor = styled.p `
  margin: 15px 0px 10px 5px;
`;

const ProdutoFooterContainer = styled.div`
  width: 100%;
  height: 100%;
`;

const ButtonAdicionarProduto = styled.button`
  width: 100%;
  height: 100%;
  background-color: black;
  color: white;
  outline: 0;
  border: 0;
  :hover {
    background-color: orange;
    color: black;
  }
`;


// Código

class Produto extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  aoAdicionarItem = () => {
    this.props.adicionarItemNoCarrinho(
      this.props.dadosProduto.id,
      this.props.dadosProduto.nome,
      this.props.dadosProduto.valor
    )
  }

  render() {
    return (
      <ProdutoContainer>
        <ProdutoImage src={this.props.dadosProduto.urlImagem}/>
        <PNome>{this.props.dadosProduto.nome}</PNome>
        <PValor>R$ {this.props.dadosProduto.valor},00</PValor>
        <ProdutoFooterContainer>
        <ButtonAdicionarProduto onClick={this.aoAdicionarItem}>Adicionar Item</ButtonAdicionarProduto>
        </ProdutoFooterContainer>
      </ProdutoContainer>
    )
  }
}

export default Produto;