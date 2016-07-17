import React from 'react';
import $ from 'jquery';
import _ from 'lodash';
import AddTodoForm from './AddTodoForm';
import TodoItem from './TodoItem';


class TodoList extends React.Component {
	constructor() {
		super();

		this.state = {
			todos: [
				{id: 0, title: "", completed: false}
			],
			counts: {
				todo: 0,
				done: 0
			}
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

			component.reCount();
		});
	}

	reCount() {
		let component = this;

		this.setState({
			counts: {
				todo: component.todosTodo().length,
				done: component.todosDone().length
			}
		});
	}

	todosTodo() {
		return this.state.todos.filter(function(todo, i) {

			return todo.completed !== true;
		});
	}

	todosDone() {
		return this.state.todos.filter(function(todo, i) {
			return todo.completed === true;
		});
	}

	render() {
    return (
      <div>
			 <h1>WooHoo!</h1>
			 <AddTodoForm onChange={this.loadTodos.bind(this)} />
			 <div>
			 		Todo: {this.state.counts.todo}
					Done: {this.state.counts.done}
					Total: {this.state.todos.length}
			 </div>
				<ul>
	        {this.state.todos.map(function(todo,i)  {
						console.log(todo.completed)
						return (
							<TodoItem
								key={todo.id}
								id={todo.id}
								title={todo.title}
								completed={todo.completed}
								createdAt={todo.created_at}
								updatedAt={todo.updated_at}
								onChange={this.loadTodos.bind(this)}
								onDestroy={this.loadTodos.bind(this)} />
						);
					}, this)}
	      </ul>
      </div>
    );
  }
}

export default TodoList;
