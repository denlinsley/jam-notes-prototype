import React from 'react';
import { Form, Button } from 'semantic-ui-react';
import Datetime from 'react-datetime';

import '../../node_modules/react-datetime/css/react-datetime.css';


const AddNoteForm = (props) => {
    const songOptions = props.songs.map(song => ({
        text: song.title,
        value: song.slug
    }));

    return (
        <Form onSubmit={props.onSubmit}>
            <Form.Group widths="equal">
                {/* <Form.Input
                    name="song"
                    label="Song"
                    placeholder="Enter the name of the song"
                /> */}
                <Form.Select
                    name="song"
                    label="Song"
                    placeholder="Select a song"
                    options={songOptions}
                />
                {/* <Form.Input
                    name="showDate"
                    label="Show Date"
                    placeholder="Enter the date of the show"
                /> */}
                <div className="field">
                    <label htmlFor="showDate">Show Date</label>
                    <div id="ui input">
                        <Datetime
                          inputProps={{name: 'showDate'}}
                          timeFormat={false}
                          viewMode="years"
                          closeOnSelect
                        />
                    </div>
                </div>

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
            <Button
                type="submit"
                positive
                icon="checkmark"
                content="Submit"
            />
        </Form>
    );
};

export default AddNoteForm;
