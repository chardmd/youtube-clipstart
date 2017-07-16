import React, { Component } from 'react';
import './HomePage.css';

import Header from '../../components/Header';
import OriginalLink from '../../components/OriginalLink';
import Navigation from '../../components/Navigation';
import ControlButton from '../../components/ControlButton';
import TimeSelector from '../../components/TimeSelector';
import CopyLink from '../../components/CopyLink';
import RestartStep from '../../components/RestartStep';
import OtherInfo from '../../components/OtherInfo';

class HomePage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            stepIndex: 0,
            url: '',
            minutes: 0,
            seconds: 0,
            isValid: false
        };

        this.handleNext = this.handleNext.bind(this);
        this.handlePrev = this.handlePrev.bind(this);
        this.restart = this.restart.bind(this);
        this.getStepContent = this.getStepContent.bind(this);
        this.isValid = this.isValid.bind(this);
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
        this.setState({
            stepIndex: 0,
            url: '',
            minutes: 0,
            seconds: 0,
            isValid: false
        });
    }

    isValid(status) {
        this.setState({
            isValid: status
        })
    }

    getStepContent(stepIndex) {
        switch (stepIndex) {
            case 0:
                return <OriginalLink onChange={(e) => this.setState({ url: e.target.value })}
                    url={this.state.url}
                    isValid={this.isValid} />
            case 1:
                return (<TimeSelector changeMinutes={(e) => this.setState({ minutes: parseInt(e.target.value, 10) })}
                    changeSeconds={(e) => this.setState({ seconds: parseInt(e.target.value, 10) })}
                    minutes={this.state.minutes}
                    seconds={this.state.seconds}
                    isValid={this.isValid}
                />)
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
                <div className="container">
                    <div>
                        <h1>Set your Youtube start time</h1>
                        <Navigation stepIndex={stepIndex} />
                        <div style={contentStyle}>
                            <div>
                                {this.getStepContent(stepIndex)}
                                <ControlButton stepIndex={stepIndex}
                                    handleNext={this.handleNext}
                                    handlePrev={this.handlePrev}
                                    isValid={this.state.isValid} />
                            </div>
                        </div>
                    </div>
                </div>
                <OtherInfo />
            </div>
        );
    }
}

export { HomePage };