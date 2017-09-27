import React from 'react';

class Todo extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <li>
                { this.props.todo.text }
                <button onClick={ (e) => this.props.remove(this.props.todo.id) }>X</button>
            </li>
        )
    }
}

export default Todo;