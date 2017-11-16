import React, { Component } from 'react';

const AddModal = ({ handleLoginGoogle, handleClose }) => {
    return <div className="modal is-active">
        <div className="modal-background"></div>
        <div className="modal-card">
            <div className="modal-background"></div>
            <div className="modal-card">
                <header className="modal-card-head">
                    <p className="modal-card-title">Choose a login method</p>
                    <button className="delete" aria-label="close" onClick={handleClose}></button>
                </header>
                <section className="modal-card-body">
                    <button className="button is-primary is-outlined" onClick={handleLoginGoogle}>
                        <span className="icon">
                        <i className="fa fa-home"></i>
                    </span>Google</button>
                </section>
                <footer className="modal-card-foot">
                    <button className="button" onClick={handleClose}>Cancel</button>
                </footer>
            </div>
        </div>
        <button className="modal-close is-large"
            aria-label="close"
            onClick={handleClose}></button>
    </div>
}
export default AddModal;