import React from "react";
import graphql from "babel-plugin-relay/macro";
import { useState } from "react";
import { useCallback } from "react";
import { useQuery } from "relay-hooks";

const AddPostQuery = graphql`
  mutation AddPostQuery($userId: Int!, $title: String!, $body: String!) {
    addPost(data: { userId: $userId, title: $title, body: $body }) {
      id: id
      title: title
      body: body
    }
  }
`;

const AddPost = () => {
  const [title, setTitle] = useState("");
  const memoizedTitleValue = useCallback((value) => setTitle(value), [
    setTitle,
  ]);

  const [body, setBody] = useState("");
  const memoizedBodyValue = useCallback((value) => setBody(value), [setBody]);

  const [postsTitle, setPostsTitle] = useState([]);
  const memoizedPostTitles = useCallback((value) => setPostsTitle(value), [
    setPostsTitle,
  ]);

  const handlePostTitle = (text, body) => {
    const newTitles = [...postsTitle, { text, body }];
    memoizedPostTitles(newTitles);
    memoizedTitleValue("");
    memoizedBodyValue("");
  };

  const useDataFetched = ()=>{
      const { props, error } = useQuery(
        AddPostQuery,
        {
          userId: 1,
          title,
          body,
        },
        {
          fetchPolicy: "store-or-network",
          ttl: 100000,
        }
      );
      if (error) {
      return <div data-testid="error-state">{error.message}</div>;
      } else if (props) {
        return <div data-testid="data-fetched"></div>;
      }
    }
  

  useDataFetched()
  return (
    <>
      <h1>Add post</h1>
      <input
        data-testid="post-title"
        type="text"
        value={title}
        onChange={(e) => memoizedTitleValue(e.target.value)}
      ></input>

      <input
        data-testid="post-body"
        type="text"
        value={body}
        onChange={(e) => memoizedBodyValue(e.target.value)}
      ></input>
      <button
        data-testid="add-post"
        onClick={() => handlePostTitle(body, title)}
      >
        Add Post
      </button>

      <div data-testid="posts">
        {postsTitle.map((title) => (
          <>
            {title.text} : {title.body}
          </>
        ))}
      </div>
    </>
  );
};

export default AddPost;
