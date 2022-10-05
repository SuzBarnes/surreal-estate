import React from "react";
import { render } from "@testing-library/react";
import Alert from "../components/Alert";

describe("Alert", () => {
    it("logs 'Error!' when there is an error", () => {
        const { getByText, asFragment } = render(<Alert message="Error!" error />);

        expect(getByText(/error/i).textContent).toBe("Error!");
        expect(asFragment()).toMatchSnapshot();
    });

    it("logs 'Success!!!' when the task is successful", () => {
        const { getByText, asFragment } = render(<Alert message="Success!!!" success />);

        expect(getByText(/success/i).textContent).toBe("Success!!!");
        expect(asFragment()).toMatchSnapshot();
    });

    it("does not render Alert component when message is not truthy", () => {
        const { asFragment } = render(<Alert message="" />);
        const alert = asFragment();

        expect(alert).toMatchSnapshot();
    })
});
