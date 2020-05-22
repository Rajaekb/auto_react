import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';

import {Route ,Switch,Redirect } from "react-router-dom";
import { connect } from 'react-redux';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, Slide } from 'react-toastify';

import PageInscription from './AuthPages/PageInscription';
import PageConnexion from './AuthPages/PageConnexion';
import FormConnexion from './AuthPages/FormConnexion';


import Header from './Components/Header';
import AnnoncesPage from './Pages/AnnoncesPage';
import Spinner from './Components/spinner/spinner';
import { logoutUser } from './redux/actions/authActionCreators';
import './App.css';


import Add from './Pages/addAnnonce/Index';
import AccueilPage from './Pages/AccueilPage';
import Footer from './Components/Footer';
import Actualite from './Components/Actualite';


const App = ({ user , dispatchLogoutAction }) => {
 
    return (

    <div>

    <ToastContainer position="top-right" autoClose={2000}
      hideProgressBar transition={Slide} />
      <Spinner/>
      <Header isLoggedIn={user.isLoggedIn} userName={user.fullName}
        onLogout={dispatchLogoutAction} />
    
      {!user.isLoggedIn ?
          (<Switch>
           <Route path="/inscription" component={PageInscription} />
           <Route path="/login" component={FormConnexion} />
           <Route path="/accueil" component={AccueilPage} />
            <Redirect to="/accueil" />
          </Switch>) :
          (<Switch>
            <Route exact path="/add" component={Add} />
            <Route  exact path="/annonces" component={AnnoncesPage} />
            <Route exact path="/accueil" component={AccueilPage} />
            <Redirect to="/add" />

      
             
          </Switch>)
        }
      <Footer/>
      </div>
 

  )
}

const mapStateToProps = (state) => ({ user: state.user });
const mapDispatchToProps = (dispatch) => ({
  dispatchLogoutAction: () => dispatch(logoutUser())
});
export default connect(mapStateToProps, mapDispatchToProps)(App);
