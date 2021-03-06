import React, { Component } from 'react';
import PropTypes from 'prop-types';
import RaisedButton from 'material-ui/RaisedButton';

class ControlButton extends Component {
    render() {
        return (
            this.props.stepIndex <= 2 &&
            <div style={{ marginTop: 12 }}>
                <RaisedButton
                    label="Back"
                    disabled={this.props.stepIndex === 0}
                    primary={true}
                    onTouchTap={this.props.handlePrev}
                    style={{ marginRight: 12 }}
                />
                <RaisedButton
                    label={this.props.stepIndex === 2 ? 'Finish' : 'Next'}
                    primary={true}
                    disabled={this.props.isValid === false}
                    onTouchTap={this.props.handleNext}
                />
            </div>
        );
    }
}

ControlButton.propTypes = {
    stepIndex: PropTypes.number.isRequired,
    handleNext: PropTypes.func.isRequired,
    handlePrev: PropTypes.func.isRequired,
    isValid: PropTypes.bool.isRequired
};

export { ControlButton };