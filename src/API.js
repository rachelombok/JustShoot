import axios from "axios";

const API_URL = "http://localhost:3000"
const MAPBOX_TOKEN = 'pk.eyJ1IjoicmFjaGVsb21ib2siLCJhIjoiY2tjODZzY2xjMDlzNzJ0bXBpZmxlaHpxbSJ9.gdsDXK9lXiEIQG4GDtbZgg'

export async function listLogEntries() {
    const response = await fetch(`${API_URL}/api/logs`);
    return response.json();
  }
  
  export async function createTravelEntry(entry) {
    const response = await fetch(`${API_URL}/api/logs`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(entry),
    });
    return response.json();
  }

  export async function uploadImage(file) {
    const formData = new FormData();
    formData.append("image", file);
    const response = await axios.post(
      `${API_URL}/api/logs/image-upload`,
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    console.log(response);
    return response.data;
  }

  export async function searchPlace(placeName) {
    console.log(placeName);
    const searchAPI_URL = `https://api.mapbox.com/geocoding/v5/mapbox.places/${placeName}.json?access_token=${MAPBOX_TOKEN}`;
  
    const response = await axios.get(searchAPI_URL);
    return response.data.features;
  }