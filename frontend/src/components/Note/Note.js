import React from "react";

export default function Note(props) {
  return (
    <div className="note">
      <h3>{props.title}</h3>
      <div className="description">
        <p>{props.body}</p>
      </div>
      <button className="btn edit">Edit</button>
      <button className="btn delete">Delete</button>
    </div>
  );
}
