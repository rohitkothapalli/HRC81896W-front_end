import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import {useState} from "react";
import {useEffect} from "react";
import { getData } from './services/data';

export default function MyGrid1() {
    const [data,setData] = useState([]);
    const [columns,setColumns] = useState([{field: "sl_no", label: "Sl no"},{ field: "business_code", label: "Business Code"},{field: "cust_number",label: "Customer Number"},{field: "clear_date", label: "Clear Date"}]);

    useEffect(async () => {
        setData(await getData())
    }
    ,[]);

  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={data}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
  );
}