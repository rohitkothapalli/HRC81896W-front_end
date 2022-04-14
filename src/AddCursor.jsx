function AddCursor({business_code,cust_number,clear_date,changeHandler,submitHandler}){
    return <>
        <form>
            <label> Business Code </label>
            <input name="business_code" value={business_code} onChange={changeHandler} />
            <label> Customer Number </label>
            <input name="cust_number" value={cust_number} onChange={changeHandler}/>
            <label> Clear Date </label>
            <input name="clear_date" value={clear_date} onChange={changeHandler}/>
            <input type={"submit"} value={"Add Cursor"} onClick={submitHandler}/>
        </form>
    </>
}

export default AddCursor;