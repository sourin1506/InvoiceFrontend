import React, { useContext } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import "./delete.css";
import { InvoiceDataContext } from "../../../ContextApi/InvoiceData";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  background: "#2A3E4C 0% 0% no-repeat pdeleteing-box",
  boxShadow: " 0px 8px 24px #00000029",
  width: "800px",
  height: "400px",

  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function DeleteModal({ open, setOpen }) {
  const { selecteddata, setselecteddata, setisdeleted } =
    useContext(InvoiceDataContext);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const deletedata = () => {
    const url = `http://localhost:8082/invoice/${selecteddata.cust_number}`;
    fetch(url, {
      method: "DELETE",
      headers: {
        "Content-type": "application/json",
      },
    });
    setisdeleted(true);
    handleClose();
  };

  return (
    <div>
      <Modal
        open={open}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div className="deletemodalbox">
          <div className="deleteheader">
            <div className="deletemodalheader">
              <div
                style={{
                  textAlign: "left",
                  font: " normal normal normal 28px/32px Ubuntu",
                  letterSpacing: "0px",
                  color: " #FFFFFF",
                  textTransform: "capitalize",
                  opacity: " 1",
                }}
              >
                Delete Record(s)?
              </div>
              <img
                src="/assets/baseline-close-24px.png"
                style={{ width: "24px", height: "24px", cursor: "pointer" }}
                onClick={handleClose}
              ></img>
            </div>
          </div>
          <div className="deletemodalcontent">
            <p className="deletepara">
              You'll lose your record(s) after this action. We can't recover
              them once you delete. Are you sure you want to{" "}
              <span style={{ color: "red" }}>permanently delete </span>them?
            </p>
          </div>
          <div className="deletemodalfooter">
            <div style={{ marginLeft: 20 }}>
              <Button style={{ fontWeight: "800" }}>Cancel</Button>
            </div>
            <div className="deletefooterbutton">
              <Button variant="outlined"> Clear</Button>
              <Button variant="contained" onClick={deletedata}>
                Delete
              </Button>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
}
