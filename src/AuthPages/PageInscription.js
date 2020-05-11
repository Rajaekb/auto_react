import React from 'react';
import FormInscription from './FormInscription';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import './styleAuth.css';


class PageInscription extends React.Component{
     render(){
      
        return(
            <div className="row">
              
                <Tabs>
                    <TabList>
                        <Tab>Client</Tab>
                        <Tab>Revendeur Pro</Tab>        
                    </TabList>

                    <TabPanel>
                    <FormInscription/>
                    </TabPanel>
                    <TabPanel>
                    <FormInscription/>
                    </TabPanel>
            
                </Tabs> 
               
            
            </div>
        );
    }
}
    
export default PageInscription