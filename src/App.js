import React from 'react';
import logo from './logo.svg';
import './App.css';
//import Home from './components/homepage/index.js'
import Map from './components/testmp/index.js'
import Geocoder from 'react-mapbox-gl-geocoder'
import { render } from '@testing-library/react';

const queryParams = {
  country: 'us'
}

const mapAccess = {
  mapboxApiAccessToken: process.env.REACT_APP_MAPBOX_ACCESS_TOKEN
}

class App extends React.Component{
  constructor (props) {
    super(props)
    
    
  }
  
  

  onSelected = (viewport, item) => {
    this.setState({...this.state.viewport, ...viewport});
    console.log('Selected: ', item);
  };
  


  render(){
    
    return(
      <div>
      <Map component={Map}></Map>
      {/*<Home ref={this.mapRef} {...viewport} onViewportChange={(newViewport) => this.setState({viewport: newViewport})}/>*/}
      </div>
    );
  }
}



export default App;
