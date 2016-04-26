import React, {Component} from 'react';

class Search extends Component {

	onSubmit(e) {
		e.preventDefault();
		let username = this.refs.username.value.trim();
		if (!username) {
			return console.log('Please enter a username')
		}
		this.props.onFormSubmit(username);
		this.refs.username.value = '';
	}

	render() {
		return (
			<form onSubmit={this.onSubmit.bind(this)}>
				<input type="text" ref="username" className="search"/>
			</form>
		)
	}
}

export default Search;