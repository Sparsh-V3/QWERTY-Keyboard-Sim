import keysOfS2Row from "./row.js";

function layoutOfSection2() {
  const s2Layout = document.querySelector(".s2-layout");
  s2Layout.appendChild(keysOfS2Row());
}

export default layoutOfSection2;
