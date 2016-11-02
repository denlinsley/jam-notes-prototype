import React, { Component } from 'react';
import { Modal, Button } from 'semantic-ui-react';

import { base } from './utils/base';
import { getSongs } from './utils/phishin';
import AddNoteForm from './AddNoteForm'

class AddNoteModal extends Component {
    constructor(props) {
        super(props);
        this.state = { songs: [] }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentWillMount() {
        getSongs().then(data => this.setState({ songs: data }));
    }

    componentDidMount() {
        this.ref = base.syncState('notes', {
            context: this,
            state: 'notes',
            asArray: true
        });
    }

    componentWillUnmount() {
        base.removeBinding(this.ref);
    }

    handleSubmit(e, serializedForm) {
        e.preventDefault();
        console.log(serializedForm);

        base.push('notes', {
            data: serializedForm
        }).then(newLocation => {
            console.log('success', newLocation);
        }).catch(err => {
            console.log('error', err);
        });
    }

    render() {
        const triggerButton = <Button icon="plus" content="Add Note" />;

        return (
            <Modal trigger={triggerButton}>
                <Modal.Header>
                    Add New Note
                </Modal.Header>
                <Modal.Content>
                    <AddNoteForm
                        songs={this.state.songs}
                        onSubmit={this.handleSubmit}
                    />
                </Modal.Content>
                <Modal.Actions>
                    <Button icon="remove" content="Cancel" />
                    <Button type="submit" icon="checkmark" content="Save" positive />
                </Modal.Actions>
            </Modal>
        );
    }
}

export default AddNoteModal;
