import "@testing-library/jest-dom/vitest";
import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Tabs, TabsTrigger, TabsContent, TabsList } from "@/components/ui/Tabs";

describe("components/ui/tabs", () => {
	it("switches tab content when a tab is clicked", async () => {
		const user = userEvent.setup();

		render(
			<Tabs defaultValue="account">
				<TabsList>
					<TabsTrigger value="account">Account</TabsTrigger>
					<TabsTrigger value="password">Password</TabsTrigger>
				</TabsList>
				<TabsContent value="account">Account Content</TabsContent>
				<TabsContent value="password">Password Content</TabsContent>
			</Tabs>,
		);

		expect(screen.getByText("Account Content")).toBeInTheDocument();
		expect(screen.queryByText("Password Content")).not.toBeInTheDocument();

		await user.click(screen.getByRole("tab", { name: "Password" }));

		expect(screen.getByText("Password Content")).toBeInTheDocument();
		expect(screen.queryByText("Account Content")).not.toBeInTheDocument();
	});
});
