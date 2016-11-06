import React from 'react';
import { Link } from 'react-router';
import { Button, Container, Header, Icon } from 'semantic-ui-react';

function NotFound(props) {
    return (
        <div>
        <Header as="h2" icon textAlign="center">
            <Icon name="announcement" circular />
                <Header.Content>
                    Boy Man God Shit
                </Header.Content>
            </Header>
            <Container textAlign="center">
                <h3>Sorry, but we couldn't find the page you were looking for.</h3>
                <p>Whatever you do, take care of your shoes!</p>
                <Link to="/home">
                    <Button color="green" size="big" inverted>
                        <Icon name="hand peace" /> OK
                    </Button>
                </Link>
            </Container>

        </div>
    );
}

export default NotFound;
