import React from "react";
import { render } from "@testing-library/react";
import PropertyCard from "../components/PropertyCard";

describe("PropertyCard", () => {
    const propertyCard = {
        _id: 1,
        title: "mock title",
        type: "mock type",
        bathrooms: 1,
        bedrooms: 2,
        price: 100000,
        city: "mock city",
        email: "mock email",
    };

    const { asFragment } = render(<PropertyCard
        propertyCard={propertyCard}
    />)

    expect(asFragment()).toMatchSnapshot();

    it("displays the title, type, city and email correctly", () => {
        expect(propertyCard.title).toBe("mock title");
        expect(propertyCard.type).toBe("mock type");
        expect(propertyCard.city).toBe("mock city");
        expect(propertyCard.email).toBe("mock email");
    })

    it("displays the number of bedrooms, bathrooms, price as the correct numbers", () => {
        expect(propertyCard.bedrooms).toBe(2);
        expect(propertyCard.bathrooms).toBe(1);
        expect(propertyCard.price).toBe(100000);
    })

});