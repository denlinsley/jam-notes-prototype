import React, { PropTypes } from 'react';
import { Feed } from 'semantic-ui-react';

const RecentFeed = (props) => {
    return (
        <Feed>
            <Feed.Event>
                <Feed.Content>
                    <Feed.Date content={props.showDate} />
                    <Feed.Summary>
                        {props.note}
                    </Feed.Summary>
                </Feed.Content>
            </Feed.Event>
        </Feed>
    );
};

RecentFeed.propTypes = {
    showDate: PropTypes.string.isRequired,
    note: PropTypes.string.isRequired
};

export default RecentFeed;
