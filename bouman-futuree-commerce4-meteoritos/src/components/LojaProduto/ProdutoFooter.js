import React from 'react';
import styled from 'styled-components';

const ProdutoFooterContainer = styled.div`
  width: 100%;
  height: 100%;
`
const ButtonAdicionarProduto = styled.button `
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
`

class ProdutoFooter extends React.Component  {
  constructor (props){
    super(props);

    this.state = {

    };
  }

  render () {
  return (
    <ProdutoFooterContainer>
      <ButtonAdicionarProduto>Adicionar Item</ButtonAdicionarProduto>
    </ProdutoFooterContainer>
  )}
}

export default ProdutoFooter;