import {vi, describe, it, expect} from "vitest";
import '@testing-library/jest-dom';
import {render, screen} from "@testing-library/react";
import {userEvent} from "@testing-library/user-event";
import React from "react";
import CustomButton from "../src/components/CustomButton";


describe("Custom Button test", () => { 
    it("Should Render a button with the text \'Click Me\'", () => {
        render(<CustomButton onClick={()=>{}}/>);

        const button = screen.getByRole("button", {name : 'Click me'});

        expect(button).toBeInTheDocument();
    });
})