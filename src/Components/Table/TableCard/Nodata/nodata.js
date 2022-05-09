import React from "react";
import Button from "@mui/material/Button";
export default function Nodata() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div style={{ display: "flex", justifyContent: "center", padding: 5 }}>
        <img
          src="/assets/error_outline-24px.svg"
          style={{
            background:
              "transparent url('img/error_outline-24px.png') 0% 0% no-repeat padding-box",
            opacity: 1,
            width: 25,
            height: 25,
          }}
        ></img>
      </div>

      <div
        style={{
          textAlign: " center",
          font: " normal normal normal 18px/25px Ubuntu",
          letterSpacing: "0px",
          color: "#FFFFFF",
          opacity: 1,
        }}
      >
        No results found
      </div>
      <div
        style={{
          textAlign: " center",
          font: " normal normal normal 12px/20px Ubuntu",
          letterSpacing: "0px",
          color: "#C0C6CA",
          opacity: 1,
        }}
      >
        Try adjusting your search to find what you are looking for.
      </div>
      <Button>Clear Search</Button>
    </div>
  );
}
