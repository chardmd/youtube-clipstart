import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
    Step,
    Stepper,
    StepLabel,
} from 'material-ui/Stepper';
import './Navigation.css';

class Navigation extends Component {

    render() {
        const style = {
            color: '#ffffff'
        }

        return (
            <Stepper activeStep={this.props.stepIndex}>
                <Step>
                    <StepLabel style={style}>Set Original Youtube URL</StepLabel>
                </Step>
                <Step>
                    <StepLabel style={style}>Select the Start Time</StepLabel>
                </Step>
                <Step>
                    <StepLabel style={style}>Copy and Share</StepLabel>
                </Step>
            </Stepper>
        );
    }
}

Navigation.propTypes = {
    stepIndex: PropTypes.number.isRequired
};

export { Navigation };