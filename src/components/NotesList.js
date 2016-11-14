import React, { Component } from 'react';
import { Loader } from 'semantic-ui-react';

import { base } from '../utils/base';

class NotesList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            notes: []
        };
        this.handleDelete = this.handleDelete.bind(this);
    }

    componentWillMount() {
        base.bindToState('/notes', {
            context: this,
            state: 'notes',
            asArray: true,
            then() {
                this.setState({ isLoading: false });
            }
        });
    }

    handleDelete(note) {
        console.debug('note', note);
        base.remove(`/notes/${note.key}`)
            .catch(err => console.warn(err));
    }

    render() {
        return (
            <div>
                <h1>This is the notes list page</h1>
                {this.state.isLoading ?
                    <Loader active content="Loading" />
                    :
                    <ul>
                        {this.state.notes.map(note => (
                            <li key={note.key}>
                                <pre>{JSON.stringify(note, null, 2)}</pre>
                                <button onClick={() => this.handleDelete(note)}>Delete</button>
                            </li>
                        ))}
                    </ul>
                }
            </div>
        );
    }
}

export default NotesList;
