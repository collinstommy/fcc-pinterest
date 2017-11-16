import React, { Component } from 'react';

const AddModal = ({ handleInputChange, addPin, handleHideAddModal }) => {
    return <div className="modal is-active">
        <div className="modal-background"></div>
        <div className="modal-card">
            <div className="modal-background"></div>
            <div className="modal-card">
                <header className="modal-card-head">
                    <p className="modal-card-title">Pin adding time!</p>
                    <button className="delete" aria-label="close"></button>
                </header>
                <section className="modal-card-body">
                    <form className="field">
                        <div className="field">
                            <label className="label">Title</label>
                            <div className="control">
                                <input className="input" type="text" name="title" onChange={handleInputChange} />
                            </div>
                        </div>
                        <div className="field">
                            <label className="label">Image Url</label>
                            <div className="control">
                                <input className="input" type="text" name="imgUrl" onChange={handleInputChange} />
                            </div>
                        </div>
                        <div className="field">
                            <label className="label">Description</label>
                            <div className="control">
                                <input className="input" type="text" name="description" onChange={handleInputChange} />
                            </div>
                        </div>
                        <div className="field">
                            <label className="label">Site URL</label>
                            <div className="control">
                                <input className="input" type="text" name="siteUrl" onChange={handleInputChange} />
                            </div>
                        </div>
                    </form>
                </section>
                <footer className="modal-card-foot">
                    <button className="button is-success" onClick={addPin}>Add Pin</button>
                    <button className="button" onClick={handleHideAddModal}>Cancel</button>
                </footer>
            </div>
        </div>
        <button className="modal-close is-large"
            aria-label="close"
            onClick={handleHideAddModal}></button>
    </div>
}
export default AddModal;