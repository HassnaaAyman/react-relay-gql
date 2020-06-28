import React from "react";
import graphql from "babel-plugin-relay/macro";
import Post from './Post';
import {useQuery } from 'relay-hooks';

const PostsAllPostsQuery = graphql`

  query PostsAllPostsQuery {
    posts{
      id,
      title
   }
  }
`;

const Posts = () => {
  const { props, error } = useQuery(
    PostsAllPostsQuery,
    {},
    {
        fetchPolicy: 'store-or-network',
    },
  ); 
  if (error) {
    return <div>{error.message}</div>;
  } else if (props) {
    return <Post viewer={props.posts} />;
  }
  return <div>Loading</div>;
};

export default Posts;
