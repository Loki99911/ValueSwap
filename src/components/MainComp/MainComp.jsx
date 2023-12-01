import { MainWrapper } from "./MainComp.styled";
import PropTypes from "prop-types";

export const MainComp = ({ children }) => {
  return <MainWrapper>{children}</MainWrapper>;
};

MainComp.propTypes = {
  children: PropTypes.node,
};
