import React from 'react';
import styled from 'styled-components';
import ProdutoFooter from './ProdutoFooter';

// Estilização

const ProdutoContainer = styled.div`
  width: 40%;
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

`
const ProdutoImage = styled.img `
  width: 100%;
  height: 130px;
`

const PNOme = styled.p `
  align-self: center;
  margin-top: 10px;
`

const PValor = styled.p `
  margin: 15px 0px 10px 5px;
`

// Código

function Produto (props) {
  return (
    <ProdutoContainer>
      <ProdutoImage src={"http://www.sun.org/uploads/meteoriteimages/4/mainimage_Seymchan_-_357g_4.JPG"}/>
      <PNOme>item 1</PNOme>
      <PValor>R${props.valor}</PValor>
      <ProdutoFooter/>
    </ProdutoContainer>
  )
}

export default Produto;