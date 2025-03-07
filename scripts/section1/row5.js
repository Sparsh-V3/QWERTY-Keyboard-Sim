function keysOfS1Row5() {
    const row5keys = [
      "Shift",
      "Z",
      "X",
      "C",
      "V",
      "B",
      "N",
      "M",
      ",",
      ".",
      "/",
      "Shift",
    ];
    const row5 = document.createElement("div");
    row5.setAttribute("id", "s1-row5");
    row5keys.forEach((item) => {
      const btn = document.createElement("button");
      btn.innerText = item;
      row5.append(btn);
    });
    return row5;
  }
  
  export default keysOfS1Row5;
  