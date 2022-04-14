import axios from "axios";

export const getData = async() => {
   let response = await axios.get("http://localhost:8080/backend/DataLoading");
   let data = response.data.cursors;
   return data;
}


export const addCursor = async ({business_code,cust_number,clear_date}) => {
   let data = "business_code=" + business_code + "&cust_number=" + cust_number + "&clear_date=" + clear_date;
   let response = await axios.get("http://localhost:8080/backend/addCursor?"+data);
   console.log(data);
   return response.data;
}