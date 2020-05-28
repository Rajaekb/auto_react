import React from 'react';
import head_black from '../assets/img/head_black.svg';
import { Tabs, Tab, TabPanel, TabList } from "react-web-tabs";
import "../Components/cli_tablo_bord/style.css";
import Tableau from '../Components/cli_tablo_bord/Tableau';
import { connect } from 'react-redux';
const Cli_TableauBord = ({user}) => {
    return (
        <div className="container">
            <div className="row" >
                <div className="col-12 col-sm-12 head_black text-center ">
            
                <h6 className="pt-5 mt-2"> BIENVENUE DANS VOTRE ESPACE PERSONEL<br/>
                <span> {user.fullName}! </span></h6>
                </div>
            </div>
            <div className="row" >
            
                <Tabs  defaultTab="vertical-tab-one" vertical>
                   <div className="col-3"> <TabList>
                        <Tab id="tabs" tabFor="vertical-tab-one">Tableau de bord</Tab>
                        <Tab id="tabs" tabFor="vertical-tab-two">Mes annonces préférées</Tab>
                        <Tab id="tabs" tabFor="vertical-tab-three">Mes recherches sauvegardées</Tab>
                        <Tab id="tabs" tabFor="vertical-tab-foor">Mes annonces</Tab>
                        <Tab id="tabs" tabFor="vertical-tab-five">Paramètres du profil</Tab>
                    </TabList>
                    </div>
                    <div className="col-9">
                    <TabPanel tabId="vertical-tab-one">
                
                     <Tableau/>
                     
                    </TabPanel>
                    <TabPanel tabId="vertical-tab-two">
            
                    </TabPanel>
                    <TabPanel tabId="vertical-tab-three">
                   
                  
                    </TabPanel>
                    <TabPanel tabId="vertical-tab-foor">
                   
                    </TabPanel>
                    <TabPanel tabId="vertical-tab-five">
                      
                    </TabPanel>
                    </div>
                </Tabs>
            </div>
        </div>
    )
}
const mapStateToProps = (state) => ({ user: state.user });
export default connect(mapStateToProps)(Cli_TableauBord);


