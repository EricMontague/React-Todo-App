import { useState } from "react";

function useFilterState(initialFilter) {
  const [filter, setFilter] = useState(initialFilter);

  const changeFilter = newFilter => {
    setFilter(newFilter);
  };

  return [filter, changeFilter];
}

export default useFilterState;
