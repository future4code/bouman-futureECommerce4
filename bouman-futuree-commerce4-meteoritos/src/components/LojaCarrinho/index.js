import React from "react";
import styled from "styled-components";

const MenuCarrinho = styled.div`
  display: flex;
  flex-direction: column;
  border-left: 1px solid lightgray;
  text-align: left;
  padding: 0.5vh 1vw;
  height: 100%;
  width: 300px;
`;

const BotaoCarrinho = styled.div`
  position: fixed;
  bottom: 20px;
  right: 20px;
  background-color: white;
  border-radius: 50%;
  box-shadow: 0px 0px 5px black;
  height: 80px;
  width: 80px;
  display: flex;
  cursor: pointer;
  transition: all 200ms;
  &:hover {
    box-shadow: 0px 0px 10px black;
  }
`;

const ImgCarrinho = styled.img`
  margin: auto;
  align-self: center;
  height: 50px;
  width: 50px;
`;

const ListaProduto = styled.ul`
  list-style: none;
  padding-inline-start: 0;
`;

const ItemProduto = styled.li`
  border-bottom: 1px dashed black;
`;

const ExcluirItem = styled.span`
  padding: 10px;
  font-weight: bold;
`;

class LojaCarrinho extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mostraMenu: true,
    };
  }

  aoClicarNoCarrinho = () => {
    this.setState({ mostraMenu: !this.state.mostraMenu });
  };

  render() {
    const listaDeItensNoCarrinho = this.props.listaCarrinho2.map((cadaItem) => {
      return <ItemProduto><ExcluirItem>X</ExcluirItem>{cadaItem.nome} - R$ {cadaItem.valor},00</ItemProduto>
    })
    console.log(listaDeItensNoCarrinho)
    return (
      <div>
        <BotaoCarrinho onClick={this.aoClicarNoCarrinho}>
          <ImgCarrinho
            src="https://icons-for-free.com/iconfiles/png/512/cart-131964784999299812.png"
            alt="Carrinho"
          />
        </BotaoCarrinho>
        {this.state.mostraMenu && (
          <MenuCarrinho>
            <h2>Carrinho:</h2>
            <ListaProduto>
              {listaDeItensNoCarrinho}
            </ListaProduto>
            <p>
              Total: <b>R$ 0,00</b>
            </p>
          </MenuCarrinho>
        )}
      </div>
    );
  }
}

export default LojaCarrinho