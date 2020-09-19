import React from 'react';

import { userService, authenticationService } from '@/_services';

class HomePage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            currentUser: authenticationService.currentUserValue,
            userFromApi: null
        };
    }

    componentDidMount() {
        const { currentUser } = this.state;
        userService.getById(currentUser.id).then(userFromApi => this.setState({ userFromApi }));
    }

    render() {
        const { currentUser, userFromApi } = this.state;
        return (
            <div>
                <h1>Profile: </h1>
                <p></p>
                <p>Name: {currentUser.name}</p>
                <p>Email: {currentUser.email}</p>
                <p>Role: {currentUser.role}</p>
            </div>
        );
    }
}

export { HomePage };