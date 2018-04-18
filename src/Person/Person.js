import React from 'react';

import './Person.css';

const person = (props) => {
    return (
        <div className="Person">
            <p onClick={props.click}>Eu sou {props.name} e tenho {props.age} anos de idade!</p>
            <p>{props.children}</p>
            <input type="texte" onChange={props.changed}
                value={props.name} />
        </div>
    )
};

export default person