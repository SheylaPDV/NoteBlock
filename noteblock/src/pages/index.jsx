import { useEffect, useState } from "react";
import React from "react";

import { getLastedNotes } from "../components/service";
import ListGroup from "../components/list/ListGroup";
import Notes from "../components/notes/Notes";
import Form from "../components/form/form";

export const Index = () => {
  const [notes, setNotes] = useState([]);
  const getNotes = async () => {
    const response = await fetch("http://localhost:3001/api/v1/notes");
    const result = await response.json();
    setNotes(result);
  };

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
              ))}
            </ListGroup>
          ) : (
            <h3>There is nothing to show</h3>
          )}
        </div>
      </div>
    </div>
  );
};
