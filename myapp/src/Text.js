import React from 'react';
import TextField from 'material-ui/TextField';

const TextFieldExampleSimple = () => (
  <div style={{marginTop:'80px'}} >
    <TextField
      id="text-field-default"
      defaultValue="Username"
    /><br />
    <TextField 
      defaultValue="Password"
      floatingLabelText="Floating Label Text"
    /><br />

  </div>
);

export default TextFieldExampleSimple;
