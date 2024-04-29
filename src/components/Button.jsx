import PropTypes from "prop-types";

const Button = (props) => {
  return (
    <button
      className={` px-6 py-1 rounded-lg font-medium ${
        props.name === "Watch"
          ? "bg-primary text-black border-primary hover:bg-white"
          : " border-2 text-white hover:bg-primary hover:text-black hover:border-primary"
      }`}
    >
      {props.name}
    </button>
  );
};

Button.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Button;
