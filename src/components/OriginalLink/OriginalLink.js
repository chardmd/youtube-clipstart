import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TextField from 'material-ui/TextField';
import './OriginalLink.css';

class OriginalLink extends Component {
    render() {
        return (
            <div className="OriginalLink">
                <TextField hintText="Your original URL here" id="text-url"
                    value={this.props.url} onChange={this.props.onChange} className="text" />
            </div>
        );
    }
}

OriginalLink.propTypes = {
    onChange: PropTypes.func.isRequired,
    value: PropTypes.string.isRequired,
};

export { OriginalLink };