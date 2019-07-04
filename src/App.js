import React from 'react';
import Title from './components/Title'
import Messages from './components/Messages'
import './App.css';

import withFirebaseAuth from 'react-with-firebase-auth'
import firebase from "./components/Firestore"
import 'firebase/auth'

class App extends React.Component {

  state={
    isLoggedIn: false
  }

  render(){

    const { user, signOut, signInWithGoogle } = this.props
    return (
      <div className="App">
        <header className="App-header">
          <Title/>
          {
            user 
            ? <>
                <Messages user={user}/>
                <button style={{margin: '20px'}} onClick={signOut}>Sign out</button>
              </>
            : <button style={{margin: '20px'}} onClick={signInWithGoogle}>sign in</button>            
          }
        </header>
      </div>
    )
  }
}

const firebaseAppAuth = firebase.auth()

const providers = {
  googleProvider: new firebase.auth.GoogleAuthProvider(),
  
}

export default withFirebaseAuth({
  providers,
  firebaseAppAuth
})(App)
