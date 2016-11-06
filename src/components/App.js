import React, { Component } from 'react';
import { Link } from 'react-router';
import { Header, Menu } from 'semantic-ui-react';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = { activeItem: 'home' };
        this.handleItemClick = this.handleItemClick.bind(this);
    }

    handleItemClick(e, { name }) {
        this.setState({ activeItem: name });
    }

  render() {
    const { activeItem } = this.state;

    return (
      <div>
        <Menu pointing secondary>
            <Header as="h1">Jam Notes</Header>
            <Menu.Item>
                <Link to="/home">Home</Link>
            </Menu.Item>
            <Menu.Item>
                <Link to="/notes">Login</Link>
            </Menu.Item>
            <Menu.Item>
                <Link to="/login">Login</Link>
            </Menu.Item>
            <Menu.Menu position='right'>
                <Menu.Item name='logout' active={activeItem === 'logout'} onClick={this.handleItemClick} />
            </Menu.Menu>
        </Menu>
        {this.props.children}
      </div>
    );
  }
}

export default App;
