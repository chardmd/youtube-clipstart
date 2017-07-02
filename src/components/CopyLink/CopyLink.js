import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

class CopyLink extends Component {
    render() {
        return (
            <div>
                <TextField disabled={true} value={this.props.value} />
                <RaisedButton label="Copy" secondary={true} />
            </div>
        );
    }
}

CopyLink.propTypes = {
    value: PropTypes.string.isRequired
};

export { CopyLink };