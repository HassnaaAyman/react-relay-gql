import React from "react";
import { createFragmentContainer } from "react-relay";
import graphql from "babel-plugin-relay/macro";

const Post = (props) => {
console.log(props , "props");


  return (
    <div>
      {" "}
      {props.viewer.map((node) => {
        return<>
          <h1>{node.id} : </h1>
          <h2>{node.title}</h2>
        </>;
      })}
      ;
    </div>
  );
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
