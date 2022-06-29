import React from "react";
import { TextField, Button, MenuItem, FormControl, InputLabel } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import { useDispatch, useSelector } from 'react-redux';
import { add, change, clear, typeChange } from '../features/todo.js/todoSlice';
import Select from '@mui/material/Select';




export default function Input () {
    const dispatch = useDispatch();
    let input = useSelector(state => state.todo.input);
    let type = useSelector(state => state.todo.type);
    // let [ type, setType ] = useState();

    let handleChange = (e) => {
        dispatch(typeChange(e.target.value))
    }

    let clickHandler = () => {
        if ((input && input.trim().length) && type) {
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
            className='input'
            />
            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Type</InputLabel>
                <Select
                    labelId="demo-select-small"
                    id="demo-select-small"
                    value={type}
                    label="Type"
                    // defaultOpen={true}
                    onChange={handleChange}
                >
                    <MenuItem value={1}>I. Urgent and important</MenuItem>
                    <MenuItem value={2}>II. Not urgent, but important</MenuItem>
                    <MenuItem value={3}>III. Urgent, not important</MenuItem>
                    <MenuItem value={4}>IV. Not Urgent and not important</MenuItem>
                </Select>
            </FormControl>


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