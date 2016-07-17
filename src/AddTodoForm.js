import React from 'react';
import $ from 'jquery';
import ColorSet from './styles/ColorSet';

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
						<button style={styles.btn}>Add</button>
				</form>
			</div>
    );
  }
}

export default AddTodoForm;

const styles = {
	adddiv: {
		width: "58%",
		height: "80px",
		borderRadius: "4px",
		marginLeft: "22.5%",
		backgroundColor: "rgba(255,255,255,1)"
	},
	input: {
		width: "75%",
		height: "65px",
		margin: "0.7%",
		display: "inline-block",
		fontSize: "24px",
		paddingLeft: "8%",
		borderRadius: "4px",
		borderColor: ColorSet.primary,
		fontWeight: "300"
	},
	btn: {
		width: "8.7% ",
		height: "69px",
		backgroundColor: ColorSet.primary,
		border: "none",
		position: "absolute",
		marginTop: "0.5%",
		borderRadius: "4px",
		fontSize: "24px",
		fontWeight: "300",
		color: "white"
	}
}
