import React, { PropTypes } from 'react';
import { Card, Label } from 'semantic-ui-react';

import RecentFeed from './RecentFeed';

const RecentCard = (props) => {
    const { song, ...rest } = props.note;

    return (
        <Card>
            <Card.Content>
                <Card.Header>
                    {song}
                </Card.Header>
            </Card.Content>
            <Card.Content>
                <RecentFeed {...rest} />
            </Card.Content>
            <Card.Content extra>
                <Label circular color="blue">12</Label> total
            </Card.Content>
        </Card>
    );
};

RecentCard.propTypes = {
    note: PropTypes.object.isRequired
};

export default RecentCard;
