import React,{useState} from 'react';
import './App.css';

import "bootstrap/dist/css/bootstrap.min.css"

import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
import {ToastContainer} from "react-toastify"
import "react-toastify/dist/ReactToastify.min.css"

//Firebase
import firebase from "firebase/app"; 
import "firebase/auth"
// import firebaseConfig from './Config/firebaseConfig'

// Components
import {Home} from "./pages/Home"
import {SignIn} from "./pages/SignIn"
import {SignUp} from "./pages/SignUp"
import {PageNotFound} from "./pages/PageNotFound"
import Footer from "./layout/Footer";
import Header from './layout/Header';
import {UserContext} from './context/UserContext';

// init firebase
firebase.initializeApp({
  apiKey: "AIzaSyA56VsRur0jY6bMsEek9oVwVcaQrLnZnTc",
  authDomain: "my-gitapp-de233.firebaseapp.com",
  projectId: "my-gitapp-de233",
  storageBucket: "my-gitapp-de233.appspot.com",
  messagingSenderId: "147007397000",
  appId: "1:147007397000:web:304d2574fb9761531d533d",
  measurementId: "G-D5W0RT74PM"
  });

function App() {
  const [user, setUser] = useState(null);

  return (
    <Router>
      <ToastContainer/>
        <UserContext.Provider value={{user,setUser}}>
          <Header/>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/signin" component={SignIn}/>
            <Route exact path="/signup" component={SignUp}/>
            <Route exact path ="*" component={PageNotFound}/>
          </Switch>
          <Footer/>
        </UserContext.Provider>
    </Router>
  );
}

export default App;
