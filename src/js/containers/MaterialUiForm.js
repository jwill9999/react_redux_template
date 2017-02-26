import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';


class TextFieldControlled extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      errors: false
    };
    this.handleChange = this.handleChange.bind(this);  
    this.handleSubmit = this.handleSubmit.bind(this);   
    }

    

  handleChange = (event) => {
    const target = event.target
    const value = target.value
    const name = target.name

    this.setState({[name]: value});
  }  

 

  handleSubmit(event) { 
    const {firstName, lastName, email} = this.state
    alert('Thank you :  ' + firstName + ' ' + lastName + ' ' + email);
    var form = document
      .getElementById('firstName')
      .getElementById('lastName')
      .getElementById('email')
    form.value = ""
    event.preventDefault();
  }

  render() {
    return (
      <div className='row'>
        <div className="col-md-6 col-md-offset-3">
          <form onSubmit={this.handleSubmit}>
            <div>
              <TextField
                id='firstName'
                name="firstName"
                hintText="first Name"
                floatingLabelText="Enter FirstName"
                onChange={this.handleChange}/>
            </div>
            <div>
              <TextField
                id='lastName'
                name="lastName"
                hintText="Last Name"
                floatingLabelText="Enter LastName"
                onChange={this.handleChange}/>
            </div>
            <div>
              <TextField
                id='email'
                name="email"
                hintText="Email"
                floatingLabelText="Enter an Email"
                
                onChange={this.handleChange}/>
            </div>
            <br/>
            <RaisedButton type="submit" label='Submit' primary={true}/>
          </form>
        </div>
      </div>
    );
  }
}

export default TextFieldControlled