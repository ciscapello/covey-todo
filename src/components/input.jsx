import React from "react";
import { TextField, Button } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import { useDispatch, useSelector } from 'react-redux';
import { add, change, clear } from '../features/todo.js/todoSlice';



export default function Input () {
    const dispatch = useDispatch();
    let input = useSelector(state => state.todo.input);

    let clickHandler = () => {
        if (input && input.trim().length) {
            dispatch(add(input));
            dispatch(clear());
        } else {
            dispatch(clear());
        }
    }
    
    return <div className='input_container'>
        <TextField 
            fullWidth id='outlined-basic' 
            label='Enter your task'
            value={input}
            onKeyDown={e => e.key === 'Enter' && clickHandler()}
            onChange={(e) => dispatch(change(e.target.value))}
            />
        <Button 
            variant="contained" 
            size='large' 
            endIcon={<SendIcon />}
            onClick={() => clickHandler()}
            >
            ADD
        </Button>
    </div>
}