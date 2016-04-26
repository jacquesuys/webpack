import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Profile from './github/Profile.jsx';

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
				console.log(data);
			}.bind(this),
			error: function(xhr, status, error) {
				console.error(error);
			}.bind(this)
		});
	}

	componentDidMount() {
		this.getUserData();
	}

	render() {
		return (
			<Profile userData={this.state.userData} />
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