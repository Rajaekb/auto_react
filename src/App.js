import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import {Route ,Switch,Redirect } from "react-router-dom";
import { connect } from 'react-redux';
import PageInscription from './AuthPages/PageInscription';
import PageConnexion from './AuthPages/PageConnexion';
import FormConnexion from './AuthPages/FormConnexion';
import Navbar from './Components/Navbar';


const App = ({ user }) => {
 
    return (

    <div className="container">
      <Navbar/>
      {!user.isLoggedIn ?
          (<Switch>
           <Route path="/inscription" component={PageInscription} />
           <Route path="/login" component={FormConnexion} />
            <Redirect to="/login" />
          </Switch>) :
          (<Switch>
      
          </Switch>)
        }
      
      </div>
 

  )
}

const mapStateToProps = (state) => ({ user: state.user });

export default connect(mapStateToProps)(App);
