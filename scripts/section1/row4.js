function keysOfS1Row4() {
    const row4keys = [
      "CapsLk",
      "A",
      "S",
      "D",
      "F",
      "G",
      "H",
      "J",
      "K",
      "L",
      ";",
      "'",
      "Enter",
    ];
    const row4 = document.createElement("div");
    row4.setAttribute("id", "s1-row4");
    row4keys.forEach((item) => {
      const btn = document.createElement("button");
      btn.innerText = item;
      row4.append(btn);
    });
    return row4;
  }
  
  export default keysOfS1Row4;
  