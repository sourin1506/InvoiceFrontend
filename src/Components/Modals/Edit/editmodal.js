import React, { useContext, useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import "./editmodal.css";
import { InvoiceDataContext } from "../../../ContextApi/InvoiceData";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  background: "#2A3E4C 0% 0% no-repeat pediting-box",
  boxShadow: " 0px 8px 24px #00000029",
  width: "800px",
  height: "400px",

  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function EditModal({ open, setOpen }) {
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [invoiceamt, setinvoiceamt] = useState("");
  const { selecteddata, setselecteddata, setisedited } =
    useContext(InvoiceDataContext);

  const editdata = () => {
    const url = `http://localhost:8082/invoice?cust_number=${selecteddata.cust_number}&amt=${invoiceamt}`;
    fetch(url, {
      method: "PUT",
    })
      .then((resp) => resp.json())
      .then((data) => console.log(data));
    setisedited(true);
    handleClose();
  };

  return (
    <div>
      <Modal
        open={open}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div className="editmodalbox">
          <div className="editheader">
            <div className="editmodalheader">
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
                Edit Invoice
              </div>
              <img
                src="/assets/baseline-close-24px.png"
                style={{ width: "24px", height: "24px", cursor: "pointer" }}
                onClick={handleClose}
              ></img>
            </div>
          </div>
          <div className="editmodalcontent">
            <div className="editlabels">
              <div className="editlabeltext">Customer Number</div>
              <div className="editlabeltext">Invoice Amount</div>
              <div className="editlabeltext">Notes</div>
            </div>
            <div className="editforminput">
              <input
                defaultValue={selecteddata.cust_number}
                style={{ color: "white" }}
                className="editinputbox"
                readOnly
              ></input>
              <input
                value={invoiceamt}
                className="editinputbox"
                style={{ color: "white" }}
                onChange={(e) => setinvoiceamt(e.target.value)}
              ></input>
              <textarea
                className="editinputbox"
                style={{ height: "110px", color: "white" }}
              ></textarea>
            </div>
          </div>
          <div className="editmodalfooter">
            <div style={{ marginLeft: 20 }}>
              <Button style={{ fontWeight: "800" }}>Cancel</Button>
            </div>
            <div className="editfooterbutton">
              <Button variant="outlined"> Clear</Button>
              <Button variant="contained" onClick={editdata}>
                Edit
              </Button>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
}
