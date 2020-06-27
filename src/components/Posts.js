import React from "react";
import { QueryRenderer } from "react-relay";
import environment from "../environment";
import graphql from "babel-plugin-relay/macro";
import Post from './Post';

const PostsAllPostsQuery = graphql`
  query PostsAllPostsQuery {
    posts {
      ...Post_Post
    }
  }
`;

const Posts = () => {
  return (
    <QueryRenderer
      query={PostsAllPostsQuery}
      environment={environment}
      render={({ error, props }) => {
        if (error) {
          return <div>{error.message}</div>;
        } else if (props) {
          return <Post viewer={props} />;
        }
        return <div>Loading</div>;
      }}
    />
  );
};

export default Posts;
