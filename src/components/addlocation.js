import React, { useState } from "react";
import { Marker, Popup } from "react-map-gl";
import { Form,FormControl,Button, Popover, OverlayTrigger, Tooltip, Modal } from 'react-bootstrap'
import LogEntryForm from "./logentryform.js";

const AddLocation = (props) => {
    const { addLocation, viewport, setAddLocation, getTravelEntries} = props;
    let show = props.show
    //const [show, setShow] = useState(false);

  //const handleClose = () => setShow(false);
  //const handleShow = () => setShow(true);

   
    return (
      <div>
        {addLocation ? (
          <>
            <Marker
              latitude={addLocation.latitude}
              longitude={addLocation.longitude}
              offsetLeft={-20}
              offsetTop={-10}
            >
              <svg
                className="marker"
                style={{
                  height: `${4 * viewport.zoom}`,
                  width: `${4 * viewport.zoom}`,
                }}
                viewBox="0 0 24 24"
                stroke-width="2"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                <circle cx="12" cy="10" r="3"></circle>
              </svg>
            </Marker>
            <Modal
            show={show}
            onHide={() => show=false}
            >
            <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => show=false}>
            Close
          </Button>
          
        </Modal.Footer>

            </Modal>
            {/*<Modal show={show} onHide={() => {
                setAddLocation(null);
              }}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body><div className="popup">
                <LogEntryForm
                  coordinates={addLocation}
                  onFormClose={() => {
                    setAddLocation(null);
                    getTravelEntries();
                  }}
                />
              </div></Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => {
                setAddLocation(null);
              }}>
            Close
          </Button>
          <Button variant="primary" onClick={() => {
                setAddLocation(null);
              }}>
            Save Changes
          </Button>
        </Modal.Footer>
            </Modal>*/}
            {/*<Popup
              latitude={addLocation.latitude}
              longitude={addLocation.longitude}
              closeButton={true}
              closeOnClick={false}
              dynamicPosition={true}
              onClose={() => {
                setAddLocation(null);
              }}
              anchor="top"
            >
              <div className="popup">
                <LogEntryForm
                  coordinates={addLocation}
                  onFormClose={() => {
                    setAddLocation(null);
                    getTravelEntries();
                  }}
                />
              </div>
                </Popup>{" "}*/}
          </>
        ) : null}
      </div>
    );
  };
  
  export default AddLocation;