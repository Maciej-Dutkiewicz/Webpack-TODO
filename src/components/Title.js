import React from 'react';


const Title = props => {
    return (
        <div>
            <h1>{props.title}</h1>
            <div>{props.number}</div>
        </div>
    )
};
export default Title;