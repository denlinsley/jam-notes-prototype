import React, { Component } from 'react';
import { Link, withRouter } from 'react-router';
import { Container, Header, Menu } from 'semantic-ui-react';

import { base, auth } from '../utils/base';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeItem: 'home',
            user: null
        };
        this.handleItemClick = this.handleItemClick.bind(this);
        this.handleLogout = this.handleLogout.bind(this);
    }

    componentWillMount() {
        console.debug('user', base.auth().currentUser);
        this.setState({ user: base.auth().currentUser })
    }

    handleItemClick(e, { name }) {
        this.setState({ activeItem: name });
    }

    handleLogout() {
        if (auth.currentUser) {
            auth.signOut()
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
                <Menu.Menu position="right">
                    {this.state.user
                        ? <Menu.Item name="log out" icon="sign out" onClick={this.handleLogout} />
                        : <Link to="/login">Log In</Link>
                    }
                </Menu.Menu>
            </Menu>
            <Container>
                {this.props.children}
            </Container>
        </div>
    );
  }
}

export default withRouter(App);
