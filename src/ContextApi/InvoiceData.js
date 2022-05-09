import React, { useState, createContext } from "react";
export const InvoiceDataContext = createContext();
export default function InvoiceDataContextProvider({ children }) {
  const [invoicedata, setinvoicedata] = useState([]);
  const [searchdata, setsearchdata] = useState([]);
  const [selecteddata, setselecteddata] = useState({});
  const [isdeleted, setisdeleted] = useState(false);
  const [isedited, setisedited] = useState(false);
  const [predictted, setpredicted] = useState(false);

  return (
    <InvoiceDataContext.Provider
      value={{
        invoicedata,
        setinvoicedata,
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
      }}
    >
      {children}
    </InvoiceDataContext.Provider>
  );
}
