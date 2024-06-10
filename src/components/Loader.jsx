import React from "react";
import { Oval } from "react-loader-spinner";

const Loader = ({ w = 30, h = 30, color = "#fff", stroke = 6, stroke2 = 6, color2 = "rgba(255, 255, 255, .5)" }) => {
  return (
    <div>
      <Oval
        visible={true}
        height={w}
        width={h}
        color={color}
        ariaLabel="oval-loading"
        strokeWidth={stroke}
        strokeWidthSecondary={stroke2}
        secondaryColor={color2}
      />
    </div>
  );
};

export default Loader;
