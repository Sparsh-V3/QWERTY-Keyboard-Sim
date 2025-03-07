import keysOfS1Row1 from "./row1.js";
import keysOfS1Row2 from "./row2.js";
import keysOfS1Row3 from "./row3.js";
import keysOfS1Row4 from "./row4.js";
import keysOfS1Row5 from "./row5.js";


function layoutOfSection1() {
  const s1Layout = document.querySelector(".s1-layout");
  s1Layout.appendChild(keysOfS1Row1());
  s1Layout.appendChild(keysOfS1Row2());
  s1Layout.appendChild(keysOfS1Row3());
  s1Layout.appendChild(keysOfS1Row4());
  s1Layout.appendChild(keysOfS1Row5());
}

export default layoutOfSection1;
