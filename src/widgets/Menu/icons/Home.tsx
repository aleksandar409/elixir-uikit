import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 512 512" width="24px" color="text" xmlns="http://www.w3.org/2000/svg" className="sc-bdvvaa hjJvDZ">
      <path d="M426.783 174.916V69.871H325.558v28.05l-69.559-52.909L0 239.736l61.795 81.243 23.421-17.814v163.823h147.007V356.195h47.554v110.792h147.007V303.161l23.421 17.815L512 239.734l-85.217-64.818zm-30.034 262.037h-86.938V326.161H202.189v110.792H115.25V280.32l140.751-107.06 140.748 107.057v156.636zm47.732-158.064l-188.48-143.364L67.517 278.891l-25.431-33.433 213.912-162.71 99.593 75.753V99.905h41.157v89.901l73.163 55.65-25.43 33.433z" />
    </Svg>
  );
};

export default Icon;
