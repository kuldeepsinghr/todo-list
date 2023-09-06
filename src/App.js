import React from "react";
import Header from "./components/Header";
import Input from "./components/Input";
// import List from "./components/List";

function App() {
  return (
    <>
      <Header/>
    <div className="m-auto max-w-5xl px-5">
      <Input/>
      {/* <List/> */}
    </div>
    </>
  );
}

export default App;
