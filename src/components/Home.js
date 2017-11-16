import React, { Component } from 'react';
import fire from '../fire';
import firebase from 'firebase'
import PinItem from './PinItem';
import AddModal from './AddPinModal';
import LoginModal from './LoginModal';


class Home extends Component {
  state = {
    pins: [],
    imgUrl: "",
    title: "",
    description: "",
    siteUrl: "",
    showAddModal: false,
    user: null
  }
  componentWillMount() {
    /* Create reference to messages in Firebase Database */
    let pinItemsCollection = fire.database().ref('pins').orderByKey().limitToLast(100);
    pinItemsCollection.on('child_added', snapshot => {
      const item = { ...snapshot.val(), id: snapshot.key }
      this.setState({ pins: [item].concat(this.state.pins) });
    });
    pinItemsCollection.on('child_removed', snapshot => {
      const deletedPinId = snapshot.key;
      const pins = this.state.pins.filter(pin => pin.id !== deletedPinId);
      this.setState({ pins });
    });
  }

  addPin = (e) => {
    e.preventDefault(); // <- prevent form submit from reloading the page
    /* Send the message to Firebase */
    const { imgUrl, title, description, siteUrl, user } = this.state;

    const displayName = user.displayName
      ? user.displayName
      : user.email.substring(0, user.email.lastIndexOf("@"));
    const newPin = { title, imgUrl, description, siteUrl, email: user.email, displayName, userId: user.uid };

    fire.database().ref('pins').push(newPin);
    this.setState({ showAddModal: false, imgUrl: "", title: "", description: "", id: "" });
  }

  deletePin = (id) => {
    fire.database().ref('pins/' + id).remove();
  }

  getUserPinsById = (id) => {
    const pins = this.state.pins.filter(pin => pin.userId === id);
    this.setState({ pins });
  }

  getCurrentUserPins = () => {
    this.getUserPinsById(this.state.user.uid);
  }

  getAllPins = () => {
    let pinItemsCollection = fire.database().ref('pins').orderByKey().limitToLast(100);
    pinItemsCollection.once('value', snapshot => {
      const items = snapshot.val();
      const pins = Object.keys(items).map(itemId => items[itemId]);
      this.setState({ pins });
    });
  }

  handleImageError = (e) => {
    e.target.src = 'data:image/jpeg;base64,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';
  }

  //modals
  handleOpenAddModal = () => {
    this.setState({ showAddModal: true });
  }

  handleHideAddModal = () => {
    this.setState({ showAddModal: false });
  }

  handleOpenLoginModal = () => {
    this.setState({ showLoginModal: true });
  }

  handleHideLoginModal = () => {
    this.setState({ showLoginModal: false });
  }

  //input
  handleInputChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleLoginGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    this.login(provider);
  }

  //user login
  handleLogout = () => {
    firebase.auth().signOut().then(() => {
      this.setState({ user: null })
    }).catch((error) => {
      console.log(error);
    });
  }

  login = (provider) => {
    firebase.auth().signInWithPopup(provider).then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const token = result.credential.accessToken;
      // The signed-in user info.
      this.setState({
        user: result.user,
        showLoginModal: false
      });
      // ...
    }).catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.email;

      console.log(error);
      console.log(errorMessage);
      // The firebase.auth.AuthCredential type that was used.
      const credential = error.credential;
      // ...
      this.setState({ showLoginModal: false });
    });

  }

  render() {
    const { user } = this.state;

    const loggedInButtons =
      [<div className="navbar-item" key='newpin'>
        <a className="button is-primary" onClick={this.handleOpenAddModal}>New Pin</a>
      </div>, <div className="navbar-item" key='logout'>
        <a className="button is-danger" onClick={this.handleLogout}>Logout</a>
      </div>];
    const loggedOutButtons = [
      <div className="navbar-item" key='signup'>
        <a className="button is-danger" onClick={this.handleOpenLoginModal}>Signup</a>
      </div>, <div className="navbar-item" key='login'>
        <a className="button is-info" onClick={this.handleOpenLoginModal}>Login</a>
      </div>];

    const userIsLoggedIn = user !== null;
    const authenticationButtons = userIsLoggedIn ? loggedInButtons : loggedOutButtons;

    return (
      <div>
        {this.state.showAddModal &&
          <AddModal addPin={this.addPin}
            handleHideAddModal={this.handleHideAddModal}
            handleInputChange={this.handleInputChange}
          />
        }

        {this.state.showLoginModal &&
          <LoginModal
            handleLoginGoogle={this.handleLoginGoogle}
            handleClose={this.handleHideLoginModal}
          />
        }
        <nav className="navbar is-transparent">
          <div className="navbar-start">
            <div className="navbar-item">
              <h1 className="subtitle">
                Fitrest
            </h1>
            </div>
            {userIsLoggedIn && <a className="navbar-item" onClick={this.getCurrentUserPins}>
              View Your Pins
            </a>}
            <a className="navbar-item" onClick={this.getAllPins}>
              Recent Pins
            </a>
          </div>
          <div className="navbar-end">
            {authenticationButtons}
          </div>
        </nav>
        <div className="container">
          <div className="columns is-multiline">
            { /* Render the list of messages */
              this.state.pins.map(pin =>
                <PinItem key={pin.id}
                  imgUrl={pin.imgUrl}
                  title={pin.title}
                  description={pin.description}
                  userId={pin.userId}
                  displayName={pin.displayName}
                  onClickUser={() => this.getUserPinsById(pin.userId)}
                  currentUser={this.state.user}
                  onDelete={() => this.deletePin(pin.id)}
                  onImgError={this.handleImageError}>
                </PinItem>)
            }
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
