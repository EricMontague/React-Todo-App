function getStyle(key) {
  const styleProvider = {
    btnDark: "btn btn-dark",
    filterBtn: "btn btn-transparent",
    addBtn: "btn btn-primary",
    cancelBtn: "btn btn-light cancel-btn",
    labelRaised: "label-raised",
    complete: "complete",
    selected: "selected",
    inputError: "invalid"
  };

  return styleProvider[key];
}

export default getStyle;
