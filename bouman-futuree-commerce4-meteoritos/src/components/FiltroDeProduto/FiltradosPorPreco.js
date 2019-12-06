import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

function FiltradosPorPreco(props) {

    return (
        <div>
            <ul>
                {props.lista.map(valores => {
                    return <li>{valor}</li>;
                })}
            </ul>
        </div>
    )
}

export default FiltradosPorPreco;