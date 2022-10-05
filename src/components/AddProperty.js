import React, { useState } from "react";
import "../styles/addproperty.css";
import axios from "axios";
import Alert from "./Alert";

const AddProperty = () => {
    const initialState = {
        fields: {
            title: "",
            city: "Select Location...",
            type: "Property Type",
            bedrooms: "Number of Bedrooms",
            bathrooms: "Number of Bathrooms",
            price: "",
            email: "",
        },
        alert: {
            message: "",
            isSuccess: false,
        },
    };

    const [fields, setFields] = useState(initialState.fields);
    const [alert, setAlert] = useState(initialState.alert)

    const handleAddProperty = (event) => {
        console.log(initialState, "initialState")
        event.preventDefault();
        setAlert({ message: "", isSuccess: false })

        axios
            .post(`http://localhost:4000/api/v1/PropertyListing`, fields)
            .then(() => {
                setAlert({
                    message: "Property has been added successfully!",
                    isSuccess: true,
                })
            })
            .catch(() => {
                setAlert({
                    message: "Server error, please try again later.",
                    isSuccess: false,
                })
            })
    };
    const handleFieldChange = (event) =>
        setFields({ ...fields, [event.target.name]: event.target.value });

    return (
        <div className="add-property">
            <h3>Add New Listing:</h3>
            <h4>
                Enter the details of the property you would like to add into the form
                below.
            </h4>
            <form onSubmit={handleAddProperty}>
                <Alert message={alert.message} success={alert.isSuccess} />
                <input
                    id="title"
                    name="title"
                    value={fields.title}
                    onChange={handleFieldChange}
                    label="title"
                    placeholder="Enter a description"
                />
                <select
                    id="city"
                    name="city"
                    value={fields.city}
                    onChange={handleFieldChange}
                    label="city"
                    placeholder="Select city..."
                >
                    <option value="select-city">Select Location...</option>
                    <option value="manchester">Manchester</option>
                    <option value="sheffield">Sheffield</option>
                    <option value="liverpool">Liverpool</option>
                    <option value="leeds">Leeds</option>
                </select>
                <select
                    id="type"
                    name="type"
                    value={fields.type}
                    onChange={handleFieldChange}
                    label="property-type"
                    placeholder="Select property type"
                >
                    <option value="select-property-type">Select Property Type...</option>
                    <option value="flat">Flat</option>
                    <option value="detached">Detached</option>
                    <option value="semi-detached">Semi-Detached</option>
                    <option value="terraced">Terraced</option>
                    <option value="end-of-terrace">End of Terrace</option>
                    <option value="cottage">Cottage</option>
                    <option value="bungalow">Bungalow</option>
                </select>
                <select
                    id="bedrooms"
                    name="bedrooms"
                    value={fields.bedrooms}
                    onChange={handleFieldChange}
                    label="number-of-bedrooms"
                    placeholder="Number of Bedrooms"
                >
                    <option value="number-of-bedrooms">Number of Bedrooms</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5+">5+</option>
                </select>
                <select
                    id="bathrooms"
                    name="bathrooms"
                    value={fields.bathrooms}
                    onChange={handleFieldChange}
                    label="number-of-bathrooms"
                    placeholder="Number of Bathrooms"
                >
                    <option value="number-of-bathrooms">Number of Bathrooms</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5+">5+</option>
                </select>
                <input
                    id="price"
                    name="price"
                    value={fields.price}
                    onChange={handleFieldChange}
                    label="asking-price"
                    placeholder="Asking price"
                />
                <input
                    id="email"
                    name="email"
                    value={fields.email}
                    onChange={handleFieldChange}
                    label="email"
                    placeholder="Contact email address"
                />
                <button type="submit">Add</button>
            </form>
        </div>
    );
};

export default AddProperty;
