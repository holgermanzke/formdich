import React from "react";
import Protocol from "./Protocol";
import { getProtocols } from "../api/protocol";

function Protocols() {
  const protocols = getProtocols();

  return (
    <div>
      {protocols.map(protocol => (
        <Protocol key={`${protocol.date}.${protocol.author}`} {...protocol} />
      ))}
    </div>
  );
}

export default Protocols;
