import React, { Component } from 'react';
import { withRouter } from 'react-router';
import {
    Button,
    Container,
    Form,
    Header,
    Message
} from 'semantic-ui-react';

import { auth } from '../utils/base';
import SingleInput from './FormFields/SingleInput';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            error: ''
        };
        // don't forget to bind callbacks!!! (otherwise, `this` inside handleSubmit is undefined)
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentWillMount() {
        if (auth.currentUser) {
            // this.props.router.push('/home');
        }
    }

    handleEmailChange(e) {
        this.setState({
            email: e.target.value,
            error: ''
         });
    }

    handlePasswordChange(e) {
        this.setState({
            password: e.target.value,
            error: ''
         });
    }

    handleSubmit(e, serializedForm) {
        e.preventDefault();
        const { email, password } = serializedForm;
        auth.signInWithEmailAndPassword(email, password)
            .then(() => this.props.router.push('/home'))
            .catch(err => this.setState({ error: err.message }));
    }

    render() {
        const { email, password, error } =this.state;
        return (
            <Container text>
                <Header as="h2" content="Log in" />
                <Form onSubmit={this.handleSubmit} error={error !== ''}>
                    {/* FYI `refs` don't work with functional components */}
                    <SingleInput
                      inputType="text"
                      label="Email"
                      name="email"
                      controlFunc={this.handleEmailChange}
                      value={email}
                      hasError={error.includes('email')}
                    />
                    <SingleInput
                      inputType="password"
                      label="Password"
                      name="password"
                      controlFunc={this.handlePasswordChange}
                      value={password}
                      hasError={error.includes('password')}
                    />
                    <Button
                      type="submit"
                      content="Log in"
                      icon="sign in"
                      primary
                    />
                    <Message
                      error
                      header="Failed to log in"
                      list={[error]}
                    />
                </Form>
            </Container>
        );
    }
}

export default withRouter(Login);
