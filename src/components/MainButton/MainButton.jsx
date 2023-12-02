import ButtonStyled from "./MainButton.styled";
import PropTypes from "prop-types";

function MainButton({ children, ...props }) {
  return (
    <ButtonStyled {...props}>
      {children}
    </ButtonStyled>
  );
}


export default MainButton;

MainButton.propTypes = {
  children: PropTypes.node,
};