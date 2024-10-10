import React from "react";
import { colors } from "../../styles/colors";


function Send(props) {
  return (
    <path
      stroke={`#${colors.white}`}
      fill={`#${colors.blue}`}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M22.13 2.765L11.079 13.65M22.13 2.765l-7.034 19.792-4.02-8.907M22.132 2.765L2.034 9.692l9.044 3.958"
    ></path>

  );
}

export default Send;