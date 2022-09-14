import React from "react";
import ListGroup from "../components/list/ListGroup";

export default function Index() {
  return (
    <div className="content-app t-50">
      <div className="row ">
        <div className="col-sm-12 col-md-4">form</div>
        <div className="col-sm-12 col-md-8">
          <ListGroup />
        </div>
      </div>
    </div>
  );
}
