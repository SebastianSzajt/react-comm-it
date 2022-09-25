import image from "./Pictures/messi.jpg"
import React from "react"


function Info() {
  return (
    <body style={{ backgroundImage: `url(${image})`,backgroundRepeat:"no-repeat", height: "88rem"  }}>
        <div>hi</div>
    </body>
  );
}

export default Info;