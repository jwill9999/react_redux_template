import React from 'react';
import ContactForm from '../../containers/MaterialUiForm'
import './Form.scss';

class Form extends React.Component {
    constructor(props) {
        super()
       
    }

  

    render() {
         
        return (

            <div className="container clearfix">
            <ContactForm/>    
            </div>
            
        )
    }

}



module.exports = Form;