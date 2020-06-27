/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type AppAllPostsQueryVariables = {||};
export type AppAllPostsQueryResponse = {|
  +posts: {|
    +title: string
  |}
|};
export type AppAllPostsQuery = {|
  variables: AppAllPostsQueryVariables,
  response: AppAllPostsQueryResponse,
|};
*/


/*
query AppAllPostsQuery {
  posts {
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
    "plural": false,
    "selections": [
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
    "name": "AppAllPostsQuery",
    "selections": (v0/*: any*/),
    "type": "Query"
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "AppAllPostsQuery",
    "selections": (v0/*: any*/)
  },
  "params": {
    "id": null,
    "metadata": {},
    "name": "AppAllPostsQuery",
    "operationKind": "query",
    "text": "query AppAllPostsQuery {\n  posts {\n    title\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'ceacf26c3bb549746fc8649df49a60df';

module.exports = node;
