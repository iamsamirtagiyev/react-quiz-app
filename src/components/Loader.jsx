import React from "react";
import { Oval } from "react-loader-spinner";

const Loader = () => {
  return (
    <div>
      <Oval
        visible={true}
        height="30"
        width="30"
        color="#fff"
        ariaLabel="oval-loading"
        strokeWidth="6"
        strokeWidthSecondary="6"
        secondaryColor="rgba(255, 255, 255, .5)"
      />
    </div>
  );
};

export default Loader;
