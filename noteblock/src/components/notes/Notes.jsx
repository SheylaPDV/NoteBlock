import React from "react";

export default function Notes({ notes, title, content, _id }) {
  return (
    <li className="list-group-item d-flex justify-content-between align-items-start ">
      <div className="ms-2 me-auto">
        <div className="fw-bold">{title}</div>
        {content}
      </div>
      <div className="row">
        <button className="btn btn-info btn-sm mb-1">Edit</button>
        <button className="btn btn-outline-danger btn-sm">Delete</button>
      </div>
    </li>
  );
}
