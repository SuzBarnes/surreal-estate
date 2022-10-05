import React from "react";
import { render, screen } from "@testing-library/react";
import SideBar from "../components/SideBar";

describe("SideBar", () => {

    xit("renders correctly", () => {
        render(<SideBar />)

        const sideBar = screen.getByText(/Manchester/i)

        expect(sideBar).toBeInTheDocument();
    })
});