import React, { useEffect } from 'react';
import {useState} from "react";
import { getData } from './services/data';
import { addCursor } from './services/data';
import AddCursor from './AddCursor';
import AddModal from './components/Crud/AddModal';


export default function MyGrid() {
    const [data,setData] = useState([]);
    const [cursor,setCursor] = useState({business_code:'',cust_number:'',clear_date:''});

    const {business_code,cust_number,clear_date} = cursor;

    const changeHandler = (e) => {
        const {name,value} = e.target;
        setCursor({...cursor,[name]: value});
    }

    const submitHandler = async (e) => {
        e.preventDefault();
        let response = await addCursor(cursor);
        
        setData(await getData())
        if(response)
        {
            setCursor({business_code:'',cust_number:'',clear_date:''});
        }
    }

    useEffect(async () => {
        setData(await getData())
        console.log("first");
    }
    ,[]);


  return <>
        <AddCursor
        business_code={business_code} 
        cust_number={cust_number} 
        clear_date={clear_date}
        changeHandler={changeHandler} 
        submitHandler={submitHandler} 
        />
        <br/> <br/>
      <table>
          <thead>
              <tr>
                  <th>Sl no</th>
                  <th> Business Code </th>
                  <th> Customer Number </th>
                  <th> Clear Date </th>
                  <th> Buisness Year </th>
                  <th> Document Id </th>
                  <th> Posting Date </th>
                  <th> Document Create Date </th>
                  <th> Due Date </th>
                  <th> Invoice Currency </th>
                  <th> Document Type </th>
                  <th> Posting Id </th>
                  <th> Total Open Amount </th>
                  <th> Baseline Create Date </th>  
                  <th> Customer Create Date </th>  
                  <th> Invoice id </th>  
                  
              </tr>
          </thead>
          
          <tbody>
              {data.map(cursor=>(
                  <tr key={cursor.sl_no}>
                      <td> {cursor.sl_no}</td>
                      <td> {cursor.business_code}</td>
                      <td> {cursor.cust_number}</td>
                      <td> {cursor.clear_date}</td>
                      <td> {cursor.buisness_year}</td>
                      <td> {cursor.doc_id}</td>
                      <td> {cursor.posting_date}</td>
                      <td> {cursor.document_create_date}</td>                 
                      <td> {cursor.due_in_date}</td>
                      <td> {cursor.invoice_currency}</td>
                      <td> {cursor.document_type}</td>
                      <td> {cursor.posting_id}</td> 
                      <td> {cursor.total_open_amount}</td>
                      <td> {cursor.baseline_create_date}</td>
                      <td> {cursor.cust_payment_terms}</td>
                      <td> {cursor.invoice_id}</td>
                      
                      
                  </tr>
              ))

              }
          </tbody>
      </table>
  </>
}
