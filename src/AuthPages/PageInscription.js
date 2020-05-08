import React from 'react';
import FormInscription from './FormInscription';


class PageInscription extends React.Component{
     render(){
      
        return(
            <div className="row">
                <div className="col-md-4 col-md-offset-4">
                    <FormInscription/>
               
                </div>

            </div>
        );
    }
}
    
export default PageInscription