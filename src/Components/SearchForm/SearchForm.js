import React from "react";

const styles = {
  inputStyle: {
    minWidth: "300px",
  },
  buttonStyle: {
    float: "right",
  },
};

const SearchForm = () => {
  return (
    <form id="my-form" action="https://formspree.io/f/mrgolddz" method="POST">
      <label>Name:</label>
      <br />
      <input
        id="name"
        type="name"
        className="form-control"
        style={styles.inputStyle}
        name="name"
      />
      <br />
      <label>Email:</label>
      <br />
      <input
        id="email"
        type="email"
        className="form-control"
        style={styles.inputStyle}
        name="email"
      />
      <br />
      <label>Message:</label>
      <br />
      <textarea
        id="message"
        type="text"
        className="form-control"
        style={styles.inputStyle}
        name="message"
      ></textarea>
      <br />
      <button
        id="my-form-button"
        className=" btn btn-primary active"
        style={styles.buttonStyle}
      >
        Submit
      </button>
      <p id="my-form-status"></p>
    </form>
  );
};

export default SearchForm;
