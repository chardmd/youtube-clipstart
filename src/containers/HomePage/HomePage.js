import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
    Step,
    Stepper,
    StepLabel,
    StepContent,
} from 'material-ui/Stepper';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';

import Header from '../../components/Header';
import TimeSetter from '../../components/TimeSetter';

class HomePage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            stepIndex: 0,
            url: '',
            minutes: '',
            seconds: '',
        };

        this.handleNext = this.handleNext.bind(this);
        this.handlePrev = this.handlePrev.bind(this);
        this.getStepContent = this.getStepContent.bind(this);
    }

    handleNext() {
        const { stepIndex } = this.state;
        this.setState({ stepIndex: stepIndex + 1 });
    }

    handlePrev() {
        const { stepIndex } = this.state;
        if (stepIndex > 0) {
            this.setState({ stepIndex: stepIndex - 1 });
        }
    }

    getStepContent(stepIndex) {
        switch (stepIndex) {
            case 0:
                return (
                    <div>
                        <TextField hintText="Your original URL here" value={this.state.url} onChange={(e) => this.setState({ url: e.target.value })} />
                    </div>
                )
            case 1:
                return (
                    <div>
                        <TextField hintText="1" floatingLabelText="Enter Minutes" value={this.state.minutes} onChange={(e) => this.setState({ minutes: e.target.value })} />
                        <TextField hintText="20" floatingLabelText="Enter Seconds" value={this.state.seconds} onChange={(e) => this.setState({ seconds: e.target.value })} />
                    </div>
                )
            case 2:
                return (
                    <div>
                        <TextField disabled={true} value={`${this.state.url}&t=${this.state.minutes}m${this.state.seconds}s`} />
                        <RaisedButton label="Copy" secondary={true} />
                    </div>
                )
            default:
                return (
                    <p>
                        <a href="#" onClick={(event) => {
                            event.preventDefault();
                            this.setState({ stepIndex: 0 });
                        }}>Click here</a> to reset the example.
                    </p>
                )
        }
    }

    render() {

        const { finished, stepIndex } = this.state;
        const contentStyle = { margin: '0 16px' };

        return (
            <div style={{ width: '100%', maxWidth: 700, margin: 'auto' }}>
                <Stepper activeStep={stepIndex}>
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
                <div style={contentStyle}>
                    <div>
                        {this.getStepContent(stepIndex)}
                        <div style={{ marginTop: 12 }}>
                            <FlatButton
                                label="Back"
                                disabled={stepIndex === 0}
                                onTouchTap={this.handlePrev}
                                style={{ marginRight: 12 }}
                            />
                            <RaisedButton
                                label={stepIndex === 2 ? 'Finish' : 'Next'}
                                primary={true}
                                onTouchTap={this.handleNext}
                            />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

HomePage.propTypes = {

};

export { HomePage };