import React from 'react';
import $ from 'jquery';
	// import TodoForm from './TodoForm';
import TodoItem from './TodoItem';

class TodoList extends React.Component {
	constructor() {
		super();

		this.state = {
			todoItems: [
				{id: 0, title: "", completed: false}
			]
		};
	}

	componentDidMount() {
		this.loadTodos();
	}

	loadTodos(event) {
		$.getJSON(`https://whispering-thicket-55256.herokuapp.com/todos.json`, function(data) {
			console.log(data[0].title);
		});
	}

	// loadTodos() {
	// 	let url = this.props.url;
	// 	let component = this;
	//
	// 	$.ajax({
	// 		type: get
	// 	})
	// }

	render() {
    return (
      <div>
      </div>
    );
  }
}

export default TodoList;
