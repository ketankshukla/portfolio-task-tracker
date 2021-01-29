import React from "react";
import PropTypes from "prop-types";
import Button from "./Button";

const Header = ({ title }) => {
  const onClick = () => {
    console.log("Click");
  };
  return (
    <header className="header">
      <h1>{title}</h1>
      <Button onClick={onClick} color="green" text="Add" />
    </header>
  );
};

//this is how you declare default props so if the user doesn't
//pass in anything, then this prop is used
Header.defaultProps = {
  title: "Task Tracker",
};

//this is how you give types to props - also can tell if required
Header.propTypes = {
  title: PropTypes.string.isRequired,
};

//you can use this for inline styles for example ...
//<h1 style={headingStyle}>{title}</h1>
// const headingStyle = {
//   color: 'red',
//   backgroundColor: 'black'
// }

export default Header;
