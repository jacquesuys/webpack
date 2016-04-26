import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Profile from './github/Profile.jsx';
import Search from './github/Search.jsx';

class App extends Component {
	constructor(props){
		super(props);
		this.state = {
			username: 'jacquesuys',
			userData: [],
			userRepos: [],
			perPage: 5
		}
	}

	getUserData() {
		$.ajax({
			url: `https://api.github.com/users/${this.state.username}?client_id=${this.props.clientId}&client_secret=${this.props.clientSecret}`,
			dataType: 'json',
			cache: false,
			success: function(data) {
				this.setState({userData: data});
			}.bind(this),
			error: function(xhr, status, error) {
				console.error(error);
			}.bind(this)
		});
	}

	getUserRepos() {
		$.ajax({
			url: `https://api.github.com/users/${this.state.username}/repos?per_page=${this.props.perPage}&client_id=${this.props.clientId}&client_secret=${this.props.clientSecret}`,
			dataType: 'json',
			cache: false,
			success: function(data) {
				this.setState({userRepos: data});
			}.bind(this),
			error: function(xhr, status, error) {
				console.error(error);
			}.bind(this)
		});
	}

	handleFormSubmit(username) {
		this.setState({username: username}, function() {
			this.getUserData();
			this.getUserRepos();
		});
	}

	componentDidMount() {
		this.getUserData();
		this.getUserRepos();
	}

	render() {
		return (
			<div>
				<Search onFormSubmit={this.handleFormSubmit.bind(this)} />
				<Profile {...this.state} />
			</div>
		)
	}
}

App.propTypes = {
	clientId: React.PropTypes.string,
	clientSecret: React.PropTypes.string
}

App.defaultProps = {
	clientId: '1d36be2da3758e743804',
	clientSecret: '944a4aeedb87cd05ea50434bb02e4ed883558aab'
}

export default App;