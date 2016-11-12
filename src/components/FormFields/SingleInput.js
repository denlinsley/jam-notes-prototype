import React, { PropTypes } from 'react';
import { Form } from 'semantic-ui-react';

const SingleInput = (props) => (
    <Form.Input
      type={props.inputType}
      label={props.label}
      name={props.name}
      onChange={props.controlFunc}
      value={props.value}
      placeholder={props.placeholder}
      error={props.hasError}
    />
);

SingleInput.propTypes = {
    inputType: PropTypes.oneOf([
        'text',
        'number',
        'password'
    ]).isRequired,
    label: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    controlFunc: PropTypes.func.isRequired,
    value: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
    ]).isRequired,
    placeholder: PropTypes.string,
    hasError: PropTypes.bool
};

export default SingleInput;
