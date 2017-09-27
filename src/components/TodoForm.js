import React from 'react';

class TodoForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            textInput: ''
        }
    }

    onChangeHandler(val) {
        this.setState({
            textInput: val
        });
    }

    onClickHandler() {
        this.props.addTodo(this.state.textInput);
        this.setState({
            textInput: ''
        });
    }

    render() {
        return (
            <div>
                <input onChange={ (e) => this.onChangeHandler(e.target.value) } value={ this.state.textInput } />
                <button onClick={ (e) => this.onClickHandler() }>Add</button>
            </div>
        )
    }
}

export default TodoForm;