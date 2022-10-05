import React from "react";
import { render, screen } from "@testing-library/react";
import AddProperty from "../components/AddProperty";

describe("Add Property", () => {

    const validProps = {
        _id: 1,
        title: "mock title",
        type: "mock type",
        bathrooms: 1,
        bedrooms: 2,
        price: 100000,
        city: "mock city",
        email: "mock email",
        setFields: jest.fn(),
        onSubmit: jest.fn(),
    };

    it("renders correctly", () => {
        render(<AddProperty />)

        const addProperty = screen.getByText(/add new listing/i);

        expect(addProperty).toBeInTheDocument();
    })

    xit("renders the add button correctly", () => {
        const { getByText } = render(
            <AddProperty />
        )
    })
    xit("displays success message when property data has been submitted", () => {

    })
})