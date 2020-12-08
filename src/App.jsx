import React from 'react';
// import './App.css';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import BackToTop from './components/header.js';
import SingleLineGridList from './components/slider.js';

class App extends React.Component {
  
  render() {
    return (
      <div>
        <BackToTop/>
        <SingleLineGridList/>
        <Box textAlign="center" my={5}>
      <Button variant="contained" color="primary" >Buy Now</Button>
      </Box>
      </div>
    );
  }
}

export default App;
