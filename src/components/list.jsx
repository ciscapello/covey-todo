import React from "react";
import { useDispatch } from 'react-redux';
import { remove, edit } from '../features/todo.js/todoSlice';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { List, ListItemButton, IconButton } from '@mui/material';
import { v4 } from 'uuid';



export default function TodoList({ todos }) {
    let dispatch = useDispatch();
    // let todoList = useSelector(state => state.todo.todos);
    

    return <List className='listMui'>
        {todos.map((todo, i) => (
            <ListItemButton 
                key={v4()}
                // style={{ textDecoration: `${todo.completed ? 'line-through' : 'none'}` }}
                // onClick={(e) => dispatch(complete(e, i))}
            >
                <div className="list-item">
                    {todo.text}
                </div>
                <div className='btn-group'>
                    <IconButton onClick={() => dispatch(remove(todo.key))}>
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

