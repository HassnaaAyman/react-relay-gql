import React from "react";
import "./App.css";
import Posts from "./components/Posts";
import { RelayEnvironmentProvider } from "relay-hooks";
import environment from "./environment";

 function App() {
  return (
    <RelayEnvironmentProvider environment={environment}>
      <div className="App">
        <Posts />
      </div>
    </RelayEnvironmentProvider>
  );
}

export default App;
