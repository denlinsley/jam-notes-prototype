import React, { Component } from 'react';
import { withRouter } from 'react-router';
import {
    Button,
    Container,
    Form,
    Header,
    Message
} from 'semantic-ui-react';

import { base } from '../utils/base';
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
        console.debug('currentUser', base.auth().currentUser);
        if (base.auth().currentUser) {
            this.props.router.push('/home');
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
        base.auth().signInWithEmailAndPassword(email, password)
            .then(() => this.props.router.push('/home'))
            .catch(err => this.setState({ error: err.message }));
    }

    render() {
        return (
            <Container text>
                <Header as="h2" content="Log in" />
                <Form onSubmit={this.handleSubmit} error={this.state.error !== ''}>
                    {/* FYI `refs` don't work with functional components */}
                    <SingleInput
                      inputType="text"
                      label="Email"
                      name="email"
                      controlFunc={this.handleEmailChange}
                      value={this.state.email}
                      hasError={this.state.error.includes('email')}
                    />
                    <SingleInput
                      inputType="password"
                      label="Password"
                      name="password"
                      controlFunc={this.handlePasswordChange}
                      value={this.state.password}
                      hasError={this.state.error.includes('password')}
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
                      list={[this.state.error]}
                    />
                </Form>
            </Container>
        );
    }
}

export default withRouter(Login);
