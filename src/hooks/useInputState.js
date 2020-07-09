import { useState } from "react";

function useInputState(initialValue) {
  const [value, setInputState] = useState(() => {
    return initialValue.trim();
  });

  const handleChange = event => {
    setInputState(event.target.value);
  };

  const handleBlur = event => {
    if (event.target.value !== "") {
      event.target.nextElementSibling.classList.add("label-raised");
    } else {
      event.target.nextElementSibling.classList.remove("label-raised");
    }
    setInputState(event.target.value);
  };

  const clear = () => {
    setInputState("");
  };
  return [value, handleChange, handleBlur, clear];
}

export default useInputState;
