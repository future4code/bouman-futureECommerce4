import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

function FiltradosPorPreco(props) {
    const produtosFiltrados = props.valor.filter((cadaValor) =>{
        if(cadaValor >0){
            return true
        }else{
            return false
        }
        

    })

    console.log(produtosFiltrados)
    return (
        <div>
            <ul>
                {props.valor.map(cadaValor => {
                    return <li>{cadaValor}</li>;
                })}
            </ul>
        </div>
    )
}

export default FiltradosPorPreco;