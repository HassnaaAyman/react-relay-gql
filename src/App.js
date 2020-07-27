import React from "react";
import "./App.css";
import Posts from "./components/Posts";
import { RelayEnvironmentProvider } from "relay-hooks";
import environment from "./environment";
import AddPost from "./components/AddPost";

 function App() {
  return (
    <RelayEnvironmentProvider environment={environment}>
      <div className="App">
        <AddPost/>
        <Posts />
      </div>
    </RelayEnvironmentProvider>
  );
}

export default App;
