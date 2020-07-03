function getStyle(key) {
  const styleProvider = {
    btnDark: "btn btn-dark",
    btnTransparent: "btn btn-transparent",
    btnPrimary: "btn btn-primary",
    labelRaised: "label-raised",
    complete: "complete",
    selected: "selected",
    inputError: "invalid"
  };

  return styleProvider[key];
}

export default getStyle;
