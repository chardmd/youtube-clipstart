import React, { Component } from 'react';
import PropTypes from 'prop-types';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';

class ControlButton extends Component {
    render() {
        return (
            <div style={{ marginTop: 12 }}>
                <FlatButton
                    label="Back"
                    disabled={this.props.stepIndex === 0}
                    onTouchTap={this.props.handlePrev}
                    style={{ marginRight: 12 }}
                />
                <RaisedButton
                    label={this.props.stepIndex === 2 ? 'Finish' : 'Next'}
                    primary={true}
                    onTouchTap={this.props.handleNext}
                />
            </div>
        );
    }
}

ControlButton.propTypes = {
    stepIndex: PropTypes.number.isRequired,
    handleNext: PropTypes.func.isRequired,
    handlePrev: PropTypes.func.isRequired
};

export { ControlButton };