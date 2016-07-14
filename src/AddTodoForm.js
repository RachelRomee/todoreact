import React from 'react';
import $ from 'jquery';

class AddTodoForm extends React.Component {

	addNewTodo(event){
    event.preventDefault();
		let component = this;
		let title = this.refs.addTodoInput.value;

		let newTodo = {
			id: null,
			title: title,
			completed: false
		};

	$.ajax({
		type: "POST",
		url: `https://whispering-thicket-55256.herokuapp.com/todos.json`,
		data: JSON.stringify({
			todo: newTodo
		}),
		contentType: "application/json",
		dataType: "json"
	})
		.done(function(data) {
			component.props.onChange();
			component.refs.addTodoInput.value = "";
		})
		.fail(function(error) {
			console.log(error);
		});
	}

  render() {
    return (
			<form onSubmit={this.addNewTodo.bind(this)}>
					<label>New Todo</label>
					<input ref="addTodoInput" />
					<button>Add Todo</button>
			</form>
    );
  }
}

export default AddTodoForm;
