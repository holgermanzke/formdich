import React from "react";
import "./App.css";
import ProtocolForm from "./components/ProtocolForm";
import Protocols from "./components/Protocols";

function App() {
  const [showForm, setShowForm] = React.useState(false);
  return (
    <>
      <button onClick={() => setShowForm(!showForm)}>Toggle View</button>
      {showForm && <ProtocolForm />}
      {!showForm && <Protocols />}
    </>
  );
}

export default App;
