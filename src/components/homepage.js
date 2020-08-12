import React from 'react';
import ReactDOM from 'react-dom';
import mapboxgl from 'mapbox-gl';
import ReactMapboxGl, { Layer, Feature } from 'react-mapbox-gl';

mapboxgl.accessToken = 'pk.eyJ1IjoicmFjaGVsb21ib2siLCJhIjoiY2tjODZzY2xjMDlzNzJ0bXBpZmxlaHpxbSJ9.gdsDXK9lXiEIQG4GDtbZgg';

export default class Home extends React.Component {

  constructor(props) {
    super(props);
      this.state = {
      lng: 5,
      lat: 34,
      zoom: 2
      };
    }

  mapRef = React.createRef()

  handleViewportChange = (viewport) => {
    this.setState({
      viewport: { ...this.state.viewport, ...viewport }
    })
  }
    componentDidMount() {
      
        this.map = new mapboxgl.Map({
          container: this.mapContainer,
          style: 'mapbox://styles/mapbox/satellite-streets-v11',
          center: [-118.4, 34],
          zoom: 9,
        })
    
        this.map.on('load', () => {
          
          this.addPointsLayer()
    
          this.addBoundaryFillLayer()
    
          console.log(this.map.getStyle())
        })

        this.map.on('move', () => {
            this.setState({
                lng: this.map.getCenter().lng.toFixed(4),
                lat: this.map.getCenter().lat.toFixed(4),
                zoom: this.map.getZoom().toFixed(2)
            })
        })
        this.mapRef = React.createRef()
        const navControl = new mapboxgl.NavigationControl();
		//this.map.addControl(navControl, 'top-right');
    }





    
    
      addPointsLayer = () => {
        this.map.addLayer({
          id: 'random-points-circle',
          source: 'random-points',
          type: 'circle',
          paint: {
            'circle-radius': 6,
            'circle-color': '#FF0000',
          },
        })
      }
    
      
      addBoundaryFillLayer = () => {
        this.map.addLayer({
          id: 'boundaries-fill',
          source: 'boundaries',
          type: 'fill',
          paint: {
            'fill-color': '#00FF00',
            'fill-opacity': 0.25,
          },
        })
      }
    
      render() {
        
        return (
          <div
            ref={el => this.mapContainer = el}
            style={{
                width: '100%',
                height: 600
            }}
            /*{style={{
              position: 'absolute',
              top: 0,
              bottom: 0,
              left: 0,
              right: 0,
            }}*/
          >
             
            



          </div>
        )
      }
}

//ReactDOM.render(<Application />, document.getElementById('app'));

