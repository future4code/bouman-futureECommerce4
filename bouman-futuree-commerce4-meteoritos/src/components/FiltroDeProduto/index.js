import React from 'react';
import styled from 'styled-components';

const ContainerFiltro = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 120px;
  max-width: 35%;
  min-height: 50vh;
  border-right: 1px solid lightgray;
  padding: 10px;
`

const FiltroInputs = styled.div`
  margin: 10px 5px;
`

class FiltroDeProduto extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      valorMinInput: "",
      valorMaxInput: "",
      valorBuscaInput: ""
    }
  }

  onChangeMin = event => {
    this.setState({
      valorMinInput: Number(event.target.value)
    })
  }

  onChangeMax = event => {
    this.setState({
      valorMaxInput: Number(event.target.value)
    })
  }

  onChangeMin = event => {
    this.setState({
      valorBuscaInput: event.target.value
    })
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
            value={this.state.valorMinInput}
            onChange={this.onChangeMin}
          />
        </FiltroInputs>
        <FiltroInputs>
          <label id="valorMaximo">Valor Máximo:</label>
          <input
            type="number"
            name="valorMaximo"
            value={this.state.valorMaxInput}
            onChange={this.onChangeMax}
          />
        </FiltroInputs>
        <FiltroInputs>
          <label id="BuscarProduto">Produto:</label>
          <input
            type="text"
            name="busca"
            value={this.state.valorBuscaInput}
            onChange={this.onChangeBusca}
          />
        </FiltroInputs>
      </ContainerFiltro>
    );
  }
}

export default FiltroDeProduto;