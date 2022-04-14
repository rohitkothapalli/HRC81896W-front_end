import React from 'react';
import './crud.css';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import TextField from '@mui/material/TextField';
import AddModal from './AddModal';
import EditModal from './EditModal';
import DeleteModal from './DeleteModal';
//modal or dialog

export default function Crud() {
    return (
        <div className='main-container'>
            <ButtonGroup variant="text" aria-label="text button group" id="bset-1">
                <Button id="btn-11">PREDICT </Button>
                <Button id="btn-11">ANALYTICS VIEW</Button>
                <Button id='btn-11' >ADVANCE SEARCH</Button>
            </ButtonGroup>

            <TextField id="outlined-basic" label="Search Customer ID" variant="outlined" className='bset-2' />

            <ButtonGroup variant="text" aria-label="text button group" id="bset-3">
            <AddModal />
            <EditModal />
            <DeleteModal />
            </ButtonGroup>
                
        </div>
    )
}
