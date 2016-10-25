import React, { Component } from 'react';
import { Container, Card } from 'semantic-ui-react';

import NavMenu from './NavMenu';
import RecentCard from './RecentCard';
import AddNoteModal from './AddNoteModal';

const sampleNotes = [
    { song: 'Bathtub Gin', showDate: '08/17/1997', note: 'Contender for the most uplifting jam ever. Just keeps going and going!' },
    { song: 'Tweezer', showDate: '07/31/2013', note: '30 minutes of the finest jamming in their whole career' },
    { song: 'AC/DC Bag', showDate: '09/16/1999', note: 'Dark and groovy, exemplifying the best parts of the late 90s' },
];

const notes = [...sampleNotes, ...sampleNotes, ...sampleNotes];

class App extends Component {
    renderAddNoteModal = () => {
        return <AddNoteModal />;
    };

    render() {
        return (
            <div>
                <NavMenu />
                <Container style={{ marginTop: 50 }}>
                    <AddNoteModal />
                    <Card.Group itemsPerRow={3}>
                        {notes.map((note, index) =>
                            <RecentCard key={index} note={note} />
                        )}
                    </Card.Group>
                </Container>
            </div>
        );
    }
}

export default App;
