import React from "react";
import { Link } from "react-router-dom";
import moment from "moment";
import numeral from "numeral";

export default ({ id, title, description, createdAt }) => (
    <div>
      <div className="list-item__post">
        <h3 className="list-item__title">{title}</h3>
        <span className="list-item__sub-title">{moment(createdAt).format("MMMM Do, YYYY")}</span>
      </div>
      <span className="list-item__description">{description}</span>
    </div>
);