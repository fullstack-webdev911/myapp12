import React from 'react';
import Paper from 'material-ui/Paper';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Login from './Login'
import Text from './Text'
import Button from './Button'
import Toolbar from './Toolbar'

const style = {
  height: 450,
  width: 500,
  textAlign: 'center',
  display: 'inline-block',
  marginLeft: '700px',
  marginTop: '150px',  
};

const PaperExampleSimple = () => (
  <MuiThemeProvider>
    <div>
      <Paper style={style} zDepth={5} >
        <Login />
        <Text />
        <Button />
        <Toolbar />
      </Paper>
    </div>
  </MuiThemeProvider>
);

export default PaperExampleSimple;