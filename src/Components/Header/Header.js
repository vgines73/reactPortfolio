import React from "react";

const styles = {
  textStyle: {
    color: "whitesmoke",
    fontFamily: "Francois One, sans-serif",
  },
};

const Header = (props) => {
  return (
    <header className="page-header">
      <h1 className="text-center" style={styles.textStyle}>
        {props.children}
      </h1>
    </header>
  );
};

export default Header;
