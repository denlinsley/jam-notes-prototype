import React, { Component } from 'react';

import { base } from '../utils/base';

class NotesDetail extends Component {
    constructor(props) {
        super(props);
        this.state = { note: null };
    }

    componentWillMount() {
        base.fetch(`/notes/${this.props.params.id}`, {
            context: this,
            then(data) {
              this.setState({ note: data });
            }
        });
    }

    render() {
        return (
            <div>
                <h1>This is the notes detail page</h1>
                <pre>{JSON.stringify(this.state.note, null, 2)}</pre>
            </div>
        );
    }
}

export default NotesDetail;
