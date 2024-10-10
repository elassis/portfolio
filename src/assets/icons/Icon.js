import React from "react";
import Send from "./Send";
import Menu from "./Menu";
import List from "./List";
import Github from "./Github";
import PropTypes from "prop-types";
import ArrowDown from "./ArrowDown";
import HandClick from "./handClick";
import TrendingUp from "./TrendingUp";
import ExternalLink from "./ExternalLink";
import Email from "./Email";
import Phone from "./Phone";
import Facebook from "./Facebook";
import Instagram from "./Instagram";
import Linkedin from "./Linkedin";
import { colors } from "../../styles/colors";

const iconComponents = {
  list: <List />,
  send: <Send />,
  menu: <Menu />,
  github: <Github />,
  arrowDown: <ArrowDown />,
  handClick: <HandClick />,
  trendingUp: <TrendingUp />,
  externalLink: <ExternalLink />,
  phone: <Phone />,
  email: <Email />,
  linkedin: <Linkedin />,
  instagram: <Instagram />,
  facebook: <Facebook />,


};

const Icon = ({
  name,
  callback = null,
  width = "25px",
  height = "25px",
  color = colors.blue,
  viewBox = "0 0 21 28"
}) => {

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill={`#${color}`}
      stroke={`#${color}`}
      viewBox={viewBox}
      style={{ margin: 'auto 0' }}
      role="img"
      onClick={callback}
    >
      {iconComponents[name]}
    </svg>
  );
};

Icon.propTypes = {
  name: PropTypes.string.isRequired,
  width: PropTypes.string,
  height: PropTypes.string,
  color: PropTypes.string,
  viewBox: PropTypes.string,
  callback: PropTypes.func,
};

export default Icon;
