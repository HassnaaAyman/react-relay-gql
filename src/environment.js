// import {
//     Environment,
//     Network,
//     RecordSource,
//     Store,
//   } from 'relay-runtime';
  
//   function fetchQuery(
//     operation,
//     variables,
//   ) {
//     return fetch('https://api.graphqlplaceholder.com/', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({
//         query: operation.text,
//         variables,
//       }),
//     }).then(response => {
//       return response.json();
//     });
//   }
  
//   const environment = new Environment({
//     network: Network.create(fetchQuery),
//     store: new Store(new RecordSource()),
//   });
  
//   export default environment;


import {Network} from 'relay-runtime';

//import {Environment, RecordSource, Store} from 'relay-runtime';
import {Store, Environment, RecordSource} from 'react-relay-offline';
import EnvironmentIDB from 'react-relay-offline/lib/runtime/EnvironmentIDB';

async function fetchQuery(
  operation,
  variables,
  cacheConfig,
){
  console.log('cacheConfig', cacheConfig);
  const response = await fetch('https://api.graphqlplaceholder.com/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: operation.text,
      variables,
    }),
  });

  return response.json();
}

const network = Network.create(fetchQuery);
export const manualExecution = false;

const environment = EnvironmentIDB.create({network}, {ttl: 60 * 1000}); //, {ttl: 60 * 1000}

const recordSource = new RecordSource();
const store = new Store(recordSource);
store._cache.set('provainit', 'prova');
// const environment = new Environment({network, store});
environment.setOfflineOptions({
  manualExecution, //optional
  network: network, //optional
  start: async mutations => {
    //optional
    console.log('start offline', mutations);
    return mutations;
  },
  finish: async (mutations, error) => {
    //optional
    console.log('finish offline', error, mutations);
  },
  onExecute: async mutation => {
    //optional
    console.log('onExecute offline', mutation);
    return mutation;
  },
  onComplete: async options => {
    //optional
    console.log('onComplete offline', options);
    return true;
  },
  onDiscard: async options => {
    //optional
    console.log('onDiscard offline', options);
    return true;
  },
  onPublish: async offlinePayload => {
    //optional
    console.log('offlinePayload', offlinePayload);
    return offlinePayload;
  },
});
/*
const environment = new Environment({
  network,
  store: new Store(new RecordSource()),
});*/
export default environment;