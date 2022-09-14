import React from "react";
import Form from "../components/form/Form";
import ListGroup from "../components/list/ListGroup";

export default function Index() {
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
