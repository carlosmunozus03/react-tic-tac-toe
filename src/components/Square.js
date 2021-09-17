// will render a button
import React from 'react';

function Square(props) {
    return (
        <button className="square"
                onClick={() => props.onClick()}>
            {props.value}
        </button>
    )
}

export default Square;
//on[Event] para props(accesorios) que representan eventos
//handle[Event] para metodos(funciones) que manejan los eventos