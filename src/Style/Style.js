import React from 'react';

let style = (props) => {
    let myBoxStyle = {
        border: '1px solid black',
        borderRadius: '20px',
        display: 'inline-block',
        padding: '16px',
        margin: '16px',
        textAlign: 'center',
        backgroundColor: '#' + Math.floor(Math.random()*16777215).toString(16)
    }
    
    return (
        <div style={myBoxStyle} onClick={props.click}>
            {props.letter}
        </div>
    );
    }

export default style