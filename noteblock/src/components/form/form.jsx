import React, { useState } from "react";

export default function Form() {
  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  const handleChange = (e) => {
    let newNote = {
      [e.target.name]: e.target.value,
      [e.target.name]: e.target.value,
    };
    setNote({ ...note, ...newNote });
  };

  const saveNote = async () => {
    await fetch("http://localhost:3001/api/v1/notes", {
      method: "POST",
      mode: "cors",
      body: JSON.stringify(note),
      headers: {
        "Content-Type": "application/json",
      },
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    saveNote();
  };
  return (
    <div className="card">
      <div className="card-header">Add note</div>
      <div className="card-body">
        <form action="" onSubmit={onSubmit}>
          <div className="form-group mb-3">
            <input
              onChange={handleChange}
              name="title"
              type="text"
              placeholder="Title"
              className="form-control"
            />
          </div>
          <div className="form-group mb-3">
            <textarea
              onChange={handleChange}
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
