import React from "react";
import { RelayEnvironmentProvider } from "relay-hooks";
import { render, waitForElementToBeRemoved } from "@testing-library/react";
import { createMockEnvironment, MockPayloadGenerator } from "relay-test-utils";
import { act } from "react-dom/test-utils";
import environment from "../environment";
import AddPost from "./AddPost";
import userEvent from "@testing-library/user-event";

let renderer;
describe("", () => {
  beforeEach(() => {
    act(() => {
      renderer = render(
        <RelayEnvironmentProvider environment={environment}>
          <AddPost />
        </RelayEnvironmentProvider>
      );
    });
  });

//   it("should render with error state", async() => {

//     environment.mock.rejectMostRecentOperation(new Error("Uh-oh"));
//     const error = renderer.getByTestId("error-state");
//     expect(error).toHaveTextContent("Uh-oh");
//   });

  it("should render the data", () => {
    environment.mock.resolveMostRecentOperation((operation) =>
      MockPayloadGenerator.generate(operation, {
        id: 1,
        title: "ay7aga",
        body: "lm;ml;dcdkce",
      })
    );
  });

  it("should  fill input with value", async () => {
    const postTitle = renderer.getByTestId("post-title");
    await userEvent.type(postTitle, "welcom");

    const postBody = renderer.getByTestId("post-body");
    await userEvent.type(postBody , "there!");
  });

  it('should have empty posts by default', () => {
    const posts = renderer.getByTestId('posts')
    expect(posts.children).toHaveLength(0)
  })

  it('should let user add a new post', async () => {
    const postTitle = renderer.getByTestId("post-title");
    await userEvent.type(postTitle, "welcom");

    const postBody = renderer.getByTestId("post-body");
    await userEvent.type(postBody , "there!");

    const posts = renderer.getByTestId('posts')

    const submitPostButton = renderer.getByTestId('add-post')
    await userEvent.click(submitPostButton)
    expect(posts).toHaveTextContent('there! : welcom')  
  })
});
