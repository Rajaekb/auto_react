import React from "react";
import ReactDOM from "react-dom";
import head_add from '../../assets/img/head_add.png';
import {
  BrowserRouter as Router,
  Route,
  Link,
  useLocation
} from "react-router-dom";
import { StateMachineProvider, createStore } from "little-state-machine";
import { DevTool } from "little-state-machine-devtools";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";

import Result from "./Result";
import { connect } from 'react-redux';

import "./styles.css";
import AnnoncesPage from "../AnnoncesPage";
import Step4 from "./Step4";

createStore({
  //data: {}
yourDetails: {
    neuf: 0,
    origine: "",
    dedouanement: "",
    marque: "",
    modele: "",
    finition: "",
    année: "",
    mois: "",
    kilometrage: 0,
    matricule: "",
    edition_special:0,
    type_vehicule: "",
    images :[],
    nbr_portes:0,
    nbr_sieges:0,
    carburant: "",
    transmission: "",
    cylindree: "",
    p_fiscal:0,
    p_chevaux:0,
    motorisation:0,
    consomation:0,
    frais_vignette:0,
    
  
    user_id: 0
    
  }
});

const Pages = () => {
  const location = useLocation();

  const user=localStorage.getItem('USER_INFO');
  const u=JSON.parse(user);
  return (
    <>
     
      <nav className="container">
        <ul className="steps">
          <li className={location.pathname === "/add" ? "active" : ""}>
            <Link to="/add"><div>1</div>    
            DONNEES DE VEHICULE</Link>
          </li>
          <li className={location.pathname === "/step2" ? "active" : ""}>
            <Link to="/step2"><div>2</div>EQUIPEMENT</Link>
          </li>
          <li className={location.pathname === "/step3" ? "active" : ""}>
            <Link to="/step3"><div>3</div>DETAILS</Link>
          </li>
          <li className={location.pathname === "/step4" ? "active" : ""}>
            <Link to="/step4"><div>4</div>Contact</Link>
          </li>
         
          <li className={location.pathname === "/result" ? "active" : ""}>
            <Link to="/result"><div>5</div>Result</Link>
          </li>
        </ul>
      </nav>
      <Route exact path="/add" component={Step1} />
      <Route path="/step2" component={Step2} />
     <Route path="/step3" component={Step3} />
      <Route path="/step4" component={Step4} />
     {/* <Route exact path="/annonces" component={AnnoncesPage} />*/}
      <Route path="/result" component={Result} />
    
    </>
  );
};

 

export default function App() {
  return (
    <div className="container">
    <StateMachineProvider>
    
        <div className="row" >
            <div className="col-12">
            <img src={head_add} alt="head_add" className="w-100" />
            </div>
        </div>
      <DevTool />
  
        <Router basename="/automobile">
          <Pages />
        </Router>
     
    </StateMachineProvider>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

