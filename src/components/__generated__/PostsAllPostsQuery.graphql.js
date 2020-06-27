/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type Post_Post$ref = any;
export type PostsAllPostsQueryVariables = {||};
export type PostsAllPostsQueryResponse = {|
  +posts: {|
    +$fragmentRefs: Post_Post$ref
  |}
|};
export type PostsAllPostsQuery = {|
  variables: PostsAllPostsQueryVariables,
  response: PostsAllPostsQueryResponse,
|};
*/


/*
query PostsAllPostsQuery {
  posts {
    ...Post_Post
  }
}

fragment Post_Post on Post {
  id
  title
  body
}
*/

const node/*: ConcreteRequest*/ = {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "PostsAllPostsQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "Post",
        "kind": "LinkedField",
        "name": "posts",
        "plural": false,
        "selections": [
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "Post_Post"
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Query"
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "PostsAllPostsQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "Post",
        "kind": "LinkedField",
        "name": "posts",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "id",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "title",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "body",
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "id": null,
    "metadata": {},
    "name": "PostsAllPostsQuery",
    "operationKind": "query",
    "text": "query PostsAllPostsQuery {\n  posts {\n    ...Post_Post\n  }\n}\n\nfragment Post_Post on Post {\n  id\n  title\n  body\n}\n"
  }
};
// prettier-ignore
(node/*: any*/).hash = '5b80dd3215b66a1369f5a508f40eec0c';

module.exports = node;
