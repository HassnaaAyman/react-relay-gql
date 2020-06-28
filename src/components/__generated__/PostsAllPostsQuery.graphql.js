/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type PostsAllPostsQueryVariables = {||};
export type PostsAllPostsQueryResponse = {|
  +posts: ?$ReadOnlyArray<?{|
    +id: string,
    +title: string,
  |}>
|};
export type PostsAllPostsQuery = {|
  variables: PostsAllPostsQueryVariables,
  response: PostsAllPostsQueryResponse,
|};
*/


/*
query PostsAllPostsQuery {
  posts {
    id
    title
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "alias": null,
    "args": null,
    "concreteType": "Post",
    "kind": "LinkedField",
    "name": "posts",
    "plural": true,
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
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "PostsAllPostsQuery",
    "selections": (v0/*: any*/),
    "type": "Query"
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "PostsAllPostsQuery",
    "selections": (v0/*: any*/)
  },
  "params": {
    "id": null,
    "metadata": {},
    "name": "PostsAllPostsQuery",
    "operationKind": "query",
    "text": "query PostsAllPostsQuery {\n  posts {\n    id\n    title\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'a1c39950079f4acde97d098e3883f5a6';

module.exports = node;
