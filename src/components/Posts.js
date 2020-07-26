import React from "react";
import graphql from "babel-plugin-relay/macro";
import Post from "./Post";
import { useQuery } from "relay-hooks";
// const PostsAllPostsQuery = graphql`
//   mutation PostsAllPostsQuery($userId: Int!, $title: String!, $body: String!) {
//     addPost(data: { userId: $userId, title: $title, body: $body }) {
//       id
//       title
//       body
//     }
//   }
// `;
const PostsAllPostsQuery = graphql`
  query PostsAllPostsQuery {
    posts {
      id
      title
    }
  }
`;

const Posts = () => {
  const { props, error } = useQuery(
    PostsAllPostsQuery,
    {},
    {
      fetchPolicy: "store-or-network",
      ttl: 100000,
    }
  );
  if (error) {
    return <div data-testid='error-state'>{error.message}</div>;
  } else if (props) {
    return (
        <div data-testid='data-fetched'> 
        <Post key={props.id} viewer={props.posts} />
        </div>
    );
  }
  return <div data-testid='loading'>Loading...</div>;
};

export default Posts;
