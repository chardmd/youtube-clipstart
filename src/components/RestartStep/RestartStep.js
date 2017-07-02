import React, { Component } from 'react';
import PropTypes from 'prop-types';

class RestartStep extends Component {
    render() {
        return (
            <div>
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