import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TextField from 'material-ui/TextField';
import './TimeSelector.css';

class TimeSelector extends Component {

    render() {

        return (
            <div className="TimeSelector">
                <TextField hintText="1" floatingLabelText="Enter Minutes" onChange={this.props.changeMinutes} className="textField" />
                <TextField hintText="20" floatingLabelText="Enter Seconds" onChange={this.props.changeSeconds} className="textField" />
            </div>
        );
    }
}

TimeSelector.propTypes = {
    changeMinutes: PropTypes.func.isRequired,
    changeSeconds: PropTypes.func.isRequired,
};

export { TimeSelector };