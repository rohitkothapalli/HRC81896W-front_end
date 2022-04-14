import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import ButtonGroup from '@mui/material/ButtonGroup';
import './modal.css';
import './crud.css';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 1000,
    bgcolor: '#11202A',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    color: "white",
};



export default function AddModal({business_code,cust_number,clear_date,changeHandler,submitHandler}) {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <>
            <Button id='btn-21' onClick={handleOpen}>ADD</Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style} >
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        ADD
                    </Typography>
                    <br />
                    <div id='add-1'>
                        <TextField id="outlined-basic" label="Business Code " variant="outlined" name='business_code' value={business_code} onChange={changeHandler}/>
                        <TextField id="outlined-basic" label="Cust Number" variant="outlined" name="cust_number" value={cust_number} onChange={changeHandler} />
                        <TextField id="outlined-basic" label="Clear date" variant="outlined" name="clear_date" value={clear_date} onChange={changeHandler} />
                        <TextField id="outlined-basic" label="Buisness Year" variant="outlined" />
                    </div>
                    <br />
                    <div id='add-1'>

                        <TextField id="outlined-basic" label="Document Id " variant="outlined" />
                        <TextField id="outlined-basic" label="Posting Date" variant="outlined" />
                        <TextField id="outlined-basic" label="Document Create Date" variant="outlined" />
                        <TextField id="outlined-basic" label="Due Date" variant="outlined" />
                    </div>
                    <br />
                    <div id='add-1'>

                        <TextField id="outlined-basic" label="Invoice Currency " variant="outlined" />
                        <TextField id="outlined-basic" label="Document type" variant="outlined" />
                        <TextField id="outlined-basic" label="Posting id" variant="outlined" />
                        <TextField id="outlined-basic" label="Total Open Amount" variant="outlined" />
                    </div>
                    <br />
                    <div id='add-1'>
                        <TextField id="outlined-basic" label="Baseline Create Date" variant="outlined" />
                        <TextField id="outlined-basic" label="Customer Payment Terms" variant="outlined" />
                        <TextField id="outlined-basic" label="Invoice id" variant="outlined" />
                    </div>
                    <br />
                    <ButtonGroup  variant="outlined" aria-label="outlined button group">
                        <Button id="add-btn-1" type={"submit"} value={"Add Cursor"} onClick={submitHandler} >ADD</Button>
                        <Button id="add-btn-1" >CANCEL</Button>   
                    </ButtonGroup>
                </Box>

            </Modal>


        </>
    );
}
