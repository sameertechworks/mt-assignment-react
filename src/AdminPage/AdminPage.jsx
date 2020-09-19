import React from 'react';

import { userService } from '@/_services';

class AdminPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            users: null
        };
    }

    componentDidMount() {
        userService.getAll().then(users => this.setState({ users }));
    }

    renderTableHeader = () => {
        let header = ['Name', 'Email', 'Role',]
        return header.map((key, index) => {
           return <th key={index}>{key.toUpperCase()}</th>
        })
     }

    render() {
        const { users } = this.state;
        return (
            <div>
                <h1>User details: </h1>
                <div>
                    {users &&
                        <table id='results'>
                        <tbody>
                           <tr>{this.renderTableHeader()}</tr>
                           {users.map(user =>
                           <tr>
                                <td>{user['name']}</td>
                                <td>{user['email']}</td>
                                <td>{user['role']}</td>                  
                            </tr>
                            )}
                        </tbody>
                     </table>
                    }
                </div>
            </div>
        );
    }
}

export { AdminPage };