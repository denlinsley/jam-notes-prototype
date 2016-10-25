import React from 'react';
import { Form, Button } from 'semantic-ui-react';

const AddNoteForm = (props) => {
    return (
        <Form onSubmit={props.onSubmit}>
            <Form.Group widths="equal">
                <Form.Input
                    name="song"
                    label="Song"
                    placeholder="Enter the name of the song"
                />
                <Form.Input
                    name="showDate"
                    label="Show Date"
                    placeholder="Enter the date of the show"
                />
            </Form.Group>
            <Form.Input
                name="link"
                label="Link"
                placeholder="Enter an audio or video link"
            />
            <Form.TextArea
                name="note"
                label="Note"
                placeholder="Enter your notes..."
            />
            <Button type="submit" positive icon="checkmark" content="Submit" />
        </Form>
    );
};


export default AddNoteForm;
