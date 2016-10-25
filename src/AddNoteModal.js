import React, { Component } from 'react';
import { Modal, Button } from 'semantic-ui-react';

import AddNoteForm from './AddNoteForm'

class AddNoteModal extends Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e, serializedForm) {
        e.preventDefault()
        console.log(serializedForm);
    }

    render() {
        const triggerButton = <Button icon="plus" content="Add Note" />;

        return (
            <Modal trigger={triggerButton}>
                <Modal.Header>
                    Add New Note
                </Modal.Header>
                <Modal.Content>
                    <AddNoteForm onSubmit={this.handleSubmit} />
                </Modal.Content>
                <Modal.Actions>
                    <Button icon="remove" content="Cancel" />
                    <Button type="submit" positive icon="checkmark" content="Save" />
                </Modal.Actions>
            </Modal>
        );
    }
}

export default AddNoteModal;
