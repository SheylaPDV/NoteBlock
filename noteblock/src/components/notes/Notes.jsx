import React from "react";

export default function Notes() {
  return (
    <li className="list-group-item d-flex justify-content-between align-items-start ">
      <div className="ms-2 me-auto">
        <div className="fw-bold">Title</div>
        Cras justo odio
      </div>
      <div className="row">
        <button className="btn btn-info btn-sm mb-1">Edit</button>
        <button className="btn btn-outline-danger btn-sm">Delete</button>
      </div>
    </li>
  );
}
