import React, { PropTypes } from 'react';
import Datetime from 'react-datetime';

const DateInput = (props) => {
    const inputProps = {
        name: props.name,
        placeholder: props.placeholder
    };

    return (
        <div className="field">
            <label htmlFor={props.name}>{props.label}</label>
            <div id="ui input">
                <Datetime
                  inputProps={inputProps}
                  timeFormat={false}
                  viewMode="years"
                  closeOnSelect
                />
            </div>
        </div>
    );
};

DateInput.propTypes = {
    label: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    // controlFunc: PropTypes.func.isRequired,
    // value: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    // hasError: PropTypes.bool
};

export default DateInput;
