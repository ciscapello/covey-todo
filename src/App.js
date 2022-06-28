import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { List, ListItemButton, IconButton } from '@mui/material';



import './App.css';

function App() {
    let [ todoList, setTodoList ] = useState(listOfTodo);
    let [ input, setInput ] = useState('');

    let clickHandler = () => {
        if (input && input.trim().length) {
            setTodoList([ ...todoList, { text: input.trim(), key: `${input + 12}` } ]);
            setInput('');
        } else {
            setInput('');
        }
    }

    let changeHandler = (e) => {
        setInput(() =>  e.target.value );
    }

    let remove = (index) => {
        let newList = todoList.filter((elem, i) => i !== index);
        setTodoList(newList);
    }

    let edit = (index) => {
        setInput(() => todoList[index].text);
        remove(index);
    }
    

    return <div className='container'>
        <div className='input_container'>
            <TextField 
                fullWidth id='outlined-basic' 
                label='Enter your task'
                value={input}
                onKeyDown={e => e.key === 'Enter' && clickHandler()}
                onChange={changeHandler}
                />
            <Button 
                variant="contained" 
                size='large' 
                endIcon={<SendIcon />}
                onClick={clickHandler}
                >
                ADD
            </Button>
        </div>
    <div className='list'>
        <List className='listMui'>
            {todoList.map((todo, i) => (
                <ListItemButton 
                    key={todo.key}
                    className='list-item'
                >
                    <div>
                        {todo.text}
                    </div>
                    <div className='btn-group'>
                        <IconButton onClick={() => remove(i)}>
                            <DeleteIcon />
                        </IconButton>
                        <IconButton onClick={() => edit(i)}>
                            <EditIcon />
                        </IconButton>
                    </div>
                </ListItemButton>
            ))}
        </List>
    </div>
  </div>
}

let listOfTodo = () => {
    return [
        { text: 'пойти поделать всякие дела', status: 'ok', key: 1 },
        { text: 'пойти поучиться', status: 'ok', key: 2 },
        { text: 'выйти и зайти', status: 'ok', key: 3 },
    ]
}

export default App;