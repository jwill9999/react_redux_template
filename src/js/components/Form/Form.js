import React from 'react';
//Material-UI
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import ContactForm from '../../containers/MaterialUiForm'
import './Form.scss';

class Form extends React.Component {
    constructor(props) {
        super()
       
    }

  

    render() {
         
        return (

            <div className="container clearfix">
              <MuiThemeProvider>
                <ContactForm/>  
              </MuiThemeProvider> 
            </div>
            
        )
    }

}



module.exports = Form;