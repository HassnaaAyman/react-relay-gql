/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type Post_Post$ref: FragmentReference;
declare export opaque type Post_Post$fragmentType: Post_Post$ref;
export type Post_Post = {|
  +id: string,
  +title: string,
  +body: string,
  +$refType: Post_Post$ref,
|};
export type Post_Post$data = Post_Post;
export type Post_Post$key = {
  +$data?: Post_Post$data,
  +$fragmentRefs: Post_Post$ref,
  ...
};
*/


const node/*: ReaderFragment*/ = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "Post_Post",
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
  "type": "Post"
};
// prettier-ignore
(node/*: any*/).hash = 'b5f0ee830d1ab5b3b196485c5c89d55a';

module.exports = node;
