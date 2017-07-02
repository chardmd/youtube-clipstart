import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import './HomePage.css';

import Header from '../../components/Header';
import Navigation from '../../components/Navigation';
import ControlButton from '../../components/ControlButton';
import TimeSelector from '../../components/TimeSelector';
import CopyLink from '../../components/CopyLink';
import RestartStep from '../../components/RestartStep';

class HomePage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            stepIndex: 0,
            url: '',
            minutes: 0,
            seconds: 0,
        };

        this.handleNext = this.handleNext.bind(this);
        this.handlePrev = this.handlePrev.bind(this);
        this.restart = this.restart.bind(this);
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

    restart(e) {
        e.preventDefault();
        this.setState({ stepIndex: 0 });
    }

    getStepContent(stepIndex) {
        switch (stepIndex) {
            case 0:
                return <TextField hintText="Your original URL here" id="text-url" value={this.state.url} onChange={(e) => this.setState({ url: e.target.value })} />
            case 1:
                return (<TimeSelector changeMinutes={(e) => this.setState({ minutes: parseInt(e.target.value, 10) })}
                    changeSeconds={(e) => this.setState({ seconds: parseInt(e.target.value, 10) })}
                    minutes={this.state.minutes}
                    seconds={this.state.seconds} />)
            case 2:
                return (<CopyLink value={`${this.state.url}&t=${this.state.minutes}m${this.state.seconds}s`} />)
            default:
                return (<RestartStep restart={this.restart} />)
        }
    }

    render() {

        const { stepIndex } = this.state;
        const contentStyle = { margin: '0 16px' };

        return (
            <div className="HomePage">
                <Header />
                <div style={{ width: '100%', maxWidth: 700, margin: 'auto' }}>
                    <Navigation stepIndex={stepIndex} />
                    <div style={contentStyle}>
                        <div>
                            {this.getStepContent(stepIndex)}
                            <ControlButton stepIndex={stepIndex} handleNext={this.handleNext} handlePrev={this.handlePrev} />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export { HomePage };