import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Form from "../components/form/Form";
import ListGroup from "../components/list/ListGroup";
import Notes from "../components/notes/Notes";

export default function Index() {
  const [notes, setNotes] = useState([]);
  const getNotes = async () => {
    const response = await fetch(process.env.MONGO_DB_URI);
    const result = await response.json();
    setNotes(result);
  };

  // traer datos

  useEffect(() => {
    getNotes();
  }, []);
  return (
    <div className="content-app ">
      <div className="row ">
        <div className="col-sm-12 col-md-4">
          <Form />
        </div>
        <div className="col-sm-12 col-md-8">
          <ListGroup>
            {/* {notes.map((note, index) => ( */}
            <Notes
            // key={index}
            // id={note._id}
            // title={note.title}
            // content={note.content}
            />
            {/* ))} */}
          </ListGroup>
        </div>
      </div>
    </div>
  );
}
