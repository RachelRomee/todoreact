import React from 'react';
import jQuery from 'jquery';

class TodoItem extends React.Component {

	constructor() {
	super();

	this.state = {
		loading: true
		};
	}

	componentDidMount() {
		this.setState({
			id: this.props.id,
			title: this.props.title,
			completed: this.props.completed,
			createdAt: this.props.createdAt,
			updatedAt: this.props.updatedAt,
			loading: !!!this.props.id
		});
	}

	toggleChecked(event) {
		this.syncState({
			completed: this.refs.completed.checked
		});
	}

	syncState(updatedState) {
		console.log("Syncing state!");

		this.setState({
			loading: true
		});

		let component = this;

		let newState = jQuery.extend({
			id: this.state.id,
			title: this.state.title,
			completed: this.state.completed
		}, updatedState);

		this.setState(newState);

		jQuery.ajax({
			type: "PUT",
			url: `https://whispering-thicket-55256.herokuapp.com/todos/${this.props.id}.json`,
			data: JSON.stringify({
				todo: newState
			}),
			contentType: "application/json",
			dataType: "json"
		})
			.done(function(data) {
				console.log(data);

				component.setState({
					id: data.id,
					title: data.title,
					completed: data.completed,
					createdAt: data.created_at,
					updatedAt: data.updated_at
				});
			})
			.fail(function(error) {
				console.log(error);
			})
			.always(function() {
				component.setState({
					loading: false
				});
				component.props.onChange();
			});
	}

	deleteTodo(e) {
		e.preventDefault();

		let component = this;

		jQuery.ajax({
			type: "DELETE",
			url: `https://whispering-thicket-55256.herokuapp.com/todos/${this.props.id}.json`,
			contentType: "application/json",
			dataType: "json"
		})
			.done(function(data) {
				console.log(data);
			})
			.fail(function(error) {
				console.log(error);
			})
			.always(function() {
				component.props.onDestroy();
			});
	}

// ^^ RENDER
	render() {
		console.log(this.state.id);
    return (
			<div style={styles.div}>
				<li style={styles.li}>
					<input style={styles.checkbox} className="toggle" id={this.state.id} type="checkbox" ref="completed" checked={this.state.completed ? "checked" : ""} onClick={this.toggleChecked.bind(this)} />
					<p style={styles.text}>	{this.props.title} </p>
					<a href="#" onClick={this.deleteTodo.bind(this)}><img style={styles.delete} src="https://cdn4.iconfinder.com/data/icons/linecon/512/delete-512.png"/></a>
				</li>
			</div>
    );
  }
}

export default TodoItem;

const styles = {
	div: {
		width: "60%",
		height: "80px",
		border: "1px solid #eee",
		borderRadius: "4px",
		margin: "15px auto",
		position: "relative",
		backgroundColor: "rgba(255,255,255,1)"
	},
	li: {
		listStyleType: "none",
	},
	text: {
		color: "#000",
		display: "inline-block",
		paddingLeft: "11.2%",
		paddingTop: "5px",
		fontSize: "24px"
	},
	checkbox: {
		position: "absolute",
		top: "50%",
		left: "5%",
		transform: "translateY(-50%)"
	},
	delete: {
		float: "right",
		width: "25px",
		margin: "auto 0px",
		position: "absolute",
		top: "50%",
		right: "5%",
		transform: "translateY(-50%)"
	}
}
