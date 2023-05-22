import React from "react";
import { render, screen } from "@testing-library/react";
import { Home } from "../pages/Home";

test("Test if Checkout Page appears", () => {
    render(<Home />);
    const shopPageHeader = screen.getByText(/Checkout/i);
    expect(shopPageHeader).toBeInTheDocument();
});

test("Test if Login Page appears", () => {
    render(<Home />);
    const shopPageHeader = screen.getByText(/Login/i);
    expect(shopPageHeader).toBeInTheDocument();
});

test("Test if admin Page appears", () => {
    render(<Home />);
    const shopPageHeader = screen.getByText(/admin/i);
    expect(shopPageHeader).toBeInTheDocument();
});

test("Test if SignUp Page appears", () => {
    render(<Home />);
    const shopPageHeader = screen.getByText(/SignUp/i);
    expect(shopPageHeader).toBeInTheDocument();
});
