import React from 'react';
import $ from 'jquery';
import ColorSet from './styles/ColorSet';

const styles = {
	adddiv: {
		width: "60%",
		height: "80px",
		border: "1px solid #eee",
		borderRadius: "4px",
		margin: "15px auto",
	},
	input: {
		width: "75%",
		height: "65px",
		// border: "none",
		margin: "0.7%",
		color: "#000",
		display: "inline-block",
		fontFamily: "'Roboto', sansSerif",
		fontSize: "24px",
		paddingLeft: "8%",
		borderRadius: "4px"
	},
	btn: {
		width: "8.4%",
		height: "69px",
		backgroundColor: ColorSet.primary,
		border: "none",
		position: "fixed",
		marginTop: "0.5%",
		borderRadius: "4px"
	}
}

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
			<div style={styles.adddiv}>
				<form onSubmit={this.addNewTodo.bind(this)}>
						<input style={styles.input} ref="addTodoInput" placeholder="I have to.." />
						<button style={styles.btn}>Add Todo</button>
				</form>
			</div>
    );
  }
}

export default AddTodoForm;
