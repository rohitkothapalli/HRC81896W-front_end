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
    width: 400,
    bgcolor: '#11202A',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    color: "white",
};



export default function BasicModal() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <>
            <Button id='btn-21' onClick={handleOpen}>DELETE</Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style} >
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Delete Records ?
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                       Are you sure you want to delete these records[s]?
                    </Typography>

                    <br />
                    <ButtonGroup  variant="outlined" aria-label="outlined button group">
                        <Button id="add-btn" >CANCEL</Button>
                        <Button id="add-btn" >DELETE</Button>   
                    </ButtonGroup>

                </Box>
            </Modal>
        </>
    );
}
