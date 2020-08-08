import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { createTravelEntry, uploadImage } from "../API";
import { addLog } from '../API';
import { Form,FormControl,Button, Popover, OverlayTrigger, Tooltip, Modal, InputGroup } from 'react-bootstrap'

const LogEntryForm = (props) => {
  
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [rangeValue, setRangeValue] = useState(0);
    const { register, handleSubmit } = useForm();
  
    const onSubmit = async (data) => {
      console.log(data);
      if (data.images.length > 5){
          window.alert('Do not submit more than 5 images.')
          console.log("failure")
          //window.location.replace('/')

      }
      else{
        console.log('okie okie')
      let uploadedimage;
      try {
        setLoading(true);
        uploadedimage = await uploadImage(data.image[0]);
        console.log(uploadedimage);
      } catch (error) {
        console.error(error);
        setError(error.message);
        setLoading(false);
      }
  
      try {
        data.latitude = props.coordinates.latitude;
        data.longitude = props.coordinates.longitude;
        data.image = uploadedimage.imageUrl;
        const response = await createTravelEntry(data);
        props.onFormClose();
        console.log(response);
      } catch (error) {
        console.error(error);
        setError(error.message);
        setLoading(false);
      }
    }
    };

    
  
    return (
      <div>
      <style type='text/css'>
      {`
      .btn-flat {
      background: linear-gradient(rgba(250,0,0,0.5),transparent);
      background-color: orange;
      color: white;
    }

      .btn-xxl {
      padding: 1rem 1.5rem;
      font-size: 1.5rem;
    }
    `}

    </style>
      <Form onSubmit={handleSubmit(onSubmit)} >
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Place Name</Form.Label>
          <Form.Control name='title' type="text" placeholder="Ex: Central Park" required ref={register}/>
        </Form.Group>
        <Form.Group>
          <Form.Label>Photographer (Instagram)</Form.Label>
          <InputGroup>
        <InputGroup.Prepend>
          <InputGroup.Text>@</InputGroup.Text>
        </InputGroup.Prepend>
        <FormControl name='photographer' placeholder="rachelombok" ref={register}/>
      </InputGroup>
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor='images' >Images</Form.Label>
          <Form.File name='images' type="file" accept="image/png, image/jpeg" multiple required ref={register}/>
          <Form.Text className="text-muted">
            Select up to 5 images.
          </Form.Text>
        </Form.Group>
        <Form.Group>
          <Form.Label>Description</Form.Label>
          <Form.Control name='description' as='textarea' placeholder='Ex: Nice greenery shots in the heart of NYC, taken with a Nikon D3200 with f/11,
          ISO 200, shutter 1/16. Very beautiful during the summer.' ref={register}/>
        </Form.Group>
        <Form.Group>
          <Form.Label>Tags</Form.Label>
          <Form.Control name='tags' placeholder='landscape NYC nature sun' ref={register}/>
          <Form.Text className="text-muted">
            Separate by whitespace, up to 10 tags.
          </Form.Text>
        </Form.Group>
        <Form.Group>
          <Form.Label>Visit Date</Form.Label>
          <Form.Control name='date' type="date" ref={register}/>
        </Form.Group>
        
        <Button disabled={loading} type='submit' {...loading ? "Creating..." : "Created"} variant='flat' block size='lg'>
            Submit
        </Button>
        
      </Form></div>
      
      /*<form className="entry-form" onSubmit={handleSubmit(onSubmit)}>
        {error ? <h3 className="errormsg">{error.message}</h3> : null}
        <label htmlFor="title">Place Name: </label>
        <input name="title" type="text" placeholder='Ex: Central Park' required ref={register} />
        <label htmlFor="photographer">Photographer (Instagram): </label>
        <textarea
          name="photographer"
          id=""
          cols="2"
          rows="1"
          placeholder='Ex: @rachelombok'
          ref={register}
        ></textarea>
        <label htmlFor="description">Description: </label>
        <textarea
          name="description"
          id=""
          cols="2"
          rows="1"
          placeholder='Ex: Nice greenery shots in the heart of NYC, taken with a Nikon D3200 with f/11,
          ISO 200, shutter 1/16'
          ref={register}
        ></textarea>
        <label htmlFor="tags">Tags (Separate by Whitespace): </label>
        <textarea
          name="tags"
          id=""
          cols="2"
          rows="1"
          placeholder='landscape NYC nature sun'
          ref={register}
        ></textarea>
        <label htmlFor="visitDate">Visit Date: </label>
        <input name="visitDate" type="date" ref={register} />
        <label htmlFor="image">Image: </label>
        <input name="image" type="file" accept="image/png, image/jpeg" multiple required ref={register} />
        {/* <input
          name="image"
          type="text"
          ref={register}
          placeholder="Pase an image URL"
        /> 
        <label htmlFor="rating">Rating: {rangeValue}</label>
        <input
          name="rating"
          type="range"
          min="0"
          value={rangeValue}
          max="10"
          onChange={(e) => {
            setRangeValue(e.target.value);
          }}
          ref={register}
        />hereto
        <button disabled={loading} type="submit">
          {loading ? "Creating..." : "Create Travel Log"}
        </button>
      </form>*/
    );
  };
  
  export default LogEntryForm;