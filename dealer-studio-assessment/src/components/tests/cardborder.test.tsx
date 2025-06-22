import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, it, expect } from "vitest";
import Card from "../Card";

describe("Card outline toggle", () => {
	it("should not have border by default if startWithBorder is not set", () => {
		render(
			<Card
				title="Test"
				description="Test description"
				actionString="Test button"
			/>
		);
		// Grab one of the text elements then grab its parent's parent to get the bounding div'
		const container = screen.getByText("Test").parentElement?.parentElement;
		// Check to see if the outline (ring-colour) is transparent
		expect(container?.classList).toContain("ring-c_transparent");
	});

	it("should have border if startWithBorder is true, and have correct borderColor", () => {
		render(
			<Card
				title="Test"
				description="Test description"
				actionString="Test button"
				startWithBorder={true}
			/>
		);
		// Grab one of the text elements then grab its parent's parent to get the bounding div'
		const container = screen.getByText("Test").parentElement?.parentElement;
		// Check to see if the outline (ring-colour) is sky.600
		expect(container?.classList).toContain("ring-c_sky.600");
	});

	it("toggles border when button is clicked", async () => {
		render(
			<Card
				title="Test"
				description="Test description"
				actionString="Test button"
			/>
		);
		// Grab one of the text elements then grab its parent's parent to get the bounding div'
		const container = screen.getByText("Test").parentElement?.parentElement;

		const button = screen.getByRole("button", { name: "Test button" });
		// Initially borderless
		expect(container?.classList).toContain("ring-c_transparent");

		// Click the button to toggle border and retest
		await userEvent.click(button);
		expect(container?.classList).toContain("ring-c_sky.600");

		// Click again to toggle border off and retest
		await userEvent.click(button);
		expect(container?.classList).toContain("ring-c_transparent");
	});
});