import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './RestartStep.css';

class RestartStep extends Component {
    render() {
        return (
            <div className="RestartStep">
                <p>
                    Thank you for using Youtube Clip Start. <br /><br />
                    <a href="#" onClick={this.props.restart}>Click here</a> to try again.
                </p>
            </div>
        );
    }
}

RestartStep.propTypes = {
    restart: PropTypes.func.isRequired
};

export { RestartStep };