import React, { useState, useEffect } from "react";
import "../styles/properties.css";
import PropertyCard from "./PropertyCard";
import Alert from "./Alert";
import axios from "axios";

const Properties = () => {

  const initialState = {
    properties: [],
    alert: {
      message: "",
    }
  }
  const [properties, setProperties] = useState(initialState.properties);
  const [alert, setAlert] = useState(initialState.alert)

  useEffect(() => {
    axios.get(`http://localhost:4000/api/v1/PropertyListing`)
      .then(({ data }) => {
        setProperties(data)
        // setAlert({ message: `${properties}` })
      })
      .catch((err) => {
        console.error(err)
        setAlert({
          message: "Server error, please try again later."
        })
      })
  }, [])

  return (
    <div className="properties">
      <h2>Properties Page</h2>
      <Alert message={alert.message} />
      {properties.map(property => (
        <div key={property._id} className="item">
          <PropertyCard {...property} />
        </div>
      ))}
    </div>
  );
};

export default Properties;
