import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import './CopyLink.css';

class CopyLink extends Component {
    render() {
        return (
            <div className="CopyLink">
                <TextField disabled={true} value={this.props.value} />
                <RaisedButton label="Copy" secondary={true} className="copyButton" />
            </div>
        );
    }
}

CopyLink.propTypes = {
    value: PropTypes.string.isRequired
};

export { CopyLink };