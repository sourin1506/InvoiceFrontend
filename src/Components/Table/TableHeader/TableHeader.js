import React, { useContext, useEffect, useState } from "react";
import "./Tableheader.css";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
import RemoveIcon from "@mui/icons-material/Remove";
import TextField from "@mui/material/TextField";
import { InvoiceDataContext } from "../../../ContextApi/InvoiceData";
import AddModal from "../../Modals/Add/addmodal";
import EditModal from "../../Modals/Edit/editmodal";
import DeleteModal from "../../Modals/Delete/delete";
import CorrespondenceModal from "../../Modals/correspondence/correspondence";
export default function TableHeader() {
  const {
    invoicedata,
    setinvoicedata,
    searchdata,
    selecteddata,
    setpredicted,
  } = useContext(InvoiceDataContext);
  const [addopen, setaddOpen] = useState(false);
  const [editopen, seteditOpen] = useState(false);
  const [deleteopen, setdeleteOpen] = useState(false);
  const [corropen, setcorrOpen] = useState(false);
  const searchinvoice = (e) => {
    const regex = new RegExp(`${e.target.value}`, "gi");
    // console.log(searchdata[0].invoice_id);
    // console.log(
    //   searchdata
    //     .filter((data) => data.business_code.match(regex))
    //     .map((data) => ({ ...data }))
    // );
    setinvoicedata(
      searchdata.filter((data) => data.name_customer.match(regex))
    );
  };
  const predict = () => {
    //console.log(selecteddata);

    const url = `http://127.0.0.1:5000/predict?number=${selecteddata.name_customer}&amt=${selecteddata.total_open_amount}`;
    fetch(url)
      .then((resp) => resp.json())
      .then((data) => {
        console.log(data);
        for (var propName in data.clear_date) {
          var propValue = data[propName];
          // console.log(propName);
          //console.log(data.clear_date[propName]);
          //console.log(data.AgingBucket[propName]);
          invoicedata[selecteddata.index].PredictedDate =
            data.clear_date[propName];
          invoicedata[selecteddata.index].bucket = data.AgingBucket[propName];
          //console.log(invoicedata[selecteddata.index]);
          // do something with each element here
        }
        setpredicted(true);
      });
  };
  return (
    <div className="TableHeader">
      <div className="leftbuttons">
        {/* <button
          style={{
            width: "80px",
            height: "33px",
            background: "#14AFF1 0% 0% no-repeat padding-box",
            borderRadius: "10px",
            opacity: " 1",
            color: "white",
          }}
        >
          Predict
        </button> */}
        <Button
          variant="contained"
          style={{
            background: "#14AFF1 0% 0% no-repeat padding-box",
            borderRadius: "10px",
            opacity: " 1",
          }}
          onClick={predict}
        >
          Predit
        </Button>

        <Button
          variant="outlined"
          style={{
            border: "1px solid #14AFF1",
            borderRadius: "10px",
            opacity: " 1",
            color: "white ",
          }}
          onClick={() => setcorrOpen(true)}
        >
          View Correspondence
        </Button>
        <CorrespondenceModal open={corropen} setOpen={setcorrOpen} />
      </div>
      <div className="rightbuttons">
        <Button
          variant="outlined"
          startIcon={<AddIcon />}
          style={{
            width: "80px",
            border: "1px solid #14AFF1",
            borderRadius: "10px",
            opacity: " 1",
            color: "white ",
          }}
          onClick={() => setaddOpen(true)}
        >
          Add
        </Button>
        <AddModal open={addopen} setOpen={setaddOpen} />
        <Button
          variant="outlined"
          startIcon={<EditIcon />}
          style={{
            width: "80px",
            border: "1px solid #14AFF1",
            borderRadius: "10px",
            opacity: " 1",
            color: "white ",
          }}
          onClick={() => seteditOpen(true)}
        >
          Edit
        </Button>
        <EditModal open={editopen} setOpen={seteditOpen} />
        <Button
          variant="outlined"
          startIcon={<RemoveIcon />}
          style={{
            width: "90px",
            border: "1px solid #14AFF1",
            borderRadius: "10px",
            opacity: " 1",
            color: "white ",
          }}
          onClick={() => setdeleteOpen(true)}
        >
          Delete
        </Button>
        <DeleteModal open={deleteopen} setOpen={setdeleteOpen} />
        <input
          className="searchwrap"
          placeholder="Search by Invoice Number"
          onChange={(e) => searchinvoice(e)}
        />
      </div>
    </div>
  );
}
