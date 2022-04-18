import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom/extend-expect";
import App from "../App";
import { server } from "../__mock_data__/server";
import responseMock from "../__mock_data__/response";

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

test("All components should be render", () => {
  render(<App />);

  // screen.debug();

  const searchBox = screen.getByLabelText("searchBox");
  const button = screen.getByText("Search");

  expect(searchBox).toBeInTheDocument();
  expect(button).toBeInTheDocument();
});

test("Search box value should be same as user typing", () => {
  render(<App />);

  const searchBox = screen.getByLabelText("searchBox");
  userEvent.type(searchBox, "cat");

  expect(searchBox.value).toBe("cat");
});

test("The App should fetch the API then return correct response", async () => {
  render(<App />);

  const searchBox = screen.getByLabelText("searchBox");
  userEvent.type(searchBox, "cat"); // typing cat

  const button = screen.getByText("Search");
  userEvent.click(button); // click button

  // fetchAPI
  fetch("https://api.giphy.com/v1/gifs/search", { method: "GET" });

  await waitFor(() => {
    expect(screen.getAllByTestId("imageGif")).toHaveLength(responseMock.data.length);
  });
});