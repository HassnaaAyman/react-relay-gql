import React from "react";
import { createFragmentContainer } from "react-relay";
import graphql from "babel-plugin-relay/macro";

const Post = (props) => {
  console.log(props.viewer.posts);
  return <>kcfskcf</>;
};

export default createFragmentContainer(Post, {
  Post: graphql`
    fragment Post_Post on Post {
      id
      title
      body
    }
  `,
});
