import React, { useContext, useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import "./TableCard.css";
import { InvoiceDataContext } from "../../../ContextApi/InvoiceData";
import Nodata from "./Nodata/nodata";
import InfiniteScroll from "react-infinite-scroll-component";
import { CircularProgress, Checkbox } from "@mui/material";

export default function TableCard() {
  const {
    setinvoicedata,
    invoicedata,
    searchdata,
    setsearchdata,
    selecteddata,
    setselecteddata,
    isdeleted,
    setisdeleted,
    isedited,
    setisedited,
    predictted,
    setpredicted,
  } = useContext(InvoiceDataContext);

  const [start, setstart] = useState(0);
  const [end, setend] = useState(20);
  const [hasMore, setHasMore] = useState(true);
  const [checkedstatus, setcheckedstatus] = useState(false);
  const [forcerender, setforcerender] = useState(false);
  const [forcerender1, setforcerender1] = useState(false);
  useEffect(() => {
    getinvoicedata();
  }, [end]);

  useEffect(() => {
    console.log("deleting");
    if (isdeleted == true) {
      getinvoicedata();
      setisdeleted(false);
    }
  }, [isdeleted]);
  useEffect(() => {
    console.log("predicing");
    if (predictted == true) {
      getinvoicedata();
      setpredicted(false);
    }
  }, [predictted]);

  useEffect(() => {
    console.log("deleting");
    if (isedited == true) {
      getinvoicedata();
      setisedited(false);
    }
  }, [isedited]);

  const getinvoicedata = () => {
    //console.log(limit);
    const url = `http://localhost:8082/invoice/limit?start=${start}&end=${end}`;
    fetch(url)
      .then((resp) => resp.json())
      .then((data) => {
        // console.log(data);
        data.map(
          (value, i) => (
            (value.isChecked = checkedstatus),
            (value.PredictedDate = value.PredictedDate
              ? value.PredictedDate
              : ""),
            (value.bucket = value.bucket ? value.bucket : ""),
            (value.index = i)
          )
        );
        //console.log(data);
        setinvoicedata(invoicedata.concat(data));
        setsearchdata(invoicedata.concat(data));
      });
  };
  function fetchMoreData() {
    console.log("fetchMoreData");
    setstart(end);
    setend(end + 20);
    setHasMore(true);
  }

  useEffect(() => {
    let flag = 1;
    if (invoicedata.length != 0) {
      invoicedata.map((data, i) => {
        if (data.isChecked == false) {
          flag = 0;
        }
      });

      if (flag == 1) setcheckedstatus(true);
    }
  }, [forcerender]);

  return (
    <div className="TableOutline">
      <TableContainer>
        <InfiniteScroll
          dataLength={invoicedata.length}
          scrollableTarget="scrollableDiv"
          next={fetchMoreData}
          hasMore={true}
          loader={
            <div
              style={{
                display: "flex",

                justifyContent: "center",
                overflow: "hidden",
              }}
            >
              <CircularProgress color="secondary" />
            </div>
          }
        >
          <Table style={{ textAlign: "center" }}>
            <TableHead>
              <TableRow>
                <Checkbox
                  style={{
                    marginTop: "0.9vh",
                    marginRight: "-0.8vw",
                    color: "#97A1A9",
                  }}
                  checked={checkedstatus}
                  onClick={() => {
                    invoicedata.map(
                      (data, i) => (data.isChecked = !data.isChecked)
                    );
                    //console.log(invoicedata);
                    setcheckedstatus(!checkedstatus);
                  }}
                />
                <TableCell
                  style={{
                    borderBottom: "none",

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
                  Customer #
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
                  Invoice Amount #
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
                  Predicted Payment Date
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
                  Predicted Aging Bucket
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
                  Notes
                </TableCell>
              </TableRow>
            </TableHead>
          </Table>
          <div className="scrollbody" id="scrollableDiv">
            <Table style={{ tableLayout: "fixed" }}>
              {/* style={{ border: "1px solid red" }} */}
              <TableBody>
                {invoicedata.length == 0 ? (
                  <div
                    style={{
                      width: "300px",
                      height: "150px",
                      margin: "auto",
                      marginTop: "20vh",
                    }}
                  >
                    <Nodata />
                  </div>
                ) : (
                  invoicedata.map((data, index) => (
                    <TableRow
                      key={index}
                      style={
                        index % 2
                          ? {
                              background: "#2A5368 0% 0% no-repeat padding-box",
                            }
                          : {
                              background: "#283A46 0% 0% no-repeat padding-box",
                            }
                      }
                    >
                      <TableCell style={{ width: "20px", height: "20px" }}>
                        <Checkbox
                          style={{
                            padding: 0,
                            color: "#97A1A9",
                            marginLeft: "-0.05vw",
                          }}
                          checked={data.isChecked}
                          onClick={(e) => {
                            if (
                              invoicedata[index].cust_number == data.cust_number
                            ) {
                              data.isChecked = !data.isChecked;
                              //console.log(data.isChecked);
                              setcheckedstatus(false);
                              setforcerender(!forcerender);
                            }
                            setselecteddata(data);
                            //console.log(invoicedata[index], e.target.checked);
                          }}
                        />
                      </TableCell>

                      <TableCell
                        style={{
                          textAlign: "left",
                          height: "20px",
                          letterSpacing: " 0px",
                          color: "#FFFFFF",
                          opacity: "1",
                        }}
                      >
                        {data.name_customer}
                      </TableCell>
                      <TableCell
                        style={{
                          textAlign: "center",
                          letterSpacing: " 0px",
                          color: "#FFFFFF",
                          opacity: "1",
                        }}
                      >
                        {data.cust_number}
                      </TableCell>
                      <TableCell
                        style={{
                          textAlign: "left",
                          letterSpacing: " 0px",
                          color: "#FFFFFF",
                          opacity: "1",
                        }}
                      >
                        {data.invoice_id}
                      </TableCell>
                      <TableCell
                        style={{
                          textAlign: "left",
                          letterSpacing: " 0px",
                          color: "#FFFFFF",
                          opacity: "1",
                        }}
                      >
                        {data.total_open_amount}
                      </TableCell>
                      <TableCell
                        style={{
                          textAlign: "left",

                          padding: 0,
                          letterSpacing: " 0px",
                          color: "#FFFFFF",
                          opacity: "1",
                        }}
                      >
                        {data.due_in_date}
                      </TableCell>
                      <TableCell
                        style={{
                          textAlign: "center",
                          letterSpacing: " 0px",
                          color: "#FFFFFF",
                          opacity: "1",
                        }}
                      >
                        {data.PredictedDate ? data.PredictedDate : "--"}{" "}
                        {/* predicted date */}
                      </TableCell>
                      <TableCell
                        style={{
                          textAlign: "right",
                          letterSpacing: " 0px",
                          color: "#FFFFFF",
                          opacity: "1",
                        }}
                      >
                        {data.bucket ? data.bucket : "--"} {/* agging bucket */}
                      </TableCell>
                      <TableCell
                        style={{
                          textAlign: "right",
                          letterSpacing: " 0px",
                          color: "#FFFFFF",
                          opacity: "1",
                        }}
                      >
                        Nulla ad dolor....
                      </TableCell>
                    </TableRow>
                  ))
                )}
              </TableBody>
            </Table>
          </div>
        </InfiniteScroll>
      </TableContainer>
    </div>
  );
}
