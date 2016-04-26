import React, {Component} from 'react';
import ReactDOM from 'react-dom';

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

	componentDidMount() {
	}

	render() {
		return (
			<div>
				{this.props.userData.name}
				<img src={this.props.userData.avatar_url} />
			</div>
		)
	}
}

export default Profile;