import React, { Component } from 'react';
import { Link, withRouter } from 'react-router';
import { Header, Menu } from 'semantic-ui-react';

import { base } from '../utils/base';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = { activeItem: 'home' };
        this.handleItemClick = this.handleItemClick.bind(this);
        this.handleLogout = this.handleLogout.bind(this);
    }

    handleItemClick(e, { name }) {
        this.setState({ activeItem: name });
    }

    handleLogout() {
        if (base.auth().currentUser) {
            base.auth().signOut()
                .then(() => this.props.router.push('/login'))
                .catch(err => alert(err.message));
        } else {
            alert('No current user');
        }
    }

  render() {
    return (
        <div>
            <Menu pointing secondary>
                <Header as="h1">Jam Notes</Header>
                <Menu.Item>
                    <Link to="/home">Home</Link>
                </Menu.Item>
                <Menu.Item>
                    <Link to="/notes">Notes</Link>
                </Menu.Item>
                <Menu.Item>
                    <Link to="/login">Login</Link>
                </Menu.Item>
                <Menu.Menu position='right'>
                    <Menu.Item name='log out' icon="sign out" onClick={this.handleLogout} />
                </Menu.Menu>
            </Menu>
        {this.props.children}
        </div>
    );
  }
}

export default withRouter(App);
