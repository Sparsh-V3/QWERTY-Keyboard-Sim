import restKeys from "./restKeys.js";
import keysOfS3Row1 from "./row1.js";
import keysOfS3Row2 from "./row2.js";

function layoutOfSection3() {
  const s3Layout = document.querySelector(".s3-layout");
  s3Layout.appendChild(keysOfS3Row1())
  s3Layout.appendChild(keysOfS3Row2())
  s3Layout.appendChild(restKeys())
}

export default layoutOfSection3;
