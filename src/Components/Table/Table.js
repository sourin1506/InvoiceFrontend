import React from "react";
import "./Table.css";
import TableCard from "./TableCard/TableCard";
import TableHeader from "./TableHeader/TableHeader";

export default function Table() {
  return (
    <div className="Container">
      <TableHeader />
      <TableCard />
    </div>
  );
}
