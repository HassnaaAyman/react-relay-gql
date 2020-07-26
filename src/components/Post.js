import React from "react";
import { createFragmentContainer } from "react-relay";
import graphql from "babel-plugin-relay/macro";

const Post = (props) => {
  return (
    <div>
      {" "}
      {props ?  
       props.viewer.map((node) => {
        return<>
          <h1>{node.id} : </h1>
          <h2>{node.title}</h2>
        </>;
      })
      : <div>Hello, there</div>}
    </div>
  );
};

export default createFragmentContainer(Post, {
  Post: graphql`
    fragment Post_Post on Post {
      key
      id
      title
      body
    }
  `,
});
