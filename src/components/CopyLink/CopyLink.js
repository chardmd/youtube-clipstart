import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import CopyToClipboard from 'react-copy-to-clipboard';
import './CopyLink.css';

class CopyLink extends Component {

    constructor(props) {
        super(props);
        this.state = {
            copied: false,
        };
        this.onCopy = this.onCopy.bind(this);
    }

    onCopy() {
        this.setState({ copied: true })
    }

    render() {
        return (
            <div className="CopyLink">
                <TextField disabled={true} value={this.props.value} id="text-link" />
                <CopyToClipboard text={this.props.value} onCopy={this.onCopy}>
                    <RaisedButton label="Copy" secondary={true} className="copyButton" />
                </CopyToClipboard>
                <a href={this.props.value} target="_blank">{this.state.copied && <span className="copied">Copied</span>}</a>
            </div>
        );
    }
}

CopyLink.propTypes = {
    value: PropTypes.string.isRequired
};

export { CopyLink };