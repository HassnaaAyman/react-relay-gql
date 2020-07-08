import React from "react";
import graphql from "babel-plugin-relay/macro";
import Post from "./Post";
import { useQuery , useRestore} from "react-relay-offline";
import environment from '../environment'
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
  const isRehydrated = useRestore(environment);

  const { props, error } = useQuery(
    PostsAllPostsQuery,
    {},
    {
      fetchPolicy: "store-or-network",
      ttl: 100000,
    }
  );
  if (error) {
    return <div>{error.message}</div>;
  } else if (props) {
    return <Post viewer={props.posts} />;
  }
  if (!isRehydrated) {
    console.log("loading");
    return <div />;
  }

  return <div>Loading</div>;
};

export default Posts;
