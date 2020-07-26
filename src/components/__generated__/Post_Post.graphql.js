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
  +key: string,
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
      "name": "key",
      "storageKey": null
    },
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
(node/*: any*/).hash = 'fbd5fd7e9fd26be7f537ca171fdd9ed5';

module.exports = node;
