import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
    Step,
    Stepper,
    StepLabel,
} from 'material-ui/Stepper';

class Navigation extends Component {
    render() {
        return (
            <Stepper activeStep={this.props.stepIndex}>
                <Step>
                    <StepLabel>Set Original Youtube URL</StepLabel>
                </Step>
                <Step>
                    <StepLabel>Select the Start Time</StepLabel>
                </Step>
                <Step>
                    <StepLabel>Copy and Share</StepLabel>
                </Step>
            </Stepper>
        );
    }
}

Navigation.propTypes = {
    stepIndex: PropTypes.number.isRequired
};

export { Navigation };