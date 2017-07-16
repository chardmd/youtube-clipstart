import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TextField from 'material-ui/TextField';
import './TimeSelector.css';

class TimeSelector extends Component {

    render() {

        return (
            <div className="TimeSelector">
                <TextField type="number" hintText="0"
                    floatingLabelText="Enter Minutes"
                    className="textField" id="text-minutes"
                    onChange={this.props.changeMinutes}
                    value={this.props.minutes === 0 ? '' : this.props.minutes} />
                <TextField type="number" hintText="0"
                    floatingLabelText="Enter Seconds"
                    className="textField"
                    id="text-seconds"
                    onChange={this.props.changeSeconds}
                    value={this.props.seconds === 0 ? '' : this.props.seconds} />
            </div>
        );
    }
}

TimeSelector.propTypes = {
    minutes: PropTypes.number.isRequired,
    seconds: PropTypes.number.isRequired,
    changeMinutes: PropTypes.func.isRequired,
    changeSeconds: PropTypes.func.isRequired,
};

export { TimeSelector };