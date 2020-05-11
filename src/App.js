import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import {Route ,Switch,Redirect } from "react-router-dom";
import { connect } from 'react-redux';
import PageInscription from './AuthPages/PageInscription';
import PageConnexion from './AuthPages/PageConnexion';
import FormConnexion from './AuthPages/FormConnexion';


import Header from './Components/Header';
import Annonces from './Pages/Annonces';
import Spinner from './Components/spinner/spinner';


const App = ({ user }) => {
 
    return (

    <div className="container">
      <Spinner/>
      <Header/>
    
      {!user.isLoggedIn ?
          (<Switch>
           <Route path="/inscription" component={PageInscription} />
         
           <Route path="/login" component={FormConnexion} />
            <Redirect to="/login" />
          </Switch>) :
          (<Switch>
              <Route exact path="/annonces" component={Annonces} />
              <Redirect to="/annonces" />
          </Switch>)
        }
      
      </div>
 

  )
}

const mapStateToProps = (state) => ({ user: state.user });

export default connect(mapStateToProps)(App);
