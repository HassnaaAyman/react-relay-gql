/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type AddPostQueryVariables = {|
  userId: number,
  title: string,
  body: string,
|};
export type AddPostQueryResponse = {|
  +addPost: ?$ReadOnlyArray<?{|
    +id: string,
    +title: string,
    +body: string,
  |}>
|};
export type AddPostQuery = {|
  variables: AddPostQueryVariables,
  response: AddPostQueryResponse,
|};
*/


/*
mutation AddPostQuery(
  $userId: Int!
  $title: String!
  $body: String!
) {
  addPost(data: {userId: $userId, title: $title, body: $body}) {
    id
    title
    body
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "userId",
    "type": "Int!"
  },
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "title",
    "type": "String!"
  },
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "body",
    "type": "String!"
  }
],
v1 = [
  {
    "alias": null,
    "args": [
      {
        "fields": [
          {
            "kind": "Variable",
            "name": "body",
            "variableName": "body"
          },
          {
            "kind": "Variable",
            "name": "title",
            "variableName": "title"
          },
          {
            "kind": "Variable",
            "name": "userId",
            "variableName": "userId"
          }
        ],
        "kind": "ObjectValue",
        "name": "data"
      }
    ],
    "concreteType": "Post",
    "kind": "LinkedField",
    "name": "addPost",
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
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "AddPostQuery",
    "selections": (v1/*: any*/),
    "type": "Mutation"
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "AddPostQuery",
    "selections": (v1/*: any*/)
  },
  "params": {
    "id": null,
    "metadata": {},
    "name": "AddPostQuery",
    "operationKind": "mutation",
    "text": "mutation AddPostQuery(\n  $userId: Int!\n  $title: String!\n  $body: String!\n) {\n  addPost(data: {userId: $userId, title: $title, body: $body}) {\n    id\n    title\n    body\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'fa449377b0171b93ad270114c98876f6';

module.exports = node;
