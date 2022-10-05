import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import PropertyCard from "./PropertyCard";
import Alert from "./Alert";
import SideBar from "./SideBar";
import "../styles/properties.css";

const Properties = () => {

  const initialState = {
    properties: [],
    alert: {
      message: "",
    }
  }
  const [properties, setProperties] = useState(initialState.properties);
  const [alert, setAlert] = useState(initialState.alert)

  const { search } = useLocation();

  useEffect(() => {
    axios.get(`http://localhost:4000/api/v1/PropertyListing`)
      .then(({ data }) => {
        setProperties(data)
      })
      .catch((err) => {
        console.error(err)
        setAlert({
          message: "Server error, please try again later."
        })
      })
  }, [])

  useEffect(() => {
    axios.get(`http://localhost:4000/api/v1/PropertyListing/${search}`)
      .then(({ data }) =>
        setProperties(data))
      .catch(err =>
        console.error(err))
  }, [search]);

  return (
    <div className="properties">
      <SideBar />
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
