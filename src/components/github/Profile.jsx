import React, {Component} from 'react';
import RepoList from './RepoList.jsx';

class Profile extends Component {
	constructor(props){
		super(props);
		this.state = {
			username: 'jacquesuys',
			userData: [],
			userRepos: [],
			perPage: 5
		}
	}

	render() {
		return (
			<div>
				<img src={this.props.userData.avatar_url} />
				<div><strong>Username:</strong> {this.props.userData.login}</div>
				<div><strong>Location:</strong> {this.props.userData.location}</div>
				<div><strong>Public Repos:</strong> {this.props.userData.public_repos}</div>
				<a href={this.props.userData.url} title="github">GitHub</a>
				<hr/>
				<RepoList userRepos={this.props.userRepos} />
			</div>
		)
	}
}

export default Profile;