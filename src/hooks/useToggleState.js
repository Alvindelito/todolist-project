import { useState } from "react";

export default (initialVal) => {
  const [state, toggleState] = useState(initialVal);

  const toggle = () => {
    toggleState(!state);
  };
  return [state, toggle];
};
