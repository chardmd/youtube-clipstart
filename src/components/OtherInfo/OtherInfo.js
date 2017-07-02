import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Paper from 'material-ui/Paper';
import './OtherInfo.css';

class OtherInfo extends Component {
    render() {
        return (
            <div className="OtherInfo">
                <Paper className="paper" zDepth={2} circle={true} />
                <Paper className="paper" zDepth={2} circle={true} />
                <Paper className="paper" zDepth={2} circle={true} />
            </div>
        );
    }
}

OtherInfo.propTypes = {

};

export { OtherInfo };