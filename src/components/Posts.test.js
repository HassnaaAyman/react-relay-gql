import React from "react";
import Posts from "../components/Posts";
import { RelayEnvironmentProvider } from "relay-hooks";
import { render, waitForElementToBeRemoved } from "@testing-library/react";
import { createMockEnvironment, MockPayloadGenerator } from "relay-test-utils";
import { act } from "react-dom/test-utils";
import environment from "../environment";
let renderer;
describe("", () => {
  beforeEach(() => {
    act(() => {
      renderer = render(
        <RelayEnvironmentProvider environment={environment}>
          <Posts />
        </RelayEnvironmentProvider>
      );
    });
  });
  it("should render with error state", () => {
    environment.mock.rejectMostRecentOperation(new Error("Uh-oh"));
    const error = renderer.getByTestId("error-state");
    expect(error).toHaveTextContent("Uh-oh");
  });

  it("should render the data", () => {
    environment.mock.resolveMostRecentOperation((operation) =>
      MockPayloadGenerator.generate(operation, {
        id: 1,
        title: "ay7aga",
        body: "lm;ml;dcdkce",
      })
    );
  });
});
