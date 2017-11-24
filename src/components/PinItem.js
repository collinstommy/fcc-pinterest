import * as React from 'react';
import PropTypes from 'prop-types';

import './PinItem.css';

const PinItem = ({ imgUrl, title, description, siteUrl, userId, userPhoto, displayName, onClickUser, onDelete, currentUser, onImgError }) => {
    return (
        
        <div className="column is-full-mobile is-one-third-tablet is-one-quarter-desktop">
            <div className="card">
                <div className="card-image">
                    <figure className="image">
                        <img onError={onImgError} src={imgUrl} alt="Image of pin"/>
                    </figure>
                </div>
                <div className="card-content">
                    <div className="media">
                        <div className="media-left">
                            <figure className="image is-48x48">
                                <img src={userPhoto}/>
                            </figure>
                        </div>
                        <div className="media-content">
                            <a onClick={onClickUser} onError={onImgError}>{displayName}</a>
                        </div>
                    </div>
                    <div className="content">
                        {description}
                        <br />
                         {(currentUser && currentUser.uid === userId) && <a onClick={onDelete}>Delete</a>}
                    </div>
                </div>
            </div>
        </div>)
}

PinItem.propTypes = {
    title: PropTypes.string,
    imgUrl: PropTypes.string,
    description: PropTypes.string,
    siteUrl: PropTypes.string,
    userName: PropTypes.string,
};

export default PinItem;