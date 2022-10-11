import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Form from "../components/form/form";
import ListGroup from "../components/list/ListGroup";
import Notes from "../components/notes/Notes";
import { getLastedNotes } from "../components/service";

export default function Index() {
  const [notes, setNotes] = useState([]);
  const getNotes = async () => {
    const response = await fetch("http://localhost:3001/api/v1/notes");
    const result = await response.json();
    setNotes(result);
  };

  // traer datos

  useEffect(() => {
    getNotes();
  }, []);
  console.log(notes);

  return (
    <div className="content-app ">
      <div className="row ">
        <div className="col-sm-12 col-md-4">
          <Form />
        </div>
        {/* <p>{notes.result[0].title}</p> */}
        <div className="col-sm-12 col-md-8">
          {notes.result ? (
            <ListGroup>
              {notes.result.map((note, index) => (
                <Notes
                  key={index}
                  id={note.id}
                  title={note.title}
                  content={note.content}
                />
              ))}{" "}
            </ListGroup>
          ) : (
            <p>hola</p>
          )}
        </div>
      </div>
    </div>
  );
}
