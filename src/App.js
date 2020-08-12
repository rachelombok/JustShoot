import React from 'react';
import './App.css';
import Home from './components/homepage.js'
import Map from './components/map.js'
import Footer from './components/footer.js'
import NavigationBar from './components/navigationbar.js'
import Geocoder from 'react-mapbox-gl-geocoder'
import { render } from '@testing-library/react';
import 'bootstrap/dist/css/bootstrap.min.css';



const mapAccess = {
  mapboxApiAccessToken: process.env.REACT_APP_MAPBOX_ACCESS_TOKEN
}

class App extends React.Component{
  constructor (props) {
    super(props)
    
    
  }
  
  
  


  render(){
    
    return(
      <div>
        <NavigationBar/>
      <Map />
      {/*<Home ref={this.mapRef} {...viewport} onViewportChange={(newViewport) => this.setState({viewport: newViewport})}/>*/}
      <Footer/>
      </div>

    );
  }
}



export default App;
