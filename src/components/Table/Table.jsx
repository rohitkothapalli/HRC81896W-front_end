import React from "react";
import { getData } from "../../services/data";
import { DataGrid } from '@mui/x-data-grid';
import { useEffect } from "react";
import { useState } from "react";
import './table.css';
import { style } from "@mui/system";

const columns = [
  {field: 'sl_no',headername: 'Sl No',width: 70 , align: 'center', headerAlign:'center'},
  {field: 'business_code',headerName: 'Business Code',width: 165 , height:100 , align: 'center', headerAlign:'center'},
  {field: 'cust_number',headerName: 'Customer Number',width: 165, height:100 , align: 'center', headerAlign:'center'},
  {field: 'clear_date',headerName: 'Clear Date',width: 165, height:100 , align: 'center', headerAlign:'center'},
  {field: 'buisness_year',headerName: 'Buisness Year',width: 165, height:100 , align: 'center', headerAlign:'center'},
  {field: 'doc_id',headerName: 'Document Id',width: 165, height:100 , align: 'center', headerAlign:'center'},
  {field: 'posting_date',headerName: 'Posting Date',width: 165, height:100 , align: 'center', headerAlign:'center'},
  {field: 'document_create_date',headerName: 'Document Create Date',width: 165, height:100 , align: 'center', headerAlign:'center'},
  {field: 'due_in_date',headerName: 'Due Date',width: 165 , height:100, align: 'center', headerAlign:'center'},
  {field: 'invoice_currency',headerName: 'Invoice Currency',width: 165, height:100 , align: 'center', headerAlign:'center'},
  {field: 'document_type',headerName: 'Document Type',width: 165, height:100 , align: 'center', headerAlign:'center'},
  {field: 'posting_id',headerName: 'Posting Id',width: 165, height:100 , align: 'center', headerAlign:'center'},
  {field: 'total_open_amount',headerName: 'Total Open Amount',width: 165, height:100 , align: 'center', headerAlign:'center'},
  {field: 'baseline_create_date',headerName: 'Baseline Create Date',width: 165, height:100 , align: 'center', headerAlign:'center'},
  {field: 'cust_payment_terms',headerName: 'Customer Payment Terms',width: 165, height:100 , align: 'center', headerAlign:'center'},
  {field: 'invoice_id',headerName: 'Invoice id',width: 165, height:100 , align: 'center', headerAlign:'center' }
];

const Table = (props) => {
  const [data,setData] = useState([])
  const [selected ,setSelected] = useState([]);
  const [pageSize,setPageSize] = React.useState(10);
  
  useEffect(async () => {
    setData(await getData())
  },[]);

  return (
    <div style={{ height: 470, width: '100%' , backgroundColor: "#11202A" , color: "white"}}>
      <DataGrid
        getRowId={(cursors)=> cursors.sl_no}
        rows={data}
        columns={columns}
        pageSize={pageSize}
        onPageSizeChange = {(newPageSize) => setPageSize(newPageSize)}
        rowsPerPageOptions={[10,20,100]}
        pagination
        checkboxSelection
        onStateChange={(e) => setSelected(e.setSelected)}
        density='compact'
        disableColumnMenu={true}
        sx={{color:'white'}}
      />
    </div>
  );
}

export default Table;
