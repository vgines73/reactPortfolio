import React from "react";

const styles = {
  cardStyles: {
    width: "17rem",
    display: "flex",
    justifyContent: "space-around",
    marginBottom: "10px",
  },
  buttonStyles: {
    display: "flex",
    justifyContent: "space-between",
    float: "right",
    marginRight: "-10px",
    width: "125px",
  },
};

const Card = (props) => {
  return (
    <div className="card" style={styles.cardStyles}>
      <img src={props.image} className="card-img-top" alt={props.name} />
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        <p className="card-text">{props.text}</p>
        <div style={styles.buttonStyles}>
          <a href={props.repo} className="btn btn-primary">
            Repo
          </a>
          <a href={props.link} className="btn btn-secondary">
            Link
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
