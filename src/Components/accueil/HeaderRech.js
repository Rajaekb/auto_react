import React, { Component } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Car from '../../assets/img/Car.svg';
import Moto from '../../assets/img/Moto.svg';
import Caravane from '../../assets/img/Caravane.svg';
import Camion from '../../assets/img/Camion.svg';
import FormRech from './FormRech'


export default class HeaderRech extends Component {
    render() {
        return (
            <div>
                <Tabs>
                    <TabList>
                        <Tab> <img src={Car} alt="Car" className="img-fluid"/></Tab>
                        <Tab> <img src={Moto} alt="Moto" className="img-fluid"/></Tab>
                        <Tab> <img src={Caravane} alt="Caravane" className="img-fluid"/></Tab>
                        <Tab> <img src={Camion} alt="Camion" className="img-fluid"/></Tab>
                 
                    </TabList>

                    <TabPanel>
                        <FormRech/>
                    </TabPanel>
                    <TabPanel>
                        <FormRech/>
                    </TabPanel>
                    <TabPanel>
                        <FormRech/>
                    </TabPanel>
                    <TabPanel>
                        <FormRech/>
                    </TabPanel>
                </Tabs>
            </div>
        )
    }
}
