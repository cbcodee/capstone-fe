import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("Tasks", () => {
  // Act
  render(<App />);
  const linkElement = screen.getByText(/Tasks/i);
  // Assert
  expect(linkElement).toBeInTheDocument();
});
