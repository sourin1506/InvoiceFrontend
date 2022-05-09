import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import "./correspondence.css";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { InvoiceDataContext } from "../../../ContextApi/InvoiceData";

export default function CorrespondenceModal({ open, setOpen }) {
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const { selecteddata } = React.useContext(InvoiceDataContext);
  return (
    <div>
      <Modal
        open={open}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div className="Corresmodalbox">
          <div className="header">
            <div className="Corresmodalheader">
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
                View Correspondence
              </div>
              <img
                src="/assets/baseline-close-24px.png"
                style={{ width: "24px", height: "24px", cursor: "pointer" }}
                onClick={handleClose}
              ></img>
            </div>
          </div>
          <div className="Corresmodalcontent">
            <div className="corrs_content1">
              <div
                style={{
                  textAlign: "left",
                  font: "normal normal normal 15px/28px Ubuntu",
                  letterSpacing: "0.36px",
                  color: "#FFFFFF",
                }}
              >
                Subject: Invoice Details - Account Name{" "}
              </div>
              <div
                style={{
                  textAlign: "left",
                  font: "normal normal normal 15px/28px Ubuntu",

                  color: " #C0C6CA",
                  marginBottom: -15,
                }}
              >
                Dear Sir/Madam, Greetings!
              </div>
              <div style={{}}>
                <p
                  style={{
                    textAlign: "left",
                    font: "normal normal normal 15px/28px Ubuntu",
                    lineHeight: "1.2",
                    color: " #C0C6CA",
                  }}
                >
                  This is to remind you that there are one or more open invoices
                  on your account. lease provide at your earliest convenience an
                  update on the payment details or clarify the reason for the
                  delay. If you have any specific issue with the invoice(s),
                  please let us know so that we can address it to the correct
                  Department.{" "}
                </p>
              </div>
              <div
                style={{
                  textAlign: "left",
                  font: "normal normal normal 15px/28px Ubuntu",
                  lineHeight: "1.2",
                  color: " #C0C6CA",
                  marginTop: -15,
                }}
              >
                Please find the details of the invoices below:
              </div>
            </div>

            <div className="corrs_content2">
              <Table style={{ textAlign: "center" }}>
                <TableHead>
                  <TableRow>
                    <TableCell
                      style={{
                        borderBottom: "none",
                        textAlign: "center",

                        letterSpacing: " 0px",
                        color: "#97A1A9",
                        opacity: "1",
                      }}
                    >
                      Customer Name
                    </TableCell>

                    <TableCell
                      align="right"
                      style={{
                        borderBottom: "none",
                        textAlign: "center",

                        letterSpacing: " 0px",
                        color: "#97A1A9",
                        opacity: "1",
                      }}
                    >
                      Invoice #
                    </TableCell>
                    <TableCell
                      align="right"
                      style={{
                        borderBottom: "none",
                        textAlign: "center",

                        letterSpacing: " 0px",
                        color: "#97A1A9",
                        opacity: "1",
                      }}
                    >
                      Invoice Date
                    </TableCell>
                    <TableCell
                      align="right"
                      style={{
                        borderBottom: "none",
                        textAlign: "center",

                        letterSpacing: " 0px",
                        color: "#97A1A9",
                        opacity: "1",
                      }}
                    >
                      Due Date
                    </TableCell>
                    <TableCell
                      align="right"
                      style={{
                        borderBottom: "none",
                        textAlign: "center",

                        letterSpacing: " 0px",
                        color: "#97A1A9",
                        opacity: "1",
                      }}
                    >
                      Currency
                    </TableCell>
                    <TableCell
                      align="right"
                      style={{
                        borderBottom: "none",
                        textAlign: "center",

                        letterSpacing: " 0px",
                        color: "#97A1A9",
                        opacity: "1",
                      }}
                    >
                      Open Amount
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow>
                    <TableCell
                      style={{
                        borderBottom: "none",
                        textAlign: "center",

                        letterSpacing: " 0px",
                        color: "#FFFFFF",
                        opacity: "1",
                      }}
                    >
                      {selecteddata.name_customer}
                    </TableCell>
                    <TableCell
                      style={{
                        borderBottom: "none",
                        textAlign: "center",

                        letterSpacing: " 0px",
                        color: "#FFFFFF",
                        opacity: "1",
                      }}
                    >
                      {selecteddata.invoice_id}
                    </TableCell>
                    <TableCell
                      style={{
                        borderBottom: "none",
                        textAlign: "center",

                        letterSpacing: " 0px",
                        color: "#FFFFFF",
                        opacity: "1",
                      }}
                    >
                      {selecteddata.document_create_date}
                    </TableCell>
                    <TableCell
                      style={{
                        borderBottom: "none",
                        textAlign: "center",

                        letterSpacing: " 0px",
                        color: "#FFFFFF",
                        opacity: "1",
                      }}
                    >
                      {selecteddata.due_in_date}
                    </TableCell>
                    <TableCell
                      style={{
                        borderBottom: "none",
                        textAlign: "center",

                        letterSpacing: " 0px",
                        color: "#FFFFFF",
                        opacity: "1",
                      }}
                    >
                      {selecteddata.invoice_currency}
                    </TableCell>
                    <TableCell
                      style={{
                        borderBottom: "none",
                        textAlign: "center",

                        letterSpacing: " 0px",
                        color: "#FFFFFF",
                        opacity: "1",
                      }}
                    >
                      {selecteddata.total_open_amount}
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>
            <div className="corrs_content3">
              <div
                style={{
                  textAlign: "left",
                  font: "normal normal normal 15px/28px Ubuntu",
                  lineHeight: "1.2",
                  color: " #C0C6CA",
                }}
              >
                Total Amount to be Paid: {selecteddata.total_open_amount}{" "}
              </div>
              <div
                style={{
                  textAlign: "left",
                  font: "normal normal normal 15px/28px Ubuntu",
                  lineHeight: "1.2",
                  color: " #C0C6CA",
                }}
              >
                In case you have already made a payment for the above items,
                please send us the details to ensure the payment is posted. Let
                us know if we can be of any further assistance. Looking forward
                to hearing from you. Kind Regards // add details
              </div>
            </div>
          </div>
          <div className="Corresmodalfooter">
            <div style={{ marginLeft: 20 }}></div>
            <div className="footerbutton">
              <Button variant="outlined"> Cancel</Button>
              <Button variant="contained">Download</Button>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
}
