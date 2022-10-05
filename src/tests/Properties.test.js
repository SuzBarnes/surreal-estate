import React from "react";
import { render, screen } from "@testing-library/react";
import Properties from "../components/Properties";

describe("Properties", () => {

    it("renders correctly", () => {
        render(
            <Properties />
        )

        const propertiesPage = screen.getByText(/properties page/i);

        expect(propertiesPage).toBeInTheDocument();
    })
});