import "./css/Picture.css";
import picture from "../images/me.jpeg";
import Image from "react-bootstrap/Image";

function Picture() {
  return (
    <div className="pictureDiv">
      <Image className="pictureImg" src={picture} roundedCircle />
    </div>
  );
}

export default Picture;
