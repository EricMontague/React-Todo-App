import { useState, useEffect } from "react";

// state in this case is an array of todos
function useLocalStorageState(key, defaultValue) {
  const [state, setState] = useState(() => {
    const value = JSON.parse(window.localStorage.getItem(key));
    return value === null ? defaultValue : value;
  });

  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(state));
  }, [key, state]);
  return [state, setState];
}

export default useLocalStorageState;
