import React from 'react';

let textComponent = (props) => {
    let inputText = 'Text is too short!';

    if (props.textLength >= 5) {
        inputText = 'That\'s OK';
    }

    return(
        <div>
            <p>{inputText}</p>
        </div>

        
    );

}

export default textComponent;