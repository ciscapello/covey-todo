import React from "react";
import { useDispatch, useSelector } from 'react-redux';
import { remove, edit } from '../features/todo.js/todoSlice';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { List, ListItemButton, IconButton } from '@mui/material';
import { v4 } from 'uuid';



export default function TodoList() {
    let dispatch = useDispatch();
    let todoList = useSelector(state => state.todo.todos);
    

    return <List className='listMui'>
        {todoList.map((todo, i) => (
            <ListItemButton 
                key={v4()}
                // style={{ textDecoration: `${todo.completed ? 'line-through' : 'none'}` }}
                // onClick={(e) => dispatch(complete(e, i))}
            >
                <div>
                    {todo.text}
                </div>
                <div className='btn-group'>
                    <IconButton onClick={() => dispatch(remove(i))}>
                        <DeleteIcon />
                    </IconButton>
                    <IconButton onClick={() => dispatch(edit(i))}>
                        <EditIcon />
                    </IconButton>
                </div>
            </ListItemButton>
        ))}
        </List>

}

