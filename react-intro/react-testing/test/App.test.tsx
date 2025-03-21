// App.test.jsx

import { vi, describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import App from "../src/App";
import React, { use } from "react";
import userEvent from "@testing-library/user-event";
import { Buttons } from "@testing-library/user-event/dist/cjs/system/pointer/buttons.js";
import CustomButton from "../src/components/CustomButton";

describe('App Componenets', () => {
    it('Should render magnificent monkeys', () => {
        const { container } = render(<App />);

        expect(container).toMatchSnapshot();
    });
    it('render radical rhinos after button click', async () => {

        const user = userEvent.setup();

        render(<App />);
        expect(screen.getByRole("heading").textContent).toMatch(/Our First Test/i)
        const button = screen.getByRole("button", {name : "Click Me"});

        await user.click(button);

        expect(screen.getByRole("heading").textContent).toBe("Heading After Click");

    });

    it("Should call the onClick when clicked", async () => {
        const onClick = vi.fn();
        const user = userEvent.setup()

        render(<CustomButton onClick={onClick} />);

        const button = screen.getByRole("button", {name : "Click me"});

        await user.click(button);

        expect(onClick).toHaveBeenCalled();
    });

    it("Should not call onclick when not clicked",  async () => {
        const onClick = vi.fn();
        const user = userEvent.setup()

        render(<CustomButton onClick={onClick} />);

        const button = screen.getByRole("button", {name : "Click me"});

 
        expect(onClick).not.toHaveBeenCalled();
    });
})
