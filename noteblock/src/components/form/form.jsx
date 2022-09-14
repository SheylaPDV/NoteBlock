import React from "react";

export default function Form() {
  return (
    <div className="card">
      <div className="card-header">Add note</div>
      <div className="card-body">
        <form action="">
          <div className="form-group">
            <input
              name="title"
              type="text"
              placeholder="Title"
              className="form-control"
            />
          </div>
          <div className="form-group">
            <textarea
              name="content"
              placeholder="Task content"
              className="form-control"
              id=""
              cols="30"
              rows="10"
            ></textarea>
          </div>
          <button
            type="submit"
            className="btn btn-outline-success btn-sm btn-block"
          >
            Save
          </button>
        </form>
      </div>
    </div>
  );
}
