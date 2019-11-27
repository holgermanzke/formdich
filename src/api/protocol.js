export function getProtocols() {
  const protocolsJSON = localStorage.getItem("protocols") || "[]";
  const protocols = JSON.parse(protocolsJSON);
  return protocols;
}

export function setProtocols(protocols) {
  localStorage.setItem("protocols", JSON.stringify(protocols));
}

export function addProtocol(protocol) {
  const protocols = getProtocols();
  protocols.push(protocol);
  setProtocols(protocols);
}
