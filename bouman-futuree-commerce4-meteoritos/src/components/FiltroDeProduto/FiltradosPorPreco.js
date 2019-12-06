import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

function FiltradosPorPreco(props) {
    const produtosFiltrados = props.valor.filter((cadaValor) =>{
        if(cadaValor.valor > 1000){
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
                    return console.log(cadaValor.valor)
                })}
            </ul>
        </div>
    )
}

export default FiltradosPorPreco;