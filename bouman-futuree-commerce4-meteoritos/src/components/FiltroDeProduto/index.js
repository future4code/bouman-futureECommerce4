import React from 'react';
import styled from 'styled-components';

const ContainerFiltro = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 120px;
  max-width: 35%;
  min-height: 50vh;
  border: 1px solid black;
  padding: 10px;
`

const FiltroInputs = styled.div`
  margin: 10px 5px;
`

class FiltroDeProduto extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render() {
    return (
      <ContainerFiltro>
        <h1>Filtros:</h1>
        <FiltroInputs>
          <label id="valorMinimo">Valor Mínimo:</label>
          <input 
          type="number"
          name="valorMinimo"
          />
        </FiltroInputs>
        <FiltroInputs>
          <label id="valorMaximo">Valor Máximo:</label>
          <input 
          type="number"
          name="valorMaximo"
          />
        </FiltroInputs>
        <FiltroInputs>
          <label id="BuscarProduto">Valor Produto:</label>
          <input 
          type="text"
          name="busca"
          />
        </FiltroInputs>
      </ContainerFiltro>
    );
  }
}

export default FiltroDeProduto;