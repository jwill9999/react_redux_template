import React from 'react'
import {Field, reduxForm} from 'redux-form'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton'
import Checkbox from 'material-ui/Checkbox'
import SelectField from 'material-ui/SelectField'
import MenuItem from 'material-ui/MenuItem'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton';
import asyncValidate from '../actions/asyncValidate'

const style = {
  margin: 4
};

const validate = values => {
  const errors = {}
  const requiredFields = ['firstName', 'lastName', 'email', 'favoriteColor', 'notes']
  requiredFields.forEach(field => {
    if (!values[field]) {
      errors[field] = 'Required'
    }
  })
  if (values.email && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address'
  }
  return errors
}

const renderTextField = ({
  input,
  label,
  meta: {
    touched,
    error
  },
  ...custom
}) => (<TextField
  hintText={label}
  floatingLabelText={label}
  errorText={touched && error}
  {...input}
  {...custom}/>)

const renderCheckbox = ({input, label}) => (<Checkbox
  label={label}
  checked={input.value
  ? true
  : false}
  onCheck={input.onChange}/>)

const renderRadioGroup = ({
  input,
  ...rest
}) => (<RadioButtonGroup
  {...input}
  {...rest}
  valueSelected={input.value}
  onChange={(event, value) => input.onChange(value)}/>)

const renderSelectField = ({
  input,
  label,
  meta: {
    touched,
    error
  },
  children,
  ...custom
}) => (<SelectField
  floatingLabelText={label}
  errorText={touched && error}
  {...input}
  onChange={(event, index, value) => input.onChange(value)}
  children={children}
  {...custom}/>)

const MaterialUiForm = props => {
  const {handleSubmit, pristine, reset, submitting} = props
  return (
    <div className="row ">
      <div className="col-md-6 col-md-offset-3">
        <h1>Form Example</h1>
        <h3>MaterialUiForm</h3>
        <MuiThemeProvider >
          <form onSubmit={handleSubmit}>
            <div>
              <Field name="firstName" component={renderTextField} label="First Name"/>
            </div>
            <div>
              <Field name="lastName" component={renderTextField} label="Last Name"/>
            </div>
            <div>
              <Field name="email" component={renderTextField} label="Email"/>
            </div>
            <div>
              <Field
                name="notes"
                component={renderTextField}
                label="Notes"
                multiLine={true}
                rows={2}/>
            </div>
            <div>
              <RaisedButton type="submit" label="Primary" primary={true} style={style}/>
              <RaisedButton
                type="button"
                label="Clear Values"
                secondary={true}
                style={style}
                onClick={reset}/>
            </div>
          </form>
        </MuiThemeProvider>
      </div>

    </div>

  )
}

export default reduxForm({
  form: 'MaterialUiForm', // a unique identifier for this form
  validate,
  asyncValidate
})(MaterialUiForm)