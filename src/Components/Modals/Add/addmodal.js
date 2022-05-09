import React, { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import "./addmodal.css";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  background: "#2A3E4C 0% 0% no-repeat padding-box",
  boxShadow: " 0px 8px 24px #00000029",
  width: "800px",
  height: "400px",

  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function AddModal({ open, setOpen }) {
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [invoiceadd, setinvoiceadd] = useState({
    business_code: "",
    cust_number: "",
    name_customer: "",
    clear_date: "",
    business_year: "",
    doc_id: "",
    posting_date: "",
    document_create_date: "",
    due_in_date: "",
    invoice_currency: "",
    document_type: "",
    posting_id: "",
    area_business: "",
    total_open_amount: "",
    baseline_create_date: "",
    cust_payment_terms: "",
    invoice_id: "",
    isOpen: "",
  });

  const cleardata = () => {
    setinvoiceadd({
      business_code: "",
      cust_number: "",
      name_customer: "",
      clear_date: "",
      business_year: "",
      doc_id: "",
      posting_date: "",
      document_create_date: "",
      due_in_date: "",
      invoice_currency: "",
      document_type: "",
      posting_id: 1,
      area_business: "",
      total_open_amount: "",
      baseline_create_date: "",
      cust_payment_terms: "",
      invoice_id: "",
      isOpen: "",
    });
  };
  const sendinvoicedata = () => {
    if (
      invoiceadd.name_customer != "" &&
      invoiceadd.cust_number != "" &&
      (invoiceadd.invoice_id != "") & (invoiceadd.total_open_amount != "") &&
      invoiceadd.due_in_date != ""
    ) {
      console.log(invoiceadd);
      handleClose();
      const url = "http://localhost:8082/invoice/";
      fetch(url, {
        method: "POST",
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
        body: JSON.stringify(invoiceadd),
      })
        .then((resp) => resp.json())
        .then((data) => console.log("data sent", data))
        .catch((err) => console.log(err));
      cleardata();
    } else {
      alert("Fill the form");
    }
  };
  return (
    <div>
      <Modal
        open={open}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div className="addmodalbox">
          <div className="header">
            <div className="addmodalheader">
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
                Add Invoice
              </div>
              <img
                src="/assets/baseline-close-24px.png"
                style={{ width: "24px", height: "24px", cursor: "pointer" }}
                onClick={handleClose}
              ></img>
            </div>
          </div>
          <div className="addmodalcontent">
            <div className="content1">
              <div className="formlabels1">
                <div className="labeltext">
                  Customer Name{" "}
                  <a style={{ color: "red", marginLeft: "5px" }}>*</a>
                </div>
                <div className="labeltext">
                  Customer No.{" "}
                  <a style={{ color: "red", marginLeft: "5px" }}>*</a>
                </div>
                <div className="labeltext">
                  Invoice No.{" "}
                  <a style={{ color: "red", marginLeft: "5px" }}>*</a>
                </div>
                <div className="labeltext">
                  Invoice Amount{" "}
                  <a style={{ color: "red", marginLeft: "5px" }}>*</a>
                </div>
              </div>
              <div className="forminput1">
                <input
                  value={invoiceadd.name_customer}
                  name="name_customer"
                  className="forminput"
                  onChange={(e) =>
                    setinvoiceadd({
                      ...invoiceadd,
                      [e.target.name]: e.target.value,
                    })
                  }
                  style={{ color: "white" }}
                ></input>
                <input
                  value={invoiceadd.cust_number}
                  name="cust_number"
                  className="forminput"
                  onChange={(e) =>
                    setinvoiceadd({
                      ...invoiceadd,
                      [e.target.name]: e.target.value,
                    })
                  }
                  style={{ color: "white" }}
                ></input>
                <input
                  value={invoiceadd.invoice_id}
                  name="invoice_id"
                  className="forminput"
                  onChange={(e) =>
                    setinvoiceadd({
                      ...invoiceadd,
                      [e.target.name]: e.target.value,
                    })
                  }
                  style={{ color: "white" }}
                ></input>
                <input
                  value={invoiceadd.total_open_amount}
                  name="total_open_amount"
                  className="forminput"
                  onChange={(e) =>
                    setinvoiceadd({
                      ...invoiceadd,
                      [e.target.name]: e.target.value,
                    })
                  }
                  style={{ color: "white" }}
                ></input>
              </div>
            </div>
            <div className="content2">
              <div className="formlabels2">
                <div className="labeltext">
                  Due Date<a style={{ color: "red", marginLeft: "5px" }}>*</a>
                </div>
                <div className="labeltext">Notes </div>
              </div>
              <div className="forminput2">
                <input
                  className="forminput"
                  type="date"
                  value={invoiceadd.due_in_date}
                  name="due_in_date"
                  onChange={(e) =>
                    setinvoiceadd({
                      ...invoiceadd,
                      [e.target.name]: e.target.value,
                    })
                  }
                  style={{ color: "white" }}
                ></input>
                <textarea
                  className="editinputbox"
                  style={{ height: "140px", color: "white" }}
                ></textarea>
              </div>
            </div>
          </div>
          <div className="addmodalfooter">
            <div style={{ marginLeft: 20 }}>
              <Button style={{ fontWeight: "800" }}>Cancel</Button>
            </div>
            <div className="footerbutton">
              <Button variant="outlined" onClick={cleardata}>
                {" "}
                Clear
              </Button>
              <Button
                variant="contained"
                onClick={() => {
                  sendinvoicedata();
                }}
              >
                Add
              </Button>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
}
