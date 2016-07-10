import React from 'react';
import $ from 'jquery';
	// import TodoForm from './TodoForm';
import TodoItem from './TodoItem';

class TodoList extends React.Component {
	constructor() {
		super();

		this.state = {
			todos: [
				{id: 0, title: "", completed: false}
			]
		};
	}


	componentDidMount() {
		this.loadTodos();
	}

	loadTodos(event) {
		let component = this;

		$.getJSON(`https://whispering-thicket-55256.herokuapp.com/todos.json`, function(data) {
			console.log(data);

			component.setState({
				todos: data
			});
		});
	}

	renderTodos(todo, i) {
		return (
			<TodoItem
				key={todo.id}
				id={todo.id}
				title={todo.title}
				completed={todo.completed}
				createdAt={todo.created_at}
				updatedAt={todo.updated_at} />
		);
	}

	render() {
		let todos = this.state.todos
    return (
      <div>
				<ul>
	        {this.state.todos.map(this.renderTodos.bind(this))}
	      </ul>
      </div>
    );
  }
}

export default TodoList;
