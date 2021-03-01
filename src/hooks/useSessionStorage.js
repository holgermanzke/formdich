import React from "react";

export default function useSessionStorage(key, initialValue) {
  const [value, setValue] = React.useState(
    sessionStorage.getItem(key) || initialValue
  );

  React.useEffect(() => {
    sessionStorage.setItem(key, value);
  }, [key, value]);
  return [value, setValue];
}
