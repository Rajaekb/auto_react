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
import Cli_TableauBord from './Pages/Cli_TableauBord';
import MyDropZone from './Components/MyDropZone';
import MultipleUpload from './Pages/MultipleUpload';
import Step2 from './Pages/addAnnonce/Step2';
import Step3 from './Pages/addAnnonce/Step3';
import Step4 from './Pages/addAnnonce/Step4';


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
           <Route path="/mu" component={MultipleUpload} />
           <Route exact path="/add" component={Add} />
           <Route path="/step2" component={Step2} />
           <Route path="/step3" component={Step3} />
      
           { /* <Redirect to="/accueil" />*/}
          </Switch>) :
          (<Switch>
            <Route exact path="/add" component={Add} />
            <Route  exact path="/annonces" component={AnnoncesPage} />
            <Route exact path="/accueil" component={AccueilPage} />
            <Route exact path="/client" component={Cli_TableauBord} />
            <Route exact path="/add/:annonceId" component={Add} />
            <Route exact path="/dz" component={MyDropZone} />
            <Route path="/step2" component={Step2} />
     <Route path="/step3" component={Step3} />
      <Route path="/step4" component={Step4} />
            

           { /*<Redirect to="/client" />*/}

      
             
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
