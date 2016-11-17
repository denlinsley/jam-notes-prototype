import React, { Component } from 'react';
import { Button, Loader, Table } from 'semantic-ui-react';

import { base } from '../utils/base';
import { makeRandomNote } from '../utils/faker';

class NotesList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            notes: []
        };
        this.handleDelete = this.handleDelete.bind(this);
        this.viewDetail = this.viewDetail.bind(this);
        this.pushRandomNote = this.pushRandomNote.bind(this);
    }

    componentWillMount() {
        base.bindToState('/notes', {
            context: this,
            state: 'notes',
            asArray: true,
            then() {
                this.setState({
                    isLoading: false
                });
            }
        });
    }

    handleDelete(note) {
        base.remove(`/notes/${note.key}`)
            .catch(err => console.warn(err));
    }

    viewDetail(note) {
        // TODO: hmm...I have the router even though I didn't use `withRouter`
        this.props.router.push(`/notes/${note.key}`);
    }

    pushRandomNote() {
        const note = makeRandomNote();
        base.push('/notes', {
            data: note
        });
    }

    render() {
        return (
            <div>
                <h1>This is the notes list page</h1>
                <Button icon="wizard" content="Push Random Note" onClick={this.pushRandomNote} />
                {this.state.isLoading ?
                    <Loader active content="Loading" />
                    :
                    <Table>
                        <Table.Header>
                            <Table.Row>
                                <Table.HeaderCell>Song</Table.HeaderCell>
                                <Table.HeaderCell>Show Date</Table.HeaderCell>
                                <Table.HeaderCell>Note</Table.HeaderCell>
                                <Table.HeaderCell></Table.HeaderCell>
                            </Table.Row>
                        </Table.Header>

                        <Table.Body>
                            {this.state.notes.map(note => (
                                <Table.Row key={note.key}>
                                    <Table.Cell>{note.song}</Table.Cell>
                                    <Table.Cell>{note.showDate}</Table.Cell>
                                    <Table.Cell>{note.note}</Table.Cell>
                                    <Table.Cell>
                                        <Button circular color="blue" icon="unhide" size="mini" onClick={() => this.viewDetail(note)} />
                                        <Button circular color="red" icon="trash" size="mini" onClick={() => this.handleDelete(note)} />
                                    </Table.Cell>
                                </Table.Row>
                            ))}
                        </Table.Body>
                    </Table>


                }
            </div>
        );
    }
}

export default NotesList;

// <ul>
//     {this.state.notes.map(note => (
//         <li key={note.key}>
//             <pre>{JSON.stringify(note, null, 2)}</pre>
//
//         </li>
//     ))}
// </ul>
