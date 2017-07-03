import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './OtherInfo.css';
import Avatar from 'material-ui/Avatar';
import IconFace from 'material-ui/svg-icons/action/face';
import IconLink from 'material-ui/svg-icons/content/link';
import IconCopy from 'material-ui/svg-icons/content/content-copy';

class OtherInfo extends Component {
    render() {
        return (
            <div className="OtherInfo">
                <div className="card">
                    <div>
                        <Avatar className="avatar" size={50} icon={<IconFace />} backgroundColor="#f1f8e9" color="#9ccc65" />
                        <h1>Easy</h1>
                    </div>
                    <p>It is so simple you can do it while sleeping</p>
                </div>
                <div className="card">
                    <div>
                        <Avatar className="avatar" size={50} icon={<IconLink />} backgroundColor="#e1f5fe" color="#29b6f6" />
                        <h1>Link</h1>
                    </div>
                    <p>Link the start time of any youtube URL</p>
                </div>
                <div className="card">
                    <div>
                        <Avatar className="avatar" size={50} icon={<IconCopy />} backgroundColor="#ede7f6" color="#ba68c8" />
                        <h1>Copy</h1>
                    </div>
                    <p>Copy the generated link and share it with your friends</p>
                </div>
            </div>
        );
    }
}

OtherInfo.propTypes = {

};

export { OtherInfo };