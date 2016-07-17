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
			 <h1 style={styles.title}>WooHoo!</h1>
			 <AddTodoForm onChange={this.loadTodos.bind(this)} />
			 <div style={styles.counts}>
			 		<div style={styles.count}> Todo: {this.state.counts.todo}</div>
					<div style={styles.count}>Done: {this.state.counts.done}</div>
					<div style={styles.count}>Total: {this.state.todos.length}</div>
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
				<footer style={styles.footer}>by Rachel Romée &hearts;</footer>
      </div>
    );
  }
}

export default TodoList;

const styles = {
	title : {
		color: "white",
		textAlign:"center",
		paddingTop: 30,
		fontSize: 50,
		fontWeight: 300
	},
	counts: {
		textAlign: "center",
		width: "55%",
		marginLeft: "22.5%",
		marginTop: 20,
		marginBottom: 10,
		fontSize: 18,
		color: "white",
		fontWeight: 300
	},
	count: {
		display: "inline",
		padding: 20,
	},
	footer: {
		textAlign: "center",
		marginTop: 40,
		padding: 10,
		backgroundColor: "rgba(255,255,255,0.4)",
		fontSize: 13,
		color: "white"
	}
}
