import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Form from "../components/form/Form";
import ListGroup from "../components/list/ListGroup";

export default function Index() {
  const [notas, setNotas] = useState([]);
  const getNotes = async () => {
    const response = await fetch("http://localhost:3001/api/v1/notes");
    const result = await response.json();
    console.log(result);
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
          <ListGroup />
        </div>
      </div>
    </div>
  );
}
