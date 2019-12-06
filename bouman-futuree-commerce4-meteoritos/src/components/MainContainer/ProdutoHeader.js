import React from "react";
import styled from "styled-components";


const Produto = styled.div`
  height: 30px; 
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0;
  border-bottom: 1px solid black;
  
`
const Select = styled.select`
  margin-right: 5px;
`


const Texto = styled.p`
  padding-left: 5px;
`

export default function ProdutoHeader (props) {
    return (
        <Produto>
            <Texto>Quantidade de Produtos: {props.numero}</Texto>
            <Select>
              <option>Preço: Crescente</option>
              <option>Preço: Decrescente</option>
            </Select>
        </Produto>
    )
}