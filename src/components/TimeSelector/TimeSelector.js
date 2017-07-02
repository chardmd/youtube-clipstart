import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TextField from 'material-ui/TextField';

class TimeSelector extends Component {
    render() {
        return (
            <div>
                <TextField hintText="1" floatingLabelText="Enter Minutes" onChange={this.props.changeMinutes} />
                <TextField hintText="20" floatingLabelText="Enter Seconds" onChange={this.props.changeSeconds} />
            </div>
        );
    }
}

TimeSelector.propTypes = {
    changeMinutes: PropTypes.func.isRequired,
    changeSeconds: PropTypes.func.isRequired,
};

export { TimeSelector };