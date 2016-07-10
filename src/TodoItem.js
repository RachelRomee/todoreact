import React from 'react';
import jQuery from 'jquery';

class TodoItem extends React.Component {
	componentDidMount() {
		this.setState({
			id: this.props.id,
			title: this.props.title,
			completed: this.props.completed,
			createdAt: this.props.createdAt,
			updatedAt: this.props.updatedAt
		})
	}

	render() {
		console.log(this.props);
    return (
			<li>{this.props.title}</li>
    );
  }
}

export default TodoItem;
