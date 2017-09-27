import React from 'react';

import Todo from './Todo';

class TodoList extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const elements = this.props.todos.map(todo => {
            return <Todo todo={ todo } key={ todo.id } remove={ this.props.removeTodo } />
        });

        return (
            <ul>
                { elements }
            </ul>
        )
    }
}

export default TodoList;