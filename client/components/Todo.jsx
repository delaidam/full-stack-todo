import React from 'react';
import axios from 'axios';

class Todo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title : '',
      todos: []
    };

    this.onChange = this.onChange.bind(this);
    this.addTodo = this.addTodo.bind(this);
  }

  onChange(event) {
    this.setState({ title: event.target.value });
  }

  componentDidMount() {
    axios.get('/api/todos')
      .then((res) => {
        const todos = res.data;
        this.setState(todos);
      })
  }

  addTodo(event) {
    event.preventDefault();
    
    axios.post('/api/todos', this.state )
      .then(res => {
        console.log(res.data);
      });
  }

  render() {
    return (
      <div className="container">
        <form onSubmit={this.addTodo}>
          <br/><h3>Add a new todo</h3>
          <div className="form-group">
            <input type="text" name="item" className="form-control" value={this.state.title} onChange={this.onChange}/>
          </div>
          <div className="form-group">
            <button className="btn btn-primary btn-lg">Add Item</button>
          </div>
        </form>
        <hr/>
        <h3>List of Todos</h3>
        <ul class="list-group">
          { this.state.todos.map((todo) => <li className="list-group-item">{todo.title} 
          &nbsp; <button className="btn btn-info btn-sm">Edit</button>&nbsp;
          <button className="btn btn-danger btn-sm">Delete</button></li>)}
        </ul>
      </div>
    );
  }
}

export default Todo;
