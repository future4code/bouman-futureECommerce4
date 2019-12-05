import React from "react";
import styled from "styled-components";

const MenuCarrinho = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid black;
  text-align: left;
  padding: 0.5vh 1vw;
`;

const BotaoCarrinho = styled.div`
  position: fixed;
  bottom: 20px;
  right: 20px;
  background-color: white;
  border-radius: 50%;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 0px 5px;
  height: 100px;
  width: 100px;
  display: flex;
  cursor: pointer;
`;

const ImgCarrinho = styled.img`
  margin: auto;
  align-self: center;
  height: 80px;
  width: 80px;
`;

export default class LojaCarrinho extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mostraMenu: false
    };
  }

  aoClicarNoCarrinho = () => {
    this.setState({ mostraMenu: !this.state.mostraMenu });
  };

  render() {
    return (
      <div>
        <BotaoCarrinho>
          <ImgCarrinho
            onClick={this.aoClicarNoCarrinho}
            src="https://icons-for-free.com/iconfiles/png/512/cart-131964784999299812.png"
            alt="carrinho"
          />
        </BotaoCarrinho>
        {this.state.mostraMenu && (
          <MenuCarrinho>
            <h2>Carrinho</h2>
            <ul>
              <li>1x Item C</li>
            </ul>
            <p>
              Total: <b>R$ 0,00</b>
            </p>
          </MenuCarrinho>
        )}
      </div>
    );
  }
}