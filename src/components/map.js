import "mapbox-gl/dist/mapbox-gl.css";
import "react-map-gl-geocoder/dist/mapbox-gl-geocoder.css";
import React, { useState, useEffect, useCallback, Component } from "react";
import { render } from "react-dom";
import ReactMapGl,{ Marker, Popup, NavigationControl} from "react-map-gl";
import { listLogEntries } from "../API";
import Geocoder from "react-map-gl-geocoder"
import AddLocation from './addlocation.js'
import MapMarker from './mapmarker.js'
import Search from './search.js'
import GeocoderSearch from './geocoder.js'


// Please be a decent human and don't abuse my Mapbox API token.
// If you fork this sandbox, replace my API token with your own.
// Ways to set Mapbox token: https://uber.github.io/react-map-gl/#/Documentation/getting-started/about-mapbox-tokens

const MAPBOX_TOKEN =
  "pk.eyJ1IjoicmFjaGVsb21ib2siLCJhIjoiY2tjODZzY2xjMDlzNzJ0bXBpZmxlaHpxbSJ9.gdsDXK9lXiEIQG4GDtbZgg";

const geostyle = {
  margin: '20px'
}
/*
const MAPBOX_TOKEN =
  "pk.eyJ1IjoicmFjaGVsb21ib2siLCJhIjoiY2tjODZzY2xjMDlzNzJ0bXBpZmxlaHpxbSJ9.gdsDXK9lXiEIQG4GDtbZgg";

  const queryParams = {
    country: 'us'
}


class Map extends Component {
  state = {
    viewport: {
      latitude: 37.7577,
      longitude: -122.4376,
      zoom: 8
    },
    logEntries: [],
    showPopUp: {},
    addLocation: null

  };

  getTravelEntries = async () => {
    const logEntries = await listLogEntries();
    //setLogEntries(logEntries);
    this.setState({logEntries: this.state.logEntries})
  };

  useEffect = (() => {
    this.getTravelEntries();
  }, []);

  markVisited = (event) => {
    const [longitude, latitude] = event.lngLat;
    /*setAddLocation({
      latitude,
      longitude,
    });
    this.setState({ addLocation: [latitude,longitude]})
  };
  
  

  mapRef = React.createRef();

  handleViewportChange = viewport => {
    this.setState({
      viewport: { ...this.state.viewport, ...viewport }
    });
  };

  onSelected = (viewport, item) => {
    this.setState({...this.state.viewport, ...viewport});
    console.log('Selected: ', item);
  };

  // if you are happy with Geocoder default settings, you can just use handleViewportChange directly
  handleGeocoderViewportChange = viewport => {
    const geocoderDefaultOverrides = { transitionDuration: 1000 };

    return this.handleViewportChange({
      ...viewport,
      ...geocoderDefaultOverrides
    });
  };

  render() {
    const { viewport } = this.state;

    return (
      <div style={{ height: "100vh" }}>
        
        <ReactMapGl
          ref={this.mapRef}
          {...viewport}
          width="100%"
          mapStyle='mapbox://styles/mapbox/satellite-streets-v11'
          height="600px"
          onViewportChange={this.handleViewportChange}
          mapboxApiAccessToken={MAPBOX_TOKEN}
          onDblClick={this.markVisited}

        >
          <Geocoder
            mapRef={this.mapRef}
            onViewportChange={this.handleGeocoderViewportChange}
            mapboxApiAccessToken={MAPBOX_TOKEN}
            viewport={viewport}
            //onSelected={this.onSelected}
            //queryParams={queryParams}
            //hideOnSelect={true}
            position="top-left"
          />

<MapMarker
        logEntries={this.state.logEntries}
        viewport={viewport}
        showPopUp={this.state.showPopUp}
        setShowPopUp={(showPopUp) => this.setState({showPopUp})}
      />

<AddLocation
        addLocation={this.state.addLocation}
        viewport={viewport}
        setAddLocation={(addLocation) => this.setState({ addLocation})}
        getTravelEntries={this.getTravelEntries()}
      />
          
        </ReactMapGl>
      </div>
    );
  }
}
 
export default Map;*/

const Map = () => {
  const [logEntries, setLogEntries] = useState([]);
  const [showPopUp, setShowPopUp] = useState({});
  const [addLocation, setAddLocation] = useState(null);
  const [show, setShow] = useState(false);

  const [viewport, setViewport] = useState({
    width: "100vw",
    height: "100vh",
    latitude: 40.730610,
    longitude: -73.935242,
    zoom: 9.5,
  });

  const getTravelEntries = async () => {
    const logEntries = await listLogEntries();
    setLogEntries(logEntries);
  };


  useEffect(() => {
    getTravelEntries();
  }, []);

  const markVisited = (event) => {
    const [longitude, latitude] = event.lngLat;
    setAddLocation({
      latitude,
      longitude,
    });
    setShow({
     show: true
    });
  };

  const mapRef = React.createRef();
  //const geocoderContainerRef = React.useRef();

  const handleViewportChange = viewport => {
    this.setState({
      viewport: { ...this.state.viewport, ...viewport }
    });
  };

  const onSelected = (viewport, item) => {
    this.setState({...this.state.viewport, ...viewport});
    console.log('Selected: ', item);
  };

  // if you are happy with Geocoder default settings, you can just use handleViewportChange directly
  const handleGeocoderViewportChange = viewport => {
    const geocoderDefaultOverrides = { transitionDuration: 1000 };

    return this.handleViewportChange({
      ...viewport,
      ...geocoderDefaultOverrides
    });
  };


  const myMap = React.useRef()
  const geocoderContainerRef = React.useRef();
  /* const setCoordinate = useCallback((event) => {
    console.log(event);
  }, []); */

  

  return (
    <div >
      
    
    <ReactMapGl
    ref={myMap}
    {...viewport}
      mapStyle="mapbox://styles/mapbox/satellite-streets-v11"
      mapboxApiAccessToken={MAPBOX_TOKEN}
      onViewportChange={setViewport}
      onDblClick={markVisited}
    >
      
        
      <MapMarker
        logEntries={logEntries}
        viewport={viewport}
        showPopUp={showPopUp}
        setShowPopUp={setShowPopUp}
      />
      <div ref={geocoderContainerRef}
          style={{
            height: 50,
            backgroundColor: 'transparent',
            display: "flex",
            alignItems: "center",
            paddingLeft: 20,
            paddingTop: 95
          }}/>

<Geocoder
            style={geostyle}
            mapRef={myMap}
            containerRef={geocoderContainerRef}
            onViewportChange={setViewport}
            mapboxApiAccessToken={MAPBOX_TOKEN}
            viewport={viewport}
            //onSelected={this.onSelected}
            //queryParams={queryParams}
            //hideOnSelect={true}
            position="top-left"
          />
          <div style={{position: 'absolute', right: 10}}>
          <NavigationControl />
        </div>
          

{/*<Search setViewport={setViewport} />*/}

      
      <AddLocation
        show={show}
        addLocation={addLocation}
        viewport={viewport}
        setAddLocation={setAddLocation}
        setShow={setShow}
        getTravelEntries={getTravelEntries}
      />

    </ReactMapGl>

  
    </div>


    
  );
  
};

export default Map;