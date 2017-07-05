import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TextField from 'material-ui/TextField';
import './OriginalLink.css';

class OriginalLink extends Component {

    constructor(props) {
        super(props);
        this.state = { errorMessage: "" };
        this.handleValidation = this.handleValidation.bind(this);
    }

    isYoutubeURLValid(url) {
        let status = false;
        var p = /^(?:https?:\/\/)?(?:m\.|www\.)?(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))((\w|-){11})(?:\S+)?$/;
        if (url && url.match(p)) {
            status = true;
        }
        return status;
    }

    handleValidation(url) {
        if (this.isYoutubeURLValid(url)) {
            this.setState({ errorMessage: "" });
        } else {
            this.setState({ errorMessage: "Invalid Youtube URL" });
        }
    }

    render() {

        const focusInputField = (input) => {
            input && input.focus();
        };

        return (
            <div className="OriginalLink">
                <TextField hintText="Your original URL here" id="text-url"
                    value={this.props.url} onChange={this.props.onChange} className="text" ref={focusInputField}
                    onBlur={() => this.handleValidation(this.props.url)} errorText={this.state.errorMessage} />
            </div>
        );
    }
}

OriginalLink.propTypes = {
    onChange: PropTypes.func.isRequired,
    url: PropTypes.string.isRequired,
};

export { OriginalLink };